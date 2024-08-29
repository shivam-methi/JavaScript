## OOPS: 

### Classes:
- Blueprint/template of Object
- Use to create an object
- It consists - Constructros, objects, methods/functions, properties
- Class keyword is use to create a class

```js
  class emp { 
      constructor(name, age) { 
          this.name = name; 
          this.age = age; 
    
      } 
  } 
```


### Objects:
- Object is a member of a class
- Each object has an identity, behaviour and a state
- Objects are mutable 
- Objects are written as name : value pairs separated by colons

```js
  let person = {
      name: "John",
      age: 25,
      city: "Exampleville"
    };
```


### Constructor: 
- special method of a class for creating and initializing an object instance of that class
- class cannot have more than one constructor method
- it enables initialization that must be done before any other methods can be called on an instantiated object
- 'This' refers to an object
- Super keyword is used to access properties on an object/class's or invoke a superclass's constructor. 

```js
  class Animal {
      constructor(name) {
        this.name = name;
      }
    
      eat() {
        console.log(`${this.name} is eating.`);
      }
    }
    
    class Dog extends Animal {
      constructor(name, breed) {
        // Call the constructor of the parent class (Animal)
        super(name);
        this.breed = breed;
      }
    
      bark() {
        console.log(`${this.name} is barking.`);
      }
    }  
```


### Inheritence:
- Inherits all the methods/properties from another class
- Extends keyword is use
- Super() method use to refer to the parent class
- It increases the code reusablility

```js
  // parent class
  class Person { 
      constructor(name) {
          this.name = name;
      }

      greet() {
          console.log(`Hello ${this.name}`);
      }
  }

  // inheriting parent class
  class Student extends Person {

  }

  let student1 = new Student('Jack');
  student1.greet(); 
```


### Abstraction:
- It hides the technical complexity of systems behind
- ex: apis
- increases the security of a program as only important details are provided to the user.
- Avoids code duplication and increases reusability.

```js
  class Shape {
      constructor() {
        if (new.target === Shape) {
          throw new Error("Cannot instantiate abstract class");
        }
      }
    
      // Abstract method
      calculateArea() {
        throw new Error("Abstract method not implemented");
      }
    }
    
    class Circle extends Shape {
      constructor(radius) {
        super();
        this.radius = radius;
      }
    
      // Implementation of abstract method
      calculateArea() {
        return Math.PI * this.radius * this.radius;
      }
    }

  // Example usage
  const myCircle = new Circle(5);
  console.log("Circle Area:", myCircle.calculateArea());
```


### Polymorphism:
- Ability to call the same method on different objects and each object responds in different way
- can use the same method name repeatedly
- achieved through the concept of method overloading and method overriding



### Function Overloading:
- two or more functions can have the same name but different parameters.
- Function name should be the same and the arguments should be different.
- JavaScript Does not support Function Overloading.
- TypeScript Does  support Function Overloading.



### Function Overriding:
- Method belongs to the parent class can be override by the same method of child class
- Optional - child class may or may not use the same logic implemented in the parent class method
- In order to invoke the methods or properties of the base class, Super keyowrd is used
- It's useful when we wants to alter the behaviour of any method of the parent class in child class. 

```js
  class Car {

      constructor(make, model) {
          this.make = make;
          this.model = model;
      }

      startEngine() {
          console.log('starting engine..for car');
      }

  }

  class Audi extends Car {

      startEngine() {
          console.log('starting engine..for Audi');
      }
  }

  const audi = new Audi();
  audi.startEngine();
```


### Encapsulation:
- packing of data and functions into one component
- internal details of an object are hidden from external code
- keep code outside of the class from accidently changing internal methods & properties
- helps in organizing and managing the complexity of code

```js
  class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
      this._accountNumber = accountNumber;
      this._accountHolderName = accountHolderName;
      this._balance = balance;
    }

    showAccountDetails() {
      console.log(`Account Number: ${this._accountNumber}`);
      console.log(`Account Holder Name: ${this._accountHolderName}`);
      console.log(`Balance: ${this._balance}`);
    }

    deposit(amount) {
      this._balance += amount;
      this.showAccountDetails();
    }

    withdraw(amount) {
      if (this._balance >= amount) {
        this._balance -= amount;
        this.showAccountDetails();
      } else {
        console.log("Insufficient Balance");
      }
    }
  }

  let myBankAccount = new BankAccount("123456", "John Doe", 1000);
  myBankAccount.deposit(500); 
```

