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
- Use cases: 
  - To store test data (key: value) 
  - mainly for config (e.g env, url) 
  - storing creds (user, pass)
- Ways to create Objects:  
  - Literals/Object initializer, constructor function, Object.Create(<prototype>).
  - Classes are other way of creating object from ES5.


### Creating an Object:

### Using Object literals/initializer: 

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


### Using Constructor function: 

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


### Accessing Properties:
- You can access properties of an object using either dot notation or bracket notation.
- You can add or modify properties by simply assigning a value to a key.
- You can delete a property from an object using the 'delete' keyword.

```js
    let reportData = {
        testID: 12345,
        status: "PASS",
        "PASS/FAIL Flag": "PASS",
        totalTest: 100, 
        totalPass: 80,
        isInScope: true
    }

    // Access property using Dot Notation:
    console.log(reportData.testID); // 12345


    // Access property using Bracket Notation:
    console.log(reportData["PASS/FAIL Flag"]); // PASS


    // Adding and Modifying Properties:
    reportData.totalPass = 70;
    reportData.totalFail = 30;
    console.log(reportData.totalPass); // 70
    console.log(reportData.totalFail); // 30


    // Deleting Properties:
    delete reportData.totalFail;
    console.log(reportData.totalFail); // undefined - deleted
```


