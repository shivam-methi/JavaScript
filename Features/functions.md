### Functions/Methods:
- Function is a block of code that performs a specific task.
- Functions are the main building blocks of the program.
- They allow the code to be called many times without repetition(reusability).
- We’ve already built-in functions like: alert(message), prompt(message, default) and confirm(question).
- we can create functions of our own as well.
- two main types of functions:
    - Named function (aka function declaration/definition)
    - Anonymous function (aka function expression)
        - Callback function
        - arrow function
![alt text](<../Others/function definition.png>)


### Named Function / Function Declaration:
- A function declaration defines a function with a specified name.

```js
    // 1. function that returns a value
    function addTwoNum (num1, num2) {
        let sum = num1 + num2
        return sum
    }

    // 2. function that does an action
    function click(ele) {
        console.log(`Clicking the given ele: ${ele}`);
        ele.click()
    }

    // 3. calling a function
    let total = addTwoNum(5,5)
    console.log(total);
    click("loginBtn");

    // 4. Any type of data can be provided and no type checking is done (cons in js)
    let total = addTwoNum("five", "five")       // fivefive
    let total = addTwoNum();                    // NaN
    let total = addTwoNum(5, 5, 5)              // 10 - will take first two arguments & ignore the rest

    console.log(typeof addTwoNum);              // function 
    console.log(typeof addTwoNum(2,2));         // 4 - number
```


### Anonymous function / Function Expression:
- A function without a name is called anonymous function.
- A function expression can be stored in a variable.

```js
    // 1. function (without name is assigned to a variable)
    let addTwoNum = function (num1, num2) {
        let sum = num1 + num2
        return sum;
    }

    console.log(typeof addTwoNum);  // function
    let val = addTwoNum(2, 2)
    console.log(val);               // output: 4


    // 2. function with name is assigned to a variable
    let sumFn = function addTwoNum (num1, num2) {
        let sum = num1 + num2
        return sum
    }

    // addTwoNum(2,2)       // referenceError: addTwoNum is not defined
    let val = sumFn(2,2)
    console.log(val);       // output: 4
```


### Arrow Functions / Fat Arrow:
- Arrow functions provide a shorter syntax.
- Used mostly in callback context.
- Rules: 
    - No “function” keyword
    - => is must and left and right of arrow is context-driven
    - Arrow function can be called when it’s assigned it to a variable
    - do not have their own 'this' context
    - 
      | Notations  | Should present             | Can skip                       |
      |------------|----------------------------|--------------------------------|
      | ()         | If zero or more param      | If single param                |
      | =>         | Always present             |            -                   |
      | {}         | More than one statement    | If single statement/expression |
      | return     | If more than one statement | If just single statement       |

```js
    // 1. Convert a normal function to arrow funtion
    const greet = () => {
        console.log('Hello, World!');
    };
    greet();  // Output: Hello, World!


    //  2. No param
    let arrowFn = () => 10 > 5
    let res = arrowFn()
    console.log(res);   // Output: true


    // 3. Single param
    let greet = name => console.log(`Hello, ${name}!`)
    greet("Rob");       // Output: Hello Rob!


    // 4. More than one param(single and more than one statements)
      let sum = (num1, num2) => num1 + num2;
      let total = sum(2, 2)
      console.log(total);  // Output: 4


    // 5. forEach() method example
    let windows = ["Google", "Amazon", "YouTube"]

    windows.forEach((val, index, arr) => {
        console.log(val);
        console.log(index);
    });
    // Output:
        // Google
        // 0
        // Amazon
        // 1
        // YouTube
        // 2
```


### Functions with Parameters:
- Functions can take parameters to make them more flexible.
- When you define a function the required values are called as parameter(s).
- when the function is called with actual values, then the actual values are called as argument(s).

```js
    // 1. Default param
    function greet(name, greeting = "Hello"){
        console.log(`${greeting}, ${name}!`);
    }

    greet("Rob");           // Output: Rob, Hello
    greet("Rob", "Hi");     // Output: Rob, Hi


    // 2. Passing undefined/any falsy values if not known
    function printFullname(fname, mname, lname){
        if(mname){
            console.log(`The fullname is: ${fname} ${mname} ${lname}`);
        } else {
            console.log(`The fullname is: ${fname} ${lname}`);
        }
    }

    printFullname("Rob", "kevin", "Bob") // Output: Rob Kevin Bob
    printFullname("Rob", undefined, "Bob") // Output: Rob Bob


    // 3. Passing primitives, object types as arg
    function printFullname (personObj){
        console.log(`${personObj.firstname} ${personObj.lastname}`);
    }

    printFullname({
    firstname: "Rob",
    lastname: "Bob",
    });                 // Output: Rob Bob
```

- If a function is called, but an argument is not provided, 
  then the corresponding value becomes undefined.



### Rest parameter and arguments object:
- The rest param is denoted by `...<paramName> `
- The rest parameter syntax allows us to represent an indefinite number of arguments as an array
- arguments object made available within the function body
- The arguments can be access by array-like notation arguments[i]
- It has a length property

```js
    function sum(num1, num2, ...numN) {
        let total = 0;
         console.log(arguments);
         console.log(arguments[2]);     // 3
        console.log(arguments.length);  // 4
        for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
        }
        return total;
        }

    let val = sum(2,2,3,3)
    console.log(val);               // Output: 10
```


### The return Statement:
- The return statement stops the execution of a function and returns a value.

```js
    // Return a single primitive value
    function addTwoNum(num1, num2) {
    let sum = num1 + num2;
    return sum ;
    }


    // Returns an expression [that evaluates to a value]
    function addTwoNum(num1, num2) {
    return num1 + num2;
    }


    // Return an object type
    function addTwoNum(num1, num2) {
    let sum = num1 + num2;
    return { total: sum };
    }


    // Returning a function itself
    function addTwoNum(num1, num2) {
    return function () {
        return num1 + num2;
    };
    }


    // Return statement in conditional statement
    function addTwoNum(num1, num2) {
    if (!num1) {
        return;
    }
    let sum = num1 + num2;
    return sum;
    }


    // Calling the function
    let total = addTwoNum(2, 2);
    console.log(total);
```


### Function Scope:
- Functions create their own scope. 
- Variables declared within a function are not accessible outside of it.

```js
    function greet() {
        let message = 'Hello, World!';
        console.log(message);
    }
    greet();        // Output: Hello, World!
    console.log(message);  // Error: message is not defined
```


### Self-invoking function:
- A self-invoking function, also known as an Immediately Invoked Function Expression (IIFE).
- is a function in JavaScript that runs as soon as it is defined. 
- An IIFE is commonly used to create a local scope and avoid polluting the global namespace.

```js
    (function addTwoNum (num1, num2) {
        let sum = num1 + num2
        console.log(sum);
        return sum
    })(2,2);
```

