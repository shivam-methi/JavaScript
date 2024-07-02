/*
this keyword::
1. 'this' always refers to an object
2. reference will vary depending on how and where 'this' is being called
3. 'this' is not a variable – it's a keyword, so its value can't be changed or reassigned
4. If we call 'this' by itself, not within a function or object, it will refer to the global window object
5. we can use 'this' to access properties and methods from the same object
*/

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  