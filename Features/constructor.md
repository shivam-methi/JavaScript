## Constructor:
- a constructor is a special function used to create and initialize objects. 
- When you use the `new` keyword with a constructor function, it creates a new instance of an object 
  and initializes it with properties and methods defined in the constructor. 
- `this` Keyword: 
  - Inside the constructor, `this` refers to the new object being created.
- `new` Keyword: 
  - Using `new` before the constructor function creates a new object.
  - it allows to create multiple instances from a object litterals.

```js
    // Constructor function:
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    // Creating a new instance of Person:
    const person1 = new Person('Alice', 30);
    console.log(person1.name); // Alice
    console.log(person1.age);  // 30
```
