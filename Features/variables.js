/* Variables::
1. variable is an identifier/name that stores value/data.
2. that data can be manipulated and referenced throughout your code.
3. variable name should start with a letter, or underscore or dollar sign.
4. system reserved keyword can't be used. e.g. if, else, throw, break.
5. variable names are case-sensetive. (apple, Apple)
6. can't have same name for other types (eg. function name, object name)
7. Multiple variables can be declared in a single line (separated by comma)
8. when you just declare a variable, the data type will be undefined  
*/


/* var::
1. tradational way to declare variable in javascript
2. Var has function or global scope 
3. var can be redeclared and reassigned
*/

var z = 30;

function varTest() {

    var x = 10;
    if (true) {
        console.log(z);
        console.log(x);

        var y = 20;
    }

    console.log(y);

}

varTest(); // 30 10 20



/* let::
1. let was introduced in ES6
2. let has block scope 
3. let can't be redeclared but can be reassigned
*/

function letTest() {

    let x = 10;
    if (true) {
        console.log(x);

        let y = 20;
    }
    console.log(y);


}

letTest(); // ReferenceError: y is not defined



/* const::
1. const was introduced in ES6
2. const has block scope 
3. const variable must be declare/initialized with a value
4. const can't be redeclared and reassigned
5. However, if the variable is an object or an array, its properties or elements can still be modified.
*/

function constTest() {

    const x = 10;
    if (true) {
        console.log(x);

        const y = 20;
    }
    console.log(y);


}

constTest(); // ReferenceError: y is not defined



/*
| Feature            | var                             | let                               | const                             |
|--------------------|---------------------------------|-----------------------------------|-----------------------------------|
| Declaration        | var x = 10;                     | let x = 10;                       | const x = 10;                     |
| Scope              | Function or Global              | Block                             | Block                             |
| Re-declaration     | Allowed within the same scope   | Not allowed within the same scope | Not allowed within the same scope |
| Re-assignment      | Allowed                         | Allowed                           | Not allowed                       |
| Initial Value      | Optional                        | Optional                          | Required                          |
| Hoisting           | Yes, initialized with undefined | Yes, but not initialized          | Yes, but not initialized          |
| Temporal Dead Zone | No                              | Yes                               | Yes                               |
*/
