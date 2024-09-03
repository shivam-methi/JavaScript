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
- ![alt text](<../Others/function definition.png>)


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


### Arrow Functions:
- Arrow functions provide a shorter syntax and do not have their own 'this' context.

```js
    const greet = () => {
        console.log('Hello, World!');
    };
    greet();  // Output: Hello, World!
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


### The return Statement:
- The return statement stops the execution of a function and returns a value.

```js
    function add(a, b) {
        return a + b;
    }
    console.log(add(2, 3));  // Output: 5
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

