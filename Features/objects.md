## Objects:
- objects are collections of properties(key-value pairs). 
- Each `key` (also called a property or attribute) is a string (or Symbol). 
- The `value` can be anything, including other objects, arrays, functions, or primitives like strings, numbers, 
  or booleans.
- it's One of the data types.
- Objects are Unordered named collections (key: value) pair (means no index).
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


### Methods in Objects:

### Anonymous function with key:

```js
        let reportData = {
            testID: 12345,
            status: "PASS",
            "PASS/FAIL Flag": "PASS",
            totalTest: 100,
            totalPass: 80,
            isInScope: true,
            passrate: function () {     // Anonymous function with key
                return (this.totalPass / this.totalTest) * 100
            }
        }
        
        // Call a method from an object
        console.log(reportData.passrate()); // 80
```

### Arrow function with key:

```js
        let reportData = {
            testID: 12345,
            status: "PASS",
            "PASS/FAIL Flag": "PASS",
            totalTest: 100,
            totalPass: 80,
            isInScope: true,
            passrate: () => {           // Arrow function with key
                return (this.totalPass / this.totalTest) * 100
            }
        }

        // Call a method from an object
        console.log(reportData.passrate()); // 80
```

### method without a key:

```js
    let reportData = {
        testID: 12345,
        status: "PASS",
        "PASS/FAIL Flag": "PASS",
        totalTest: 100,
        totalPass: 80,
        isInScope: true,
        passrate() {                    // method without a key
            return (this.totalPass / this.totalTest) * 100
        }
    }

    // Call a method from an object
    console.log(reportData.passrate()); // 80
```


### Dynamic Key and Value: 

```js
    let testRunner = "local";
    let machineID = "44d6dhh7999d";
    let envFile = "test_config";

    let reportData = {
        testID: 12345,
        status: "PASS",
        "PASS/FAIL Flag": "PASS",
        totalTest: 100,
        totalPass: 80,
        isInScope: true,
        passrate() {
            return (this.totalPass / this.totalTest) * 100;
        },
        runDt: new Date(),                            // value - Assign a function
        runner: testRunner,                           // value - Assign a variable
        macID: machineID ? machineID : "Unknown",     // value - Assign a expression 
        [envFile]: {
            env: "test",                              // key - create a dynamic key
            url: "http://test.com",
        },
        scope: ["smoke", "reg", "e2e"],
        previousRun: {
            status: "FAIL",
            runID: 6789
        }
    };


    // Access object keys:
    let keys = Object.keys(reportData);
    console.log(keys);


    // Access object values:
    let values = Object.values(reportData);
    console.log(values);


    // Access the data:
    console.log(reportData);                          // complete object
    console.log(reportData.test_config);              // { env: 'test', url: 'http://test.com' }
    console.log(reportData.runDt);                    // 2024-09-05T07:30:20.579Z
    console.log(reportData.runner);                   // local
    console.log(reportData.macID);                    // 44d6dhh7999d
    console.log(reportData.scope[1]);                  // reg
    console.log(reportData.previousRun.status);        // FAIL
    console.log(reportData["previousRun"]["status"]);  // FAIL
```


### Object Assignment: 

```js
    let reportData = {
        status: "PASS",
        scope: ["smoke", "reg", "e2e"],
        previousRun: {
            status: "FAIL",
            runID: 6789,
        },
    };

    // Assignment - Top level property 
    reportData.status = "FAIL";             // value will be updated


    // Assignment - Inner level property 
    reportData.previousRun.status = "PASS"; // value will be updated


    // Assignment to other object
    let obj = {}
    obj = reportData;
    console.log(obj);                       // Output will be the same as reportData object
```


### Merging Objects:

```js
    let obj1 = {
        a: 1,
        b: 2,
        c: 3,
    };

    let obj2 = {
        c: 4,
        d: 5,
        e: 6,
    };

    // Merging objects:

    // Using Object.assign():
    let obj = Object.assign(obj1, obj2);
    console.log(obj);                       // output: { a: 1, b: 2, c: 4, d: 5, e: 6 }


    // Using the spread operator:
    let obj = {
        ...obj1,
        ...obj2
    }
    console.log(obj);                       // output: { a: 1, b: 2, c: 4, d: 5, e: 6 }
```


### Iterate objects properties:

```js
    let testRunner = "local";
    let machineID = "";
    let envFile = "test_config";

    let reportData = {
        testID: 12345,
        status: "PASS",
        "PASS/FAIL Flag": "PASS",
        totalTest: 100,
        totalPass: 80,
        isInScope: true,
        passrate() {
            return (this.totalPass / this.totalTest) * 100;
        },
        runDt: new Date(),
        runner: testRunner,
        macID: machineID ? machineID : "Unknown",
        [envFile]: {
            env: "test",
            url: "http://test.com",
        },
        scope: ["smoke", "reg", "e2e"],
        previousRun: {
            status: "FAIL",
            runID: 6789
        }
    };


    // Iterate/loop through all properties of an Object:
    for (let key in reportData) {
        // console.log(reportData[key]); 
        console.log(`The key: ${key}, and the val: ${JSON.stringify(reportData[key])}`);
    }

    // Output:
    // The key: testID, and the val: 12345
    // The key: status, and the val: "PASS"
    // .......same for all the keys and values
```