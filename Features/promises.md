## Promises:

### Synchronous:
- JavaScript is a synchronous language by default.
- JavaScript engine executes our program sequentially.
- one line at a time from top to bottom in the exact order of the statements.

```js
    console.log("first");
    console.log("second");
    console.log("third");
```


### Asynchronous:
- We can make our code asynchronous in javascript.
- Unlike synchronous operations, an asynchronous operation does not block the next task.
- even if the current task isn’t completed yet.
- JavaScript engine works with additional features which allows JavaScript to behave asynchronously.
- in JS asynchronous can be achieved using Callback, promises, async await.
- Examples:
  - Getting an API response
  - DB operations
  - I/O file operations

```js
    console.log("first");

    setTimeout(() => {
        console.log("second");
    }, 3000)

    console.log("third");
```


### Callbacks:
- When we pass a function in another fuction as function argument or parameter.
- Nesting of callback functions are call/create callback hell.
- Hard to read & understand the code.
- Solution is - Promises.

```js
    // Scenario: 
    // 1. fetchUserData(): Fetches user data from a server.
    // 2. fetchPosts(userId): Fetches posts based on the user ID.
    // 3. fetchComments(postId): Fetches comments based on the post ID.

    // 1. fetchUserData():
    function fetchUserData(callback, errorCallback) {
        setTimeout(() => {
            const error = false; // Simulate an error
            if (error) {
                errorCallback("Failed to fetch user data");
            } else {
                console.log("Fetched user data");
                callback({ userId: 1 });
            }
        }, 1000);
    }

    // 2. fetchPosts(userId):
    function fetchPosts(userId, callback, errorCallback) {
        setTimeout(() => {
            if (!userId) {
                errorCallback("Invalid user ID");
            } else {
                console.log(`Fetched posts for user ${userId}`);
                callback([{ postId: 1 }]);
            }
        }, 1000);
    }

    // 3. fetchComments(postId):
    function fetchComments(postId, callback, errorCallback) {
        setTimeout(() => {
            if (!postId) {
                errorCallback("Invalid post ID");
            } else {
                console.log(`Fetched comments for post ${postId}`);
                callback([{ commentId: 1 }]);
            }
        }, 1000);
    }


    // Using Callbacks with Error Handling:
    fetchUserData(
        user => {
            fetchPosts(
                user.userId,
                posts => {
                    fetchComments(
                        posts[0].postId,
                        comments => {
                            console.log("Comments:", comments);
                        },
                        error => console.error(error)
                    );
                },
                error => console.error(error)
            );
        },
        error => console.error(error)
    );
```
- Real time Use case:
  - Run command: `npm install node-fetch`
  - Import module: `import fetch from 'node-fetch';`

```js
    function getAPIRes() {
        fetchUrl("https://api.github.com/users/github", (err, meta, body) => {
            console.log(body.toString());
        });
    }

    getAPIRes();
```


### Promises:
- Promises is an object that represents upcoming complition or failure of an asynchronous event 
  and it's resulting value
- To overcome challenges of nested callbacks/callback hell
- Ex: Order item from Amazon, APIs 
- Keyword - Promise 
- States: 
    - Pending: Initial state before being resolved or rejected
    - Resolve: being fullfiled/settles 
    - Reject: being rejected  
- Consume: 
    - .then(): to get resolved value(success)
    - .catch(): to get rejected value(failure)

```js    
    // Scenario: 
    // 1. fetchUserData(): Fetches user data from a server.
    // 2. fetchPosts(userId): Fetches posts based on the user ID.
    // 3. fetchComments(postId): Fetches comments based on the post ID.

    // 1. fetchUserData():
    function fetchUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const error = false; // Simulate an error
                if (error) {
                    reject("Failed to fetch user data");
                } else {
                    console.log("Fetched user data");
                    resolve({ userId: 1 });
                }
            }, 1000);
        });
    }

    // 2. fetchPosts(userId):
    function fetchPosts(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!userId) {
                    reject("Invalid user ID");
                } else {
                    console.log(`Fetched posts for user ${userId}`);
                    resolve([{ postId: 1 }]);
                }
            }, 1000);
        });
    }

    // 3. fetchComments(postId):
    function fetchComments(postId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!postId) {
                    reject("Invalid post ID");
                } else {
                    console.log(`Fetched comments for post ${postId}`);
                    resolve([{ commentId: 1 }]);
                }
            }, 1000);
        });
    }

    // Using Promises with Error Handling:
    fetchUserData()
        .then(user => fetchPosts(user.userId))
        .then(posts => fetchComments(posts[0].postId))
        .then(comments => {
            console.log("Comments:", comments);
        })
        .catch(error => {
            console.error("Error:", error);
        });
```
- Real time Use case:
  - Run command: `npm install node-fetch`
  - Import module: `import fetch from 'node-fetch';`

```js
    function getAPIRes() {
        fetch("https://api.github.com/users/github")
            .then((res) => {
                return res.json();
            })
            .then((updatedRes) => {
                console.log(updatedRes);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getAPIRes();
```


### async/await:
- An Async function allows you to handle asynchronous code in a manner that appears synchronous.  
- Async await is a special syntax to work with promises in a more comfortable way
- syntex is easy to understand and use
- async
  - async is a function
  - ensures that the function returns a promise , and wraps non-promises in it.
- await
  - await is an operator
  - makes JavaScript wait until that promise settles(resolved/rejected) and returns its result.

```js    
    // Scenario: 
    // 1. fetchUserData(): Fetches user data from a server.
    // 2. fetchPosts(userId): Fetches posts based on the user ID.
    // 3. fetchComments(postId): Fetches comments based on the post ID.

    // 1. fetchUserData():
    function fetchUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const error = false; // Simulate an error
                if (error) {
                    reject("Failed to fetch user data");
                } else {
                    console.log("Fetched user data");
                    resolve({ userId: 1 });
                }
            }, 1000);
        });
    }

    // 2. fetchPosts(userId):
    function fetchPosts(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!userId) {
                    reject("Invalid user ID");
                } else {
                    console.log(`Fetched posts for user ${userId}`);
                    resolve([{ postId: 1 }]);
                }
            }, 1000);
        });
    }

    // 3. fetchComments(postId):
    function fetchComments(postId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!postId) {
                    reject("Invalid post ID");
                } else {
                    console.log(`Fetched comments for post ${postId}`);
                    resolve([{ commentId: 1 }]);
                }
            }, 1000);
        });
    }

    // Using async/await with Error Handling:
    async function fetchData() {
        try {
            const user = await fetchUserData();
            const posts = await fetchPosts(user.userId);
            const comments = await fetchComments(posts[0].postId);
            console.log("Comments:", comments);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    fetchData();
```
- Real time Use case:
  - Run command: `npm install node-fetch`
  - Import module: `import fetch from 'node-fetch';`

```js
    async function getAPIRes() {
        let response = await fetch("https://api.github.com/users/github")
        let data = await response.json()
        console.log(data);
    }

    getAPIRes();
```


| Feature       | Callbacks                                  | Promises                             | Async/Await                                  |
| --------------| -------------------------------------------| -------------------------------------| ---------------------------------------------|
| Syntax        | Function passed as argument                | `.then()` and `.catch()` methods     | `async` and `await` keywords                 |
| Readability   | Harder to read and maintain (callback hell)| More readable, can chain methods     | Most readable, looks like synchronous code   |
| Error Handling| Must handle errors in each callback        | `.catch()` for promise rejections    | try/catch blocks within async functions      |
| Code Structure| Nesting of functions                       | Flat structure with chaining         | Flat structure, sequential flow              |
| Chaining      | Complex and can lead to callback hell      | Chained with multiple `.then()` calls| sequential flow with `await`                 |
| Debugging     | Harder to debug                            | Easier than callbacks                | Easiest to debug due to synchronous structure|
| Support       | Supported in all JavaScript environments   | ES6 and later                        | ES2017 and later                             |


