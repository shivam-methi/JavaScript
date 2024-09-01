## Conditional Statements:
- In JavaScript, conditional statements are used to perform different actions based on different conditions.
- These conditional statements are fundamental for controlling the flow of a program based on dynamic conditions.


### `if` Statement:
- The `if` statement is used to execute a block of code if a specified condition is true.

```js
    // Just if - handling a ramdom popup
    let popupExist = false
    if (popupExist === true) console.log(`>>> Perform click action...`);


    // Just if (NOT) - Checking for falsy value
    let data = ""
    if(!data) throw Error(">>> No valid data provided")


    // if in loops
    for (let i = 1; i <=10; i++){
        if (i === 6) break
        console.log(i);
    }
    console.log(`>> After the for loop..`);
```


### `else` Statement:
- The `else` statement is used to execute a block of code if the condition in the `if` statement is false.

```js
    // if else: If file exist read the file, else create the file
    let fileExist = "N"

    if (fileExist === "Y") {
    console.log(`>> Reading the file`);
    } else {
    console.log(`>> Creating the file`);
    }
```


### `else if` Statement:
- The `else if` statement is used to specify a new condition if the first condition is false.

```js
    // if else if ... Nested conditions... Act based on list of conditions
    let err = "AssertionError"
    if (err === "Error") {
        console.log(`>> Retry...`);
    } else if (err === "AssertionError") {
        console.log(`>> Fail the test`);
    } else if (err === "DataValidation") {
        console.log(`>> Read the test data file...`);
    } else {
        console.log(`>> Print the error message`);
    }

    // If else [Inner conditions]: Quering a database for test data
    let isSuccess = false
    if(isSuccess === true) {
        console.log(`>> Storing the db values..`);
    } else {
        console.log(`No data recived`);
        let errorCode = "ACCEPT"
        if(errorCode === "ACCEPT") {
            console.log(`>> Continue the exection...`);
        } else {
            console.log(`>> Fail the test...`);
        }
    }
```


### `switch` Statement: 
- The switch statement is used to perform different actions based on different conditions.

```js
    let browser = "brave"

    switch (browser) {
    case "chrome":
        console.log(`>> Running chrome browser...`);
        break;
    case "firfox":
        console.log(`>> Running firefox browser...`);
        break;
    case "edge":
        console.log(`>> Running edge browser...`);
        break;
    default:
        console.log(`No valid browser: ${browser} is provided`);
    }
```


### Ternary Operator:
- The ternary operator is a shorthand way of writing an if-else statement.

```js
    let age = 20;
    let canVote = age >= 18 ? "Yes" : "No";
    console.log(canVote); // Outputs "Yes"
```


### Use switch when:
- When You are comparing a single variable or expression against multiple fixed values.
- When You want a cleaner and more readable code structure for multiple cases.
- When You need to optimize for scenarios where multiple discrete values need to be handled distinctly.


### Use if-else when:
- When The conditions are complex, involve ranges, or require logical operations.
- When You need more flexibility, such as checking multiple variables or expressions within the same condition.

