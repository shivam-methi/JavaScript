### this keyword:
- 'this' always refers to an object
- reference will vary depending on how and where 'this' is being called
- 'this' is not a variable – it's a keyword, so its value can't be changed or reassigned
- If we call 'this' by itself, not within a function or object, it will refer to the global window object
- we can use 'this' to access properties and methods from the same object

```javascript
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
```
