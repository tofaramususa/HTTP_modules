1. Communicating on the web
Instagram would be pretty terrible if you had to manually copy your photos to your friend's phone when you wanted to share them. Modern applications need to be able to communicate information between devices over the internet.

Gmail doesn't just store your emails in variables on your computer, it stores them on computers in their data centers
You don't lose your Slack messages if you drop your computer in a lake, those messages exist on Slack's servers
How does web communication work?
When two computers communicate with each other, they need to use the same rules. An English speaker can't communicate verbally with a Japanese speaker, similarly, two computers need to speak the same language to communicate.

This "language" that computers use is called a protocol. The most popular protocol for web communication is HTTP, which stands for Hypertext Transfer Protocol.


Fantasy Quest Online
Throughout this course, we'll be building parts of an online game called "Fantasy Quest". It's a typical fantasy RPG with one key difference: all our player's data is stored online, on our servers.

Assignment
Take a look at the getItemData function that I've provided in http.js. It retrieves items from Fantasy Quest's servers via HTTP.

I also wrote a logItems function for you. In main.js, call logItems with an argument of the items variable returned from getItemData.

2. HTTP Requests and Responses
At the heart of HTTP is a simple request-response system. The "requesting" computer, also known as the "client", asks another computer for some information. That computer, "the server" sends back a response with the information that was requested.

HTTP powers websites
HTTP, or Hypertext Transfer Protocol, is a protocol designed to transfer information between computers.

There are other protocols for communicating over the internet, but HTTP is the most popular and is particularly great for websites and web applications. Each time you visit a website, your browser is making an HTTP request to that website's server. The server responds with all the text, images, and styling information that your browser needs to render its pretty website!

3. HTTP URLs
A URL, or Uniform Resource Locator, is the address of another computer, or "server" on the internet. Part of the URL specifies where to reach the server, and part of it tells the server what information we want.

url image to resource on internet
Put simply, a URL represents a piece of information on some computer somewhere. We can get access to it by making a request, and reading the response that the server replies with.

4. JavaScript's Fetch API
In this course, we'll be using JavaScript's built-in fetch API to make HTTP requests. We already used it in the last two assignments!

The fetch function is made available to us by the JavaScript language running in the browser, all we have to do is provide it with the parameters it requires.

Using fetch
const response = await fetch(url, settings)
const responseData = await response.json()
Copy icon
We'll go in-depth on the various things happening in this standard fetch call later, but let's cover some basics for now.

response is the data that comes back from the server
url is the URL we are making a request to
settings is an object containing some request-specific settings
The await keyword tells JavaScript to wait until the response comes back from the server before continuing
response.json() converts the response data from the server into a JavaScript object
