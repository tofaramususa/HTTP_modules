Here's the content organized in GitHub markdown format:

# Uniform Resource Identifiers

We briefly touched on URLs earlier, let's dive a little deeper into the subject.

A URI, or Uniform Resource Identifier, is a unique character sequence that identifies a resource that is (almost always) accessed via the internet.

Just like JavaScript has syntax rules, so do URIs. These rules help ensure uniformity so that any program can interpret the meaning of the URI in the same way.

URIs come in two main types:

1. URLs
2. URNs

We will focus specifically on URLs in this course, but it's important to know that URLs are only one kind of URI.

## Sections of a URL

URLs have quite a few sections. Some are required, some are not.

### Assignment

Let's use the URL API again. This time, we'll parse a URL and print all the different parts. We'll learn more about each part later, for now, let's just split and print a URL!

Complete the `printURLParts` function. It should print all the parts of a URL. For example, given this URL:

```
http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash
```

Your code should print:

```
protocol: http:
username: testuser
password: testpass
hostname: testdomain.com
port: 8080
pathname: /testpath
search: ?testsearch=testvalue
hash: #testhash
```

Use the following properties on the URL object:

- protocol
- username
- password
- hostname
- port
- pathname
- search
- hash

## Further dissecting a URL

There are 8 main parts to a URL, though not all the sections are always present. Each piece plays a role in helping clients locate the resources they're looking for.

| Part     | Required                    |
|----------|---------------------------|
| Protocol | Yes                       |
| Username | No                        |
| Password | No                        |
| Domain   | Yes                       |
| Port     | No (defaults to 80 or 443) |
| Path     | No (defaults to /)        |
| Query    | No                        |
| Fragment | No                        |

### The Protocol

The "protocol" (also referred to as the "scheme") is the first component of a URL. It defines the rules by which the data being communicated is displayed, encoded or formatted.

Some examples of different URL protocols:

- http
- ftp
- mailto
- https

For example:

```
http://example.com
mailto:noreply@fantasyquest.app
```

#### Not all schemes require a "//"

The "http" in a URL is always followed by `://`. All URLs have the colon, but the `//` part is only included for schemes that have an authority component. As you can see above, the mailto scheme doesn't use an authority component, so it doesn't need the slashes.

### Assignment

In the Fantasy Quest game menu, we show users the email addresses of their friends. We need that email to be a clickable hyperlink. When they click the hyperlink their default email client should open with a new message ready to send to the address they clicked on.

Complete the `getMailtoLinkForEmail` function. It should return a "mailto" hyperlink for the given email.

## URL Ports

The port in a URL is a virtual point where network connections are made. Ports are managed by a computer's operating system and are numbered from 0 to 65,535 (Though port 0 is reserved for the system API).

Whenever you connect to another computer over a network, you're connecting to a specific port on that computer, which is listened to by a program on that computer. A port can only be used by one program at a time, which is why there are so many possible ports.

The port component of a URL is often not visible when browsing normal sites on the internet, because 99% of the time you're using the default ports for the HTTP and HTTPS schemes: 80 and 443 respectively.

Whenever you aren't using a default port, you need to specify it in the URL. For example, port 8080 is often used by web developers when they're running their server in "test mode" on their own machines.

## Query parameters

Query parameters in a URL are not always present. In the context of websites, query parameters are often used for marketing analytics or for changing a variable on the web page. With website URLs, query parameters rarely change which page you're viewing, though they often will change the page's contents.

That said, query parameters can be used for anything the server chooses to use them for, just like the URL's path.

### How Google uses query parameters

1. Open a new tab and go to https://google.com.
2. Search for the term "hello world"
3. Take a look at your current URL. It should start with `https://www.google.com/search?q=hello+world`
4. Change the URL to say `https://www.google.com/search?q=hello+universe`
5. Press "enter"

You should see new search results for the query "hello universe". Google chose to use query parameters to represent the value of your search query. It makes sense - each search result page is essentially the same page as far as HTML structure and CSS styling are concerned - it's just showing you different results based on the search query.