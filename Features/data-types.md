## Data Types:

### Primitive Types:

### String: 
- Represents a sequence of characters (text).

```javascript
    let name = "Shivam";
```

### Number: 
- Represents both integer and floating-point numbers.

```javascript
    let age = 25;
    let price = 99.99;
```

### Boolean: 
- Represents logical values true or false.

```javascript
    let isAvailable = true;
```

### Undefined: 
- A variable that has been declared but not assigned a value.

```javascript
    let x;
    console.log(x); // undefined
```

### Null: 
- Represents an intentional absence of any object value.

```javascript
    let person = null;
```

### Symbol: 
- Represents a unique identifier, often used for object property keys.

```javascript
    let uniqueID = Symbol('id');
```

### BigInt: 
- Used for integers that are too large to be represented by the Number type.

```javascript
    let bigNumber = BigInt(9007199254740991) + BigInt(1);
```


## Object Types:

### Object: 
- A collection of key-value pairs.
  
```javascript
    let person = { name: "Shivam", age: 25 };
```

### Array: 
- A list-like object that stores multiple values in a single variable.

```javascript
    let numbers = [1, 2, 3, 4];
```

### Function: 
- A block of code designed to perform a particular task.

```javascript
    function greet() {
    return "Hello, World!";
    }
```

### Date: 
- Represents date and time.

```javascript
    let today = new Date();
```

### RegExp: 
- Represents a regular expression, used for pattern matching in strings.

```javascript
    let pattern = /abc/;
```

### Map: 
- A collection of key-value pairs, where keys can be of any type.

```javascript
    let map = new Map();
    map.set('name', 'Shivam');
```

### Set: 
- A collection of unique values.

```javascript
    let set = new Set([1, 2, 3, 4]);
```

