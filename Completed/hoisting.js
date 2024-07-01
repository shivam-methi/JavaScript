/* Hoisiting::
1. mechanism where variables, function declarations, classes are moved to the top of their scope 
   before code execution
2. variables/functions can be referenced before they declare in javascript
*/

/*
Variable Hoisting::
3. javascript only hoists declaration not initilzation 
4. variable will be the undefined until the line where it's initlized is reached
*/

console.log(a); // undefined - following line will be exectued successfully due to JS hoisting 
var a = 9;      // Declaration hoisted to the top but initialzation not
console.log(a);


/*
5. Hoisiting is different with let and const 
6. Variables declared with let and const are also hoisted, 
   but they are not initialized until the execution reaches the line where they are defined
7. Cannot access 'a' before initialization
*/

console.log(a);     // Cannot access 'a' before initialization
let a = 9;
console.log(a);


console.log(a);     // Cannot access 'a' before initialization
const a = 9;
console.log(a);


/*
Function Hoisting::
9. Function declarations are fully hoisted 
10. meaning you can call the function before you declare it
*/

greet(); // Good morning - following line will be exectued successfully due to JS hoisting

function greet() {
    console.log("Good morning");
}

/*
Arrow functions::
11. arrow functions are treated like variable assignments and are not hoisted in the same way
12. Only the variable declaration is hoisted, not the assignment
*/

greet(); // following line will not be exectued - greet is not a function
console.log(greet); // undefined 

var greet = () => {
    console.log("Good morning");
}


/*
Advantages:
1. improve flexibility, redability and maintenance by allowing you to place your main logic at the top 
   and helper functions at the bottom
2. help to avoid some ReferenceErrors by ensuring that variables are at least declared, 
   even if they haven't been initialized yet.
*/


/*
Disadvantages:
1. Although variable declarations are hoisted, their assignments or initialisation are not. 
   If you try to access a variable before it is assigned a value, it will have the value undefined, 
   which can lead to unexpected behaviour.
2. hoisting can lead to subtle bugs in your code. 
   For example, if you have multiple variables with the same name declared in different scopes, 
   the hoisting behaviour can cause unexpected results when accessing those variables.
*/
