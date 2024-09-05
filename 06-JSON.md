# JSON Syntax

**JSON** (JavaScript Object Notation) is a standard for representing structured data based on JavaScript's object syntax. It is commonly used to transmit data in web apps via HTTP. For example, the HTTP `fetch()` requests we have been using in this course have been returning Fantasy Quest locations, users, and items as JSON.

## JSON Data Types

JSON supports the following primitive data types:

- **Strings**, e.g. `"Hello, World!"`
- **Numbers**, e.g. `42` or `3.14`
- **Booleans**, e.g. `true`
- **Null**, e.g. `null`

And the following collection types:

- **Arrays**, e.g. `[1, 2, 3]`
- **Object literals**, e.g. `{"key": "value"}`

Because we already understand what JavaScript objects look like, understanding JSON is easy! JSON is just a stringified JavaScript object. The following is valid JSON data:

```json
{
  "movies": [
    {
      "id": 1,
      "genre": "Action",
      "title": "Iron Man",
      "director": "Jon Favreau"
    },
    {
      "id": 2,
      "genre": "Action",
      "title": "The Avengers",
      "director": "Joss Whedon"
    }
  ]
}
```

## Parsing HTTP Responses as JSON

JavaScript provides us with some easy tools to help us work with JSON. After making an HTTP request with the `fetch()` API, we get a **Response** object. That response object offers us some methods that help us interact with the response. One such method is the `.json()` method. The `.json()` method takes the response stream returned by a fetch request and returns a promise that resolves into a JavaScript object parsed from the JSON body of the HTTP response!

```javascript
const resp = await fetch(...);
const javascriptObjectResponse = await resp.json();
```

### Assignment

Our `getLocations` function is almost done; we just need to parse the response data as JSON and return it.

**Note**: It's important to note that the result of this method is **NOT JSON**. It is the result of taking JSON data from the HTTP response body and parsing that input into a JavaScript Object.

## JSON Review

JSON is a stringified representation of a JavaScript object, which makes it perfect for saving to a file or sending in an HTTP request. Remember, an actual JavaScript object is something that exists only within your program's variables. If we want to send an object outside our program, for example, across the internet in an HTTP request, we need to convert it to JSON first.

## JSON Isn't Just for JavaScript

Just because JSON is called **JavaScript Object Notation** doesn't mean it's only used by JavaScript code! JSON is a common standard that is recognized and supported by every major programming language. For example, even though Boot.dev's backend is written in Go, we still use JSON as the communication format between the front-end and backend.

## Common Use-Cases

- In HTTP request and response bodies
- As formats for text files. `.json` files are often used as configuration files.
- In NoSQL databases like MongoDB, ElasticSearch, and Firestore

## Sending JSON

JSON isn't just something we get from the server; we can also send JSON data!

In JavaScript, two of the main methods we have access to are `JSON.parse()` and `JSON.stringify()`.

### JSON.stringify()

`JSON.stringify()` is particularly useful for sending JSON. It takes a JavaScript object or value as input and converts it into a string. This is useful when we need to serialize the objects into strings to send them to our server or store them in a database.

### Parsing JSON

The `JSON.parse()` method takes a JSON string as input and constructs the JavaScript value/object described by the string. This allows us to work with the JSON as an object!

```javascript
const json = '{"title": "Avengers Endgame", "Rating":4.7, "inTheaters":false}';
const obj = JSON.parse(json);

console.log(obj.title); // Avengers Endgame
```

### Assignment

It's common for developers to write local tests using mock (or fake) data that looks like real data. Let's ensure that the JSON format that the backend Fantasy Quest developers provided to us is valid JSON! It would be a shame to write a bunch of code just to find out the backend has given us the wrong format.

Complete the `parseLocation` function. Use a try/catch block to safely call `JSON.parse` on the `locationString` provided. Keep in mind that `JSON.parse` throws an error if it is given a string that isn't valid JSON.

If you can parse the string successfully, use the `printLocationObj` function to print the parsed object. If an error was thrown, just log "invalid JSON string" to the console.

## XML

We can't talk about JSON without mentioning **XML**. XML, or **Extensible Markup Language**, is a text-based format for representing structured information, like JSON - but different (and a bit more verbose).

### XML Syntax

XML is a markup language like HTML, but it's more generalized in that it does not use predefined tags. Just like how in a JSON object keys can be called anything, XML tags can also have any name.

**XML representing a movie:**

```xml
<root>
  <id>1</id>
  <genre>Action</genre>
  <title>Iron Man</title>
  <director>Jon Favreau</director>
</root>
```

**The same data in JSON:**

```json
{
  "id": "1",
  "genre": "Action",
  "title": "Iron Man",
  "director": "Jon Favreau"
}
```

### Why Use XML?

XML and JSON both accomplish similar tasks, so which should you use?

XML used to be used for the same things that today JSON is primarily used for. Configuration files, HTTP bodies, and other data-transfer can work with either JSON or XML. Personally, I believe that if JSON works, you should favor it over XML. JSON is:

- **Lighter-weight**
- **Easier to read**
- **Has better support in most programming languages**

There are cases where XML might still be the better, or maybe even necessary, but that tends to be the exception rather than the rule.