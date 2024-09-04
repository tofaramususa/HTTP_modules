Here's the content organized in GitHub markdown format:

# What are HTTP Headers?

An HTTP header allows clients and servers to pass additional information with each request or response. Headers are just case-insensitive key-value pairs that pass additional metadata about the request or response.

HTTP requests from a web browser automatically carry with them many headers, including but not limited to:

- The type of client (e.g. Google Chrome)
- The Operating system (e.g. Windows)
- The preferred language (e.g. US English)

As developers, we can also define custom headers in each request.

## Headers API

The Headers API allows us to perform various actions on our request and response headers such as retrieving, setting, and removing them. We can access the headers object through the `Request.headers` and `Response.headers` properties.

## Assignment

Complete the `logContentType()` function. It takes a response object as input and should log out the Content-Type header to the console.

Take a look at the lower section of the code to see exactly how it's being created.

Use the `.get()` method on the response object's headers property to get access to the header you need.

## Why are headers useful?

Headers are useful for several reasons from design to security, but most often headers are used for metadata about the request or response itself. For example, let's say we wanted to ask for a player's level from the Fantasy Quest server. We need to send that player's ID to the server so it knows which player to send back the information for. That ID is my request, it's not information about my request.

Authentication is a common use case for headers. If I ask Fantasy Quest to consume a potion, I need to provide authentication information that I'm logged in, but that auth info isn't the request itself, it's just additional information about the request.

[Learn more about authentication](https://auth0.com/intro-to-iam/what-is-authentication)