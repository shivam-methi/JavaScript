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

console.log(arr.push(4));    // Adding a value in the index
console.log(arr);            // Mutable

console.log(arr[3]);         // New value get added - output: 4
console.log(arr["3"]);       // same way as above  - output: 4
```


### Creating Arrays: 

### Using Literals (most commonly used): 

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
    let arr = new Array("apple", "orange", "banana")

    // Results: 
    console.log(arr);                           // prints complete array
    console.log(`Single ele: ${arr[1]}`);       // Single ele: orange
    console.log(typeof arr); // Object          // object
    console.log(arr.constructor);               // [Function: Array]
```
