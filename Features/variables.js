/* Variables::
1. variables are used to store data  that can be manipulated and referenced throughout your code.
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
3. const can't be redeclared and reassigned
4. However, if the variable is an object or an array, its properties or elements can still be modified.
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
