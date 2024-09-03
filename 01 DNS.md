Web Addresses
In the real world, we use physical addresses to help us find where a friend lives, where a business is located, or where a party is being thrown (well, I don't because I'm not invited to parties, but I digress).

In computing, web clients find other computers over the internet using Internet Protocol (IP) addresses. Each device connected to the internet has a unique IP address.

Domain names and IP Addresses
When we browse the internet, we type in a human readable domain name. That domain is converted into an IP address. The IP address tells our computer where the server is located on the internet.

dns to ip to machine

An IP address typically looks like a sequence of numbers separated by periods, ranging from 0 to 255.

Assignment
Cloudflare is a tech company that provides a cool HTTP server that we can use to look up the IP address of any domain.

I've provided a fetchIPAddress function that uses the fetch API to communicate with Cloudflare. The function takes a domain name as input and should return the IP address associated with that domain.

On line 9, the function is simply logging the entire object we receive from Cloudflare to the console. Run the code to see the structure of the object, but then update the code to return just the IP address found within and remove the logging. You may need to review the fetch api.

Troubleshooting Tip
Failed to fetch - If you are having difficulty running this assignment make sure your browser is not blocking requests to third party domains!

DNS
A "domain name" or "hostname" is just one portion of a URL. We'll get to the other parts of a URL later.

For example, the URL https://homestarrunner.com/toons has a hostname of homestarrunner.com. The https:// and /toons portions aren't part of the domain name -> IP address mapping that we've been talking about.

Using the URL API in JavaScript
The URL API is built into JavaScript. You can create a new URL object:

const urlObj = new URL('https://homestarrunner.com/toons')
Copy icon
And then you can extract just the hostname:

const hostname = urlObj.hostname
console.log(hostname) // homestarrunner.com