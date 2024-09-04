## Objects:
- objects are collections of properties(key-value pairs). 
- Each `key` (also called a property or attribute) is a string (or Symbol). 
- The `value` can be anything, including other objects, arrays, functions, or primitives like strings, numbers, 
  or booleans.
- it's One of the data types.
- Object is mutable (Any changes to the original Object will be reflected elsewhere).
- The literals form of an object is denoted by {}.
- for…in loop can be iterate over an object.
- All objects in JavaScript inherit from at least one other object. The object being inherited from is
  known as the prototype.
- Use case: 
  - To store test data (key: value) 
  - - mainly for config (e.g env, url) 
  - storing creds (user, pass)
- Ways to create Objects:  
  - Literals/Object initializer, constructor function, Object.Create(<prototype>).
  - Classes are other way of creating object from ES5.


### Creating an Object:

### Object literals/initializer: 

```js
    let obj = {
        name: "Rob",
        age : 25,
        isMarried: false;
    }

    // Results:
    console.log(obj); // prints overall object
    console.log(obj.name); // access Single property of an object 
    console.log(typeof obj); // type checking of an object
```


### Constructor function: 

```js
    function Person(name, age, isMarried){
        this.name = name;
        this.age = age;
        this.isMarried = isMarried;
        return `The name is: ${this.name} and the age is: ${this.age} and marital status: ${this.isMarried}`;
    }

    let obj = new Person("Bob", 30, true);

    // Results:
    console.log(obj); // prints overall object
    console.log(obj.name); // access Single property of an object 
    console.log(typeof obj); // type checking of an object
```


### Using the Object.create method: 

```js
    // Parent object:
    let obj = {
            name: "Rob",
            age : 25,
            isMarried: false;
        };

    //Child object (Inherit parent's property + can have additional property):
    let obj1 = Object.create(obj);

    // Results:
    console.log(obj1); // an empty object
    console.log(Object.getPrototypeOf(obj1)); // prints overall object(parent object)
    console.log(obj1.name); // access Single property of an object 
    console.log(typeof obj1); // type checking of an object
```

