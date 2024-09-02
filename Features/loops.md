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
  console.log(`The value of sum: ${sum}`);


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


