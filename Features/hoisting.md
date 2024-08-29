## Hoisiting:
- mechanism where variables, function declarations, classes are moved to the top of their scope 
  before code execution
- variables/functions can be referenced before they declare in javascript

### Variable Hoisting:
- javascript only hoists declaration not initilzation 
- variable will be the undefined until the line where it's initlized is reached

```javascript
console.log(a); // undefined - following line will be exectued successfully due to JS hoisting 
var a = 9;      // Declaration hoisted to the top but initialzation not
console.log(a);
```


- Hoisiting is different with let and const 
- Variables declared with let and const are also hoisted, 
  but they are not initialized until the execution reaches the line where they are defined
- Cannot access 'a' before initialization
*/

```javascript
console.log(a);     // Cannot access 'a' before initialization
let a = 9;
console.log(a);
```

```javascript
console.log(a);     // Cannot access 'a' before initialization
const a = 9;
console.log(a);
```


### Function Hoisting:
- Function declarations are fully hoisted 
- meaning you can call the function before you declare it

```javascript
greet(); // Good morning - following line will be exectued successfully due to JS hoisting

function greet() {
    console.log("Good morning");
}
```

### Arrow functions:
- arrow functions are treated like variable assignments and are not hoisted in the same way
- Only the variable declaration is hoisted, not the assignment

```javascript
greet(); // following line will not be exectued - greet is not a function
console.log(greet); // undefined 

var greet = () => {
    console.log("Good morning");
}
```


### Advantages:
-  improve flexibility, redability and maintenance by allowing you to place your main logic at the top 
   and helper functions at the bottom
-  help to avoid some ReferenceErrors by ensuring that variables are at least declared, 
   even if they haven't been initialized yet.


### Disadvantages:
- Although variable declarations are hoisted, their assignments or initialisation are not. 
  If you try to access a variable before it is assigned a value, it will have the value undefined, 
  which can lead to unexpected behaviour.
- hoisting can lead to subtle bugs in your code. 
  For example, if you have multiple variables with the same name declared in different scopes, 
  the hoisting behaviour can cause unexpected results when accessing those variables.

