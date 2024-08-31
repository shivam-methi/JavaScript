## Data Types:

### Primitive Types:
- All primitive data types are immutable which means their values cannot be changed once they are created. 
- when we say primitives are immutable, we mean that the value itself cannot be altered, 
  but variables that store these values can be reassigned.

### String: 
- Represents a sequence of characters (text).

```js
    let name = "Shivam";
```

### Number: 
- Represents both integer and floating-point numbers.

```js
    let age = 25;
    let price = 99.99;
```

### Boolean: 
- Represents logical values true or false.

```js
    let isAvailable = true;
```

### Undefined: 
- A variable that has been declared but not assigned a value.

```js
    let x;
    console.log(x); // undefined
```

### Null: 
- Represents an intentional absence of any object value.

```js
    let person = null;
```

### Symbol: 
- Represents a unique identifier, often used for object property keys.

```js
    let uniqueID = Symbol('id');
```

### BigInt: 
- Used for integers that are too large to be represented by the Number type.

```js
    let bigNumber = BigInt(9007199254740991) + BigInt(1);
```


### Object Types:

### Object: 
- A collection of key-value pairs.
  
```js
    let person = { name: "Shivam", age: 25 };
```

### Array: 
- A list-like object that stores multiple values in a single variable.

```js
    let numbers = [1, 2, 3, 4];
```

### Function: 
- A block of code designed to perform a particular task.

```js
    function greet() {
    return "Hello, World!";
    }
```

### Date: 
- Represents date and time.

```js
    let today = new Date();
```

### RegExp: 
- Represents a regular expression, used for pattern matching in strings.

```js
    let pattern = /abc/;
```

### Map: 
- A collection of key-value pairs, where keys can be of any type.

```js
    let map = new Map();
    map.set('name', 'Shivam');
```

### Set: 
- A collection of unique values.

```js
    let set = new Set([1, 2, 3, 4]);
```


### typeof: 
- In JavaScript, `typeof` is an operator used to determine the type of a given variable or expression.
- It returns a string indicating the type of the operand.
- `typeof` is particularly useful for checking primitive data types.
- For objects like arrays and null, the result is "object"
- so it's necessary to use additional checks (like Array.isArray() for arrays or checking if a value is null).
- This operator is commonly used in JavaScript to perform type checking, especially in cases where you need to 
  ensure that variables are of a certain type before performing operations on them.
- typeof operator returns a string value(starting with lowercase).

```js
    typeof 42; // "number"
    typeof "Hello"; // "string"
    typeof true; // "boolean"
    var a;
    typeof a; // "undefined"
    typeof { name: "Shivam" }; // "object"
    typeof [1, 2, 3]; // "object"
    typeof function() {}; // "function"
    typeof null; // "object" (This is a known quirk in JavaScript)
```


### literals:
- A literal is a fixed value that you type directly into your code. 
- It can be a number, string, boolean, array, object, etc.

```js
    42                // Numeric literal
    "Hello, World!"   // String literal
    true              // Boolean literal
    [1, 2, 3]         // Array literal
    { name: "Alice" } // Object literal
```


### variables:
- A variable is a named storage for data that can be changed during program execution. 
- Variables can store literals, the result of expressions, or the return value of functions.
- declare a variable using let, const, or var (though var is less commonly used in modern JavaScript).

```js
    let age = 25;              // Variable holding a numeric literal
    const greeting = "Hi!";    // Variable holding a string literal
    var isLoggedIn = false;    // Variable holding a boolean literal
    let colors = ["red", "green", "blue"]; // Variable holding an array literal
```


### Expression: 
- An expression is any valid unit of code that resolves to a value. 
- This value can be a literal, a variable, or a combination of both.
- Expressions can include operators, function calls, and literals.

```js
    let sum = 10 + 5;          // Expression that adds two numeric literals
    let message = "Hello" + ", World!"; // Expression that concatenates two strings
    let isAdult = age > 18;    // Expression that evaluates a comparison
    let area = Math.PI * r ** 2; // Expression using a function call and operators
```


### Example Combining All Three (literals+variables+Expression):

```js
    const basePrice = 100;            // basePrice is a variable holding a numeric literal
    let discount = 0.2;               // discount is a variable holding a numeric literal
    let finalPrice = basePrice * (1 - discount); // finalPrice is a variable holding the result of an expression
```


### Truthy Values: 
- Truthy values are values that evaluate to `true` when used in a Boolean context, such as an if statement.
- Any value that is not falsy is considered truthy.
- Even empty objects, arrays, and functions are considered truthy.

```js
    if (true) {...}             // Boolean true
    if ({}) {...}               // Any object, including an empty object
    if ([]) {...}               // Any array, including an empty array
    if (42) {...}               // Any non-zero number
    if ("hello") {...}          // Any non-empty string
    if (new Date()) {...}       // Any valid date object
```


### Falsy Values: 
- Falsy values are values that evaluate to false when used in a Boolean context.

```js
    if (false) {...}            // Boolean false
    if (0) {...}                // Number zero
    if (-0) {...}               // Negative zero
    if (0n) {...}               // BigInt zero
    if ("") {...}               // Empty string (both '' and "")
    if (null) {...}             // null
    if (undefined) {...}        // undefined
    if (NaN) {...}              // Not-a-Number
```


### Nullish Values: 
- Nullish values specifically refer to null and undefined.
- These values are often used to represent the absence of a value or an uninitialized variable.
- The nullish coalescing operator (??) is used to provide a default value when dealing with nullish values.
- The key difference between nullish values and falsy values is that the nullish coalescing operator (??) 
  only checks for null and undefined, not other falsy values like 0 or "".

```js
    let name = "";              // Empty string, which is falsy
    let nickname = name || "Guest"; // Will use "Guest" because name is falsy
    let firstName = null;
    let displayName = firstName ?? "Anonymous"; // Will use "Anonymous" because firstName is nullish
```


### data type conversion:
- data type conversion is the process of converting one data type to another.
- There are two main types of data type conversions: 
  - implicit (type coercion) 
  - explicit (type casting)

### Implicit Conversion (Type Coercion): 
- JavaScript automatically converts data types when it expects a certain type.
- This can happen in various contexts, such as when using operators.

```js
    let result = '5' + 2; // '52' (string concatenation)
    let result = '5' - 2; // 3 (string '5' is converted to number 5)

    let result = true + 2; // 3 (true is converted to 1)
    let result = false + 2; // 2 (false is converted to 0)
```

### Explicit Conversion (Type Casting):
- Explicit conversion is when you manually convert one data type to another using built-in functions or methods.

```js
    let str = "123";
    let num = Number(str); // 123
    let num = parseInt(str); // 123 (integer)

    let num = 123;
    let str = String(num); // "123"
    let str = num.toString(); // "123"

    let bool = true;
    let str = String(bool); // "true"

    let str = "true";
    let bool = (str === "true"); // true
```

- Falsy Values: Values like `false, 0, '', null, undefined, NaN` are considered falsy in boolean contexts.
- NaN (Not a Number): Trying to convert a non-numeric string to a number results in NaN.
- Except for `undefined, null` every other primitives have wrapper object types(string with uppercase);
  (e.g: let num=Number(10); //10)  

