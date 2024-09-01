Communicating on the web
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

HTTP Requests and Responses
At the heart of HTTP is a simple request-response system. The "requesting" computer, also known as the "client", asks another computer for some information. That computer, "the server" sends back a response with the information that was requested.

HTTP powers websites
HTTP, or Hypertext Transfer Protocol, is a protocol designed to transfer information between computers.

There are other protocols for communicating over the internet, but HTTP is the most popular and is particularly great for websites and web applications. Each time you visit a website, your browser is making an HTTP request to that website's server. The server responds with all the text, images, and styling information that your browser needs to render its pretty website!HTTP