
/* Synchronous::
1. JavaScript is a synchronous language by default
2. JavaScript engine executes our program sequentially
3. one line at a time from top to bottom in the exact order of the statements
*/

console.log("first");
console.log("second");
console.log("third");




/* Asynchronous::
1. We can make our code asynchronous in javascript
2. Unlike synchronous operations, an asynchronous operation does not block the next task
3. even if the current task isn’t completed yet
4. JavaScript engine works with additional features which allows JavaScript to behave asynchronously.
5. in JS asynchronous can be achieved using Callback, promises, async await.
*/

console.log("first");

setTimeout(() => {
    console.log("second");
}, 3000)

console.log("third");




/* Callback::
1. When we pass a function in another fuction as function argument or parameter 
2. Nesting of callback functions are call/create callback hell
3. Hard to read & understand the code 
4. Solution is - Promises
*/

function resolveAfter2Seconds(callback) {
    setTimeout(() => {
        callback(null, 'resolved');
    }, 2000);
}

function asyncCall(callback) {
    console.log('calling');
    resolveAfter2Seconds((err, result) => {
        if (err) {
            callback(err);
        } else {
            console.log(result);
            callback(null, result);
        }
    });
}

asyncCall((err, result) => {
    if (err) {
        console.error('Error:', err);
    }
});




/*  Promises::
1. Promises basically represents upcoming complition or failure of an asynchronous event and it's resulting value
2. Ex: Order item from Amazon, APIs 
3. States - Resolve, Reject, Pending
4. Keyword - Promise 
*/

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

function asyncCall() {
    console.log('calling');
    resolveAfter2Seconds()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

asyncCall();




/*  Async await::
1. Async await is a special syntax to work with promises in a more comfortable way
2. syntex is easy to understand and use
3. async - ensures that the function returns a promise , and wraps non-promises in it.
4. await - makes JavaScript wait until that promise settles and returns its result.
*/

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();




/*
| Feature         | Promises                                | Async/Await                                   |
|-----------------|-----------------------------------------|-----------------------------------------------|
| Syntax          | `.then()` and `.catch()` methods        | `async` and `await` keywords                  |
| Readability     | Can lead to promise chaining            | Provides cleaner and more readable syntax     |
| Error Handling  | `.catch()` method for error handling    | try/catch blocks for error handling           |
| Chaining        | Chained with multiple `.then()` calls   | Sequential execution, easier to understand    |
| Debugging       | Can be harder to debug                  | Easier debugging with traditional techniques  |
*/