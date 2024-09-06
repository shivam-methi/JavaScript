## Strict Mode:
- Strict mode in JavaScript is a way to opt into a restricted variant of JavaScript.
- which can help you write more secure and optimized code.
- It was introduced in ECMAScript 5 (ES5). 
- it's intended to make it easier to write "secure" JavaScript by catching common coding errors. 
- and preventing the use of some potentially problematic features.
- Use cases:
   -  Prevents any undeclared global variable.
   -  Use of implements, interface, let, package, private, protected, public, static, and yield as identifiers.
- in typescript it's enabled by default.
  
### Enable Strict Mode:
- we can enable strict mode by adding the following directive at the beginning of a JavaScript file or a function.

```js
    // Global Strict Mode
    'use strict';
    x = 3.14;  // This will cause an error because 'x' is not declared

    let package = "any package"
    console.log(package); // This will cause an error because package is reserved keyword


    // Function-Level Strict Mode
    function myFunction() {
    'use strict';
    y = 3.14;  // This will cause an error because 'y' is not declared
    }

```

### Benefits and Features of Strict Mode:
- Eliminates Some JavaScript Silent Errors: assigning a value to an undeclared variable.
- Disallows Duplicates: cannot have duplicate parameter names in functions.
- Prevents Deletion of Plain Names: cannot delete variables, functions, or function arguments.
- Disallows `this` Keyword for Global Objects: `this` inside functions that are not methods remains `undefined` 
  rather than referring to the global object.

