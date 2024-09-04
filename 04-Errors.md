Here's the content organized in GitHub markdown format:

# Error Handling in JavaScript

When something goes wrong while a program is running, JavaScript uses the try/catch paradigm for handling those errors. Try/catch is fairly common; Python uses a similar mechanism.

## First, an error is thrown

For example, let's say we try to access a property on an undefined variable. JavaScript will automatically "throw" an error.

```javascript
const speed = car.speed
// The code crashes with the following error:
// "ReferenceError: car is not defined"
```


## Trying and catching errors

By wrapping that code in a try/catch block, we can handle the case where `car` is not yet defined.

```javascript
try {
  const speed = car.speed
} catch (err) {
  console.log(`An error was thrown: ${err}`)
  // the code cleanly logs:
  // "An error was thrown: ReferenceError: car is not defined"
}
```


## Handling a new error object

When handling a thrown Error object, you must access the `message` property of the error object to display it correctly to the console.

```javascript
let err = new Error('This is the error message');

try {
  // computation
} catch (err) {
  console.log(`An error was thrown: ${err.message}`)
  // the code cleanly logs:
  // "An error was thrown: This is the error message"
}
```


## async/await makes error handling easier

`try` and `catch` are the standard way to handle errors in JavaScript. The trouble is, the original Promise API with `.then` didn't allow us to make use of try and catch blocks.

Luckily, the `async` and `await` keywords do allow it, yet another reason to prefer the newer syntax.

## .catch() callback on promises

The `.catch()` method works similarly to the `.then()` method, but it fires when a promise is rejected instead of resolved.

### Example with .then and .catch callbacks

```javascript
fetchUser().then(function(user){
  console.log(`user fetched: ${user}`)
}).catch(function(err){
  console.log(`an error was thrown: ${err}`)
});
```


### Example of awaiting a promise

```javascript
try {
  const user = await fetchUser()
  console.log(`user fetched: ${user}`)
} catch (err) {
  console.log(`an error was thrown: ${err}`)
}
```


As you can see, the async/await version looks just like normal try/catch JavaScript!

## Assignment

[Assignment details would go here]