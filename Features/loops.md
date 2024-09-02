## Loops:
- Loops are used to Iterate over a collection(more than one element)
- Use cases:
  - to find a specific element/member from a collection
  - do something with all the elements
- General Rule: 
- Loops should end - check condition
- If you initiate a variable inside a loop, it reset for every iteration


### `for` Loop:
- The `for` loop is used when you know how many times you want to execute a statement or a block of statements.

```js
  // Syntex: 
  for (initialization; condition; increment) {
    // code block to be executed
  }


  // Simple use case
  for (let i = 10; i >= 1; i--){
      console.log(i); // 10, 9, 8, 7, 6, 5, 3, 2, 1
  }


  // Standard for loop with Array and continue statement
  let arr = ["Apple", 10, "Orange", 20, "Grapes", 30];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let arrEle = arr[i];

    if (typeof arrEle !== "number") continue;
    sum += arrEle;
  }
  console.log(`The value of sum: ${sum}`); // 60


  // Use of break statements
  let windows = ["Google", "Amazon", "YouTube"]
  for (let i = 0; i < windows.length; i++){
      let window = windows[i]
      if (window === "YouTube") {
          // write code to switch to this window
          break
      }
      console.log(window); // Google
  }
```


### `while` Loop:
- The `while` loop repeats a block of code as long as a specified condition is true.
- Execute until a condition is met (or when the end condition is not known)

```js
  // Syntex: 
  while (condition) {
    // code block to be executed
  }


  // use case
  let i = 0;
  while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
  }


  // Retry until you get a response
  let count = 1;
  let isDataReturned = false;
  while (isDataReturned === false && count <= 10) {
    console.log(count); // // 1, 2, 3, 4, 5
    if (count == 5) {
      // We got an api resopnse
      isDataReturned = true;
    }
    count++;
  }
```


### `do while` Loop:
- The `do while` loop is similar to the while loop, 
- but it will execute the code block once before checking the condition.

```js
  // Syntax:
  do {
    // code block to be executed
  } while (condition);
  
  
  // Example:
  let i = 0;
  do {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
  } while (i < 5);
```


### `for in` Loop:
- The `for in` loop is used to iterate over the properties of an `Object`.

```js
  // Syntax:
  for (key in object) {
    // code block to be executed
  }


  // Example:
  const person = {firstName: "John", lastName: "Doe", age: 25};

  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  // output: 
  // firstName: John
  // lastName: Doe
  // age: 25
```


### `for of` Loop:
- The `for of` loop is used to iterate over the values of an iterable. i.e `Array`, `String`.


```js
  // Syntax:
  for (value of iterable) {
    // code block to be executed
  }


  /// Example:
  const numbers = [1, 2, 3, 4, 5];

  for (let number of numbers) {
    console.log(number);
  }
  // output: 
  // 1, 2, 3, 4, 5
```


### for each Loop:
- The `forEach` loop is a method that is available for `arrays`. 
- It is used to execute a provided function once for each array element.


```js
  // Syntex: 
  array.forEach(function(currentValue, index, array) {
    // code block to be executed
  });


  //Example: 
  let windows = ["Google", "Amazon", "YouTube"]

  windows.forEach((val, index, arr) => {
    console.log(val);
    console.log(index);
    // console.log(arr);
  });
  // output:
  // Google
  // 0
  // Amazon
  // 1
  // YouTube
  // 2
```


### `break` and `continue`:
- `break`: Exits the loop immediately.
- `continue`: Skips the current iteration and proceeds to the next one.

```js
  // break:
  for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i); // Outputs 0, 1, 2
  }


  // continue:
  for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    console.log(i); // Outputs 0, 1, 2, 4
  }
```

