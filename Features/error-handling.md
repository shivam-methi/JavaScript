## Error Handling: 
- In JavaScript, error handling is typically done using `throw` & `try...catch` blocks. 
- This mechanism allows you to handle exceptions gracefully without breaking the program flow.
- Manage and control the execution flow - instead of just failing tests, this includes:
  - Retry
  - Log an error msg and move on...
  - Fail with custom error msg instead of a default error
- main sources of error:
  - Your own code
  - External packages
- error can be created using:
  - Using Error constructor -> function call
  - Using new Error -> Object creation



### Common Error Objects in JS:
- The error object provides two useful properties: 
  - name: Sets or returns an error name 
  - message: Sets or returns an error message (a string)

### Base object error:
- JavaScript has a built in error object that provides error information when an error occurs. 
- The Error object can also be used as a base object for user-defined exceptions. 
- The Error object provides error information when an error occurs.
  
```js
// Error - Base object for user error:
let err1 = Error("Created using a function call!");
let err2 = new Error("Created via the new keyword!");

console.log(err1);  // ERROR! Error: Created using a function call!
console.log(err2);  // ERROR! Error: Created via the new keyword!
```

### Reference Error:
- Creates an instance representing an error that occurs when de-referencing an invalid reference.

```js
    // ReferenceError:
    console.log(x); // ReferenceError: x is not defined
```

### Syntax Error:
- Creates an instance representing a syntax error.
  
```js
    // SyntaxError:
    let a = 10
    let a = 20
    console.log(a); // SyntaxError: Identifier 'a' has already been declared
```

### Type Error:
- Creates an instance representing an error that occurs when a variable or parameter is not of a valid type.

```js
    // TypeError:
    const BROWSER = "chrome"
    BROWSER = "firefox" 
    console.log(BROWSER); // TypeError: Assignment to constant variable.
```

### Range Error:
-  Creates an instance representing an error that occurs when a numeric variable or parameter 
   is outside its valid range.

```js
    // RangeError:
    let arr = new Array(-1); // RangeError: Invalid array length
```

### Eval Error:
-  Creates an instance representing an error that occurs regarding the global function eval().

```js
    throw new EvalError('Evaluation failed');   // ERROR! EvalError: Evaluation failed


### URI Error:
- Creates an instance representing an error that occurs when encodeURI() or decodeURI() are passed 
  invalid parameters.

```js
    decodeURIComponent('%'); // URIError: URI malformed
```


### try...catch:

```js
    // Syntax: 
    try {
    // Code that may throw an error
    }
    catch(err) {
    // Code to handle the error
    }
    finally {
    // code to be executed regardless of the try/catch result
    }


    // Example:
    try {
    let result = someUndefinedFunction(); // This will throw an error
    } catch (error) {
    console.log("An error occurred:", error.message); // Error will be caught here
    } finally {
    console.log("This block always executes, regardless of an error.");
    }

    // Result:
    // An error occurred: someUndefinedFunction is not defined
    // This block always executes, regardless of an error.
```


### throw:
- The throw statement in JavaScript is used to create custom errors or exceptions.
- The exception can be a JavaScript String, a Number, a Boolean or an Object
-  When you use throw, you can stop the execution of the current function and transfer control 
   to the nearest catch block, if one exists.

```js
    // Syntax:
    throw expression;


    // Example:
    function checkNumber(num) {
        if (num < 0) {
        throw new Error("Number must be non-negative");
        }
        return num;
    }
    
    try {
        checkNumber(-5);
    } catch (error) {
        console.log("Caught an error:", error.message); // Output: Caught an error: Number must be non-negative
    }
    
    // Result:
    //   ERROR!
    //   Caught an error: Number must be non-negative
```
