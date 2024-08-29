## Promise:

### Synchronous:
- JavaScript is a synchronous language by default
- JavaScript engine executes our program sequentially
- one line at a time from top to bottom in the exact order of the statements

```js
    console.log("first");
    console.log("second");
    console.log("third");
```


### Asynchronous:
- We can make our code asynchronous in javascript
- Unlike synchronous operations, an asynchronous operation does not block the next task
- even if the current task isn’t completed yet
- JavaScript engine works with additional features which allows JavaScript to behave asynchronously.
- in JS asynchronous can be achieved using Callback, promises, async await.

```js
    console.log("first");

    setTimeout(() => {
        console.log("second");
    }, 3000)

    console.log("third");
```


### Callback:
- When we pass a function in another fuction as function argument or parameter 
- Nesting of callback functions are call/create callback hell
- Hard to read & understand the code 
- Solution is - Promises

```js
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
```


### Promises:
- Promises basically represents upcoming complition or failure of an asynchronous event and it's resulting value
- Ex: Order item from Amazon, APIs 
- States - Resolve, Reject, Pending
- Keyword - Promise 

```js
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
```


### Async await:
- Async await is a special syntax to work with promises in a more comfortable way
- syntex is easy to understand and use
- async -> ensures that the function returns a promise , and wraps non-promises in it.
- await -> makes JavaScript wait until that promise settles and returns its result.

```js
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
```


| Feature        | Callbacks                                   | Promises                              | Async/Await                                   |
| -------------- | ------------------------------------------- | ------------------------------------- | --------------------------------------------- |
| Syntax         | Function passed as argument                 | `.then()` and `.catch()` methods      | `async` and `await` keywords                  |
| Readability    | Harder to read and maintain (callback hell) | More readable, can chain methods      | Most readable, looks like synchronous code    |
| Error Handling | Must handle errors in each callback         | `.catch()` for promise rejections     | try/catch blocks within async functions       |
| Code Structure | Nesting of functions                        | Flat structure with chaining          | Flat structure, sequential flow               |
| Chaining       | Complex and can lead to callback hell       | Chained with multiple `.then()` calls | sequential flow with `await`                  |
| Debugging      | Harder to debug                             | Easier than callbacks                 | Easiest to debug due to synchronous structure |
| Support        | Supported in all JavaScript environments    | ES6 and later                         | ES2017 and later                              |

