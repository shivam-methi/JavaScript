/* Functions/Methods::
1. Function is a block of code that performs a specific task.
2. Functions are the main building blocks of the program.
3. They allow the code to be called many times without repetition(reusability).
4. We’ve already built-in functions like: alert(message), prompt(message, default) and confirm(question).
5. we can create functions of our own as well.
*/


/* Function Declaration::
1. A function declaration defines a function with a specified name.
*/

function greet() {
    console.log('Hello, World!');
}
greet();  // Output: Hello, World!




/* Function Expression::
1. A function expression can be stored in a variable.
*/

const greet = function () {
    console.log('Hello, World!');
};
greet();  // Output: Hello, World!



/* Arrow Functions::
1. Arrow functions provide a shorter syntax and do not have their own 'this' context.
*/

const greet = () => {
    console.log('Hello, World!');
};
greet();  // Output: Hello, World!



/* Functions with Parameters::
1. Functions can take parameters to make them more flexible.
*/

function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Alice');  // Output: Hello, Alice!

/*
1. If a function is called, but an argument is not provided, 
   then the corresponding value becomes undefined.
*/



/* The return Statement::
1. The return statement stops the execution of a function and returns a value.
*/

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));  // Output: 5



/* Function Scope::
1. Functions create their own scope. 
2. Variables declared within a function are not accessible outside of it.
*/

function greet() {
    let message = 'Hello, World!';
    console.log(message);
}
greet();        // Output: Hello, World!
console.log(message);  // Error: message is not defined
