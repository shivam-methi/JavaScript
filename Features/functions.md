### Functions/Methods:
- Function is a block of code that performs a specific task.
- Functions are the main building blocks of the program.
- They allow the code to be called many times without repetition(reusability).
- We’ve already built-in functions like: alert(message), prompt(message, default) and confirm(question).
- we can create functions of our own as well.
- ![alt text](<../Others/function definition.png>)


### Function Declaration:
- A function declaration defines a function with a specified name.

```js
    function greet() {
        console.log('Hello, World!');
    }
    greet();  // Output: Hello, World!
```


### Function Expression:
- A function expression can be stored in a variable.

```js
    const greet = function () {
        console.log('Hello, World!');
    };
    greet();  // Output: Hello, World!
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

```js
    function greet(name) {
        console.log(`Hello, ${name}!`);
    }
    greet('Alice');  // Output: Hello, Alice!
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

