## this keyword:
- In JavaScript, `this` is a keyword that refers to the context in which a function is called.
- Its value can change depending on how a function is invoked.
- 'this' is not a variable – it's a keyword, so its value can't be changed or reassigned.
- If we call 'this' by itself, not within a function or object, it will refer to the global window object.
- we can use 'this' to access properties and methods from the same object.

### Global Context: 
- When used in the global context (outside any function), this refers to the global object. 
- In browsers, this is usually the window object.

```js
  console.log(this);            // In a browser, this logs the Window object
```


### Object Methods: 
- When used inside a method of an object, this refers to the object that owns the method.

```js
  const obj = {
    name: 'Alice',
    greet: function() {
      console.log(this.name);     // 'Alice'
    }
  };
  obj.greet();
```


### Constructor Functions: 
- When used inside a constructor function (a function designed to create objects), 
  this refers to the newly created instance of the object.

```js
  function Person(name) {
    this.name = name;
  }

  const person = new Person('Bob');
  console.log(person.name);       // 'Bob'
```


### Arrow Functions: 
- Arrow functions do not have their own 'this' context. 
- Instead, they inherit 'this' from the enclosing context(the context in which the arrow function was defined).

```js
  const obj = {
    name: 'Charlie',
    greet: function() {
      const innerGreet = () => {
        console.log(this.name);   // 'Charlie', inherited from the greet method's `this`
      };
      innerGreet();
    }
  };
  obj.greet();
```
