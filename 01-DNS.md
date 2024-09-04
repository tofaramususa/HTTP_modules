Here's the file organized in GitHub markdown format:

# DNS

## Web Addresses

In the real world, we use physical addresses to find locations. In computing, web clients find other computers over the internet using **Internet Protocol (IP) addresses**. Each device connected to the internet has a unique IP address.

## Domain Names and IP Addresses

When we browse the internet, we type in a human-readable domain name. That domain is converted into an IP address, which tells our computer where the server is located on the internet.

[dns to ip to machine]

An IP address typically looks like a sequence of numbers separated by periods, ranging from 0 to 255.

## Assignment

Cloudflare provides an HTTP server we can use to look up the IP address of any domain.

I've provided a `fetchIPAddress` function that uses the fetch API to communicate with Cloudflare. The function takes a domain name as input and should return the associated IP address.

On line 9, the function is logging the entire object received from Cloudflare. Run the code to see the object's structure, then update the code to return just the IP address and remove the logging. You may need to review the fetch API.

### Troubleshooting Tip

**Failed to fetch** - If you're having difficulty running this assignment, make sure your browser isn't blocking requests to third-party domains!

## DNS

A "domain name" or "hostname" is just one portion of a URL. We'll cover other parts of a URL later.

For example, the URL `https://homestarrunner.com/toons` has a hostname of `homestarrunner.com`. The `https://` and `/toons` portions aren't part of the domain name -> IP address mapping we've been discussing.

## Using the URL API in JavaScript

The URL API is built into JavaScript. You can create a new URL object:

```javascript
const urlObj = new URL('https://homestarrunner.com/toons')
```

And then you can extract just the hostname:

```javascript
const hostname = urlObj.hostname
console.log(hostname) // homestarrunner.com
```