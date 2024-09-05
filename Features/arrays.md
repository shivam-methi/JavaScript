## Arrays:
- arrays are a way to store multiple values in a single variable. 
- Arrays can hold any type of data (strings, numbers, objects, other arrays, etc.)
- they allow you to perform various operations on the collection of elements.
- array Index starts from 0 
- Arrays are mutable - arrays can be changed - we can add values in array, update values. 
- Default type of an array is - Object 
- Arrays can be iterate using multiple loops - for, forEach, for..Of
- Array.from - use to create an array from any other object

```js
let arr = [1, 2, 3];

console.log(arr.push(4));    // Adding a element in the index
console.log(arr);            // Mutable

console.log(arr[3]);         // New element get added - output: 4
console.log(arr["3"]);       // same way as above  - output: 4
```


### Creating Arrays: 

### Using Literals: 

```js
    let arr = ["apple", "orange", "banana"]

    // Results: 
    console.log(arr);                           // prints complete array
    console.log(`Single ele: ${arr[1]}`);       // Single ele: orange
    console.log(typeof arr); // Object          // object
    console.log(arr.constructor);               // [Function: Array]
```

### Using Constructor function:

```js    
    let arr = Array("apple", "orange", "banana")

    // Results: 
    console.log(arr);                           // prints complete array
    console.log(`Single ele: ${arr[1]}`);       // Single ele: orange
    console.log(typeof arr); // Object          // object
    console.log(arr.constructor);               // [Function: Array]
```

### Object creation using new keyword:

```js
    let fruits = new Array("apple", "orange", "banana")

    // Results: 
    console.log(fruits);                           // prints complete array
    console.log(`Single ele: ${fruits[1]}`);       // Single ele: orange
    console.log(typeof fruits); // Object          // object
    console.log(fruits.constructor);               // [Function: Array]
```

###  Accessing Elements:

```js
    let fruits = ["apple", "orange", "banana"];

    // Accessing Elements:
    console.log(fruits[0]);     // Using Index   - Output: apple
    console.log(fruits["0"]);      // Using bracket - Output: apple


    // Adding elements :
    fruits[3] = "mango";   // Using Assignment operator
    fruits.push("kiwi");   // Using .push() method


    // Modifying elements:
    fruits[1] = "blackberry";  // Changes orange to blackberry

    
    // Results:
    console.log(fruits);                               // [ 'apple', 'blackberry', 'banana', 'mango', 'kiwi' ]
    console.log(`Total elements: ${fruits.length}`);   // Total elements: 5
```


### Array Properties and Methods:

### Length Property:
- The `length` property returns the number of elements in the array.
- length property returns total index + 1.(This does not mean there are that many elements in that object).
- length property can be set manually.

```js
    let fruits = ["apple", "orange", "banana"];

    let length = fruits.length;     // measure the length of an array
    console.log(length);            // Output: 3
```

### push() Method: 
- Adds a new element to the end of the array.

```js
    let fruits = ["apple", "orange", "banana"];

    fruits.push("Grapes");          // Add "Grapes" to the end of the array
    console.log(fruits);            // Output: [ 'apple', 'orange', 'banana', 'Grapes' ]
```

### pop() Method: 
- Removes the last element from the array.

```js
    let fruits = ["apple", "orange", "banana", "Grapes"];

    fruits.pop();                   // Removes "Grapes" from the end of the array
    console.log(fruits);            // Output: [ 'apple', 'orange', 'banana']
```

### unshift() Method: 
- Adds a new element to the beginning of the array.

```js
    let fruits = ["apple", "orange", "banana"];

    fruits.unshift("Papaya");       // Add "Papaya" to the beginning of the array
    console.log(fruits);            // Output: [ 'papaya', 'apple', 'orange', 'banana']
```

### shift() Method: 
- Removes the first element from the array.

```js
    let fruits = ["apple", "orange", "banana"];

    fruits.shift();                 // Removes "Apple" from the beginning of the array
    console.log(fruits);            // Output: [ 'orange', 'banana']
```

### splice() Method: 
- Adds/removes elements from the array at any position.

```js
    let fruits = ["apple", "orange", "banana"];

    fruits.splice(1, 1, "Peach");  // Removes one element at index 1 and adds "Peach"
    console.log(fruits);           // Output: [ 'apple', 'Peach', 'banana' ]
```

### slice() Method: 
- Returns a portion of an array.

```js
    let fruits = ["apple", "orange", "banana", "peach"];

    let slicedFruits = fruits.slice(1, 3);  // Extracts elements from index 1 to 2
    console.log(slicedFruits);              // Output: [ 'orange', 'banana' ]
```

### map() Method: 
- Creates a new array with the results of calling a function on every element.

```js
    let numbers = [1, 2, 3];
  
    let squares = numbers.map(n => n * 2);  // Creates a new array with the results
    console.log(squares);                   // Output: [2, 4, 6]
```

### filter() Method: 
- Creates a new array with elements that pass a test function.

```js
    let numbers = [1, 2, 3];
    let evens = numbers.filter(n => n % 2 === 0);   // Creates a new array with the results
    console.log(evens);                             // Output: [2]
```

### reduce() Method: 
- Reduces the array to a single value by accumulating results.

```js
     let numbers = [1, 2, 3];
    let sum = numbers.reduce((acc, val) => acc + val, 0);  // Reduces the array to a single value
    console.log(sum);                                      // Output: 6
```


### Different data structure:

```js
    // Same type of data:
    let arr = ["apple", "orange", "banana"];

    // Results:
    console.log(arr);                               // [ 'apple', 'orange', 'banana' ]
    console.log(`Total elements: ${arr.length}`);   // Total elements: 3


    // Different type of data:
    let arr = [1, "two", true]

    // Results:
    console.log(arr);                               // [ 1, 'two', true ]
    console.log(`Total elements: ${arr.length}`);   // Total elements: 3


    // Array containing an object:
    let arr = [
    {
        name: "Rob",
        age: 25,
    },
    {
        name: "Bob",
        age: 30,
    },
    ];

    // Results:
    console.log(arr);                               // [ { name: 'Rob', age: 25 }, { name: 'Bob', age: 30 } ]
    console.log(`Total elements: ${arr.length}`);   // Total elements: 2


    // Array containing an array:
    let arr = [
    [1, 2, 3],
    ["one", "two", "three"],
    ];

    // Results:
    console.log(arr);                               // [ [ 1, 2, 3 ], [ 'one', 'two', 'three' ] ]
    console.log(`Total elements: ${arr.length}`);   // Total elements: 2
```