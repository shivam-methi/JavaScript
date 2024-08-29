## Variables:

- variable is an identifier/name that stores value/data.
- that data can be manipulated and referenced throughout your code.
- variable name should start with a letter, or underscore or dollar sign.
- system reserved keyword can't be used. e.g. if, else, throw, break.
- variable names are case-sensetive. (apple, Apple)
- can't have same name for other types (eg. function name, object name)
- Multiple variables can be declared in a single line (separated by comma)
- when you just declare a variable, the data type will be undefined  


### var:
- tradational way to declare variable in javascript
- var has function or global scope 
- var can be redeclared and reassigned

```javascript
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
```


### let:
- let was introduced in ES6
- let has block scope 
- let can't be redeclared but can be reassigned

```javascript
    function letTest() {

        let x = 10;
        if (true) {
            console.log(x);

            let y = 20;
        }
        console.log(y);


    }

    letTest(); // ReferenceError: y is not defined
```


### const:
- const was introduced in ES6
- const has block scope 
- const variable must be declare/initialized with a value
- const can't be redeclared and reassigned
- However, if the variable is an object or an array, its properties or elements can still be modified.

```javascript
    function constTest() {

        const x = 10;
        if (true) {
            console.log(x);

            const y = 20;
        }
        console.log(y);


    }

    constTest(); // ReferenceError: y is not defined
```


| Feature            | var                             | let                               | const                             |
| ------------------ | ------------------------------- | --------------------------------- | --------------------------------- |
| Declaration        | var x = 10;                     | let x = 10;                       | const x = 10;                     |
| Scope              | Function or Global              | Block                             | Block                             |
| Re-declaration     | Allowed within the same scope   | Not allowed within the same scope | Not allowed within the same scope |
| Re-assignment      | Allowed                         | Allowed                           | Not allowed                       |
| Initial Value      | Optional                        | Optional                          | Required                          |
| Hoisting           | Yes, initialized with undefined | Yes, but not initialized          | Yes, but not initialized          |
| Temporal Dead Zone | No                              | Yes                               | Yes                               |

