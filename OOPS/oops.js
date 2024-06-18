/* Classes::
1. Blueprint/template of Object
2. Use to create an object
3. It consists - Constructros, objects, methods/functions, properties
4. Class keyword is use to create a class
*/

class emp { 
    constructor(name, age) { 
        this.name = name; 
        this.age = age; 
  
    } 
} 


/* Objects::
1. Object is a member of a class
2. Each object has an identity, behaviour and a state
3. Objects are mutable 
4. Objects are written as name : value pairs separated by colons
*/

let person = {
    name: "John",
    age: 25,
    city: "Exampleville"
  };


/*Constructor:: 
1. special method of a class for creating and initializing an object instance of that class
2. class cannot have more than one constructor method
3. it enables initialization that must be done before any other methods can be called on an instantiated object
4. 'This' refers to an object
5. Super keyword is used to access properties on an object/class's or invoke a superclass's constructor. 
*/

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


/* Inheritence::
1. Inherits all the methods/properties from another class
2. Extends keyword is use
3. Super() method use to refer to the parent class
4. It increases the code reusablility
*/

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


/*
Abstraction::
1. It hides the technical complexity of systems behind
2. ex: apis
3. increases the security of a program as only important details are provided to the user.
4. Avoids code duplication and increases reusability.
*/

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


/*
Polymorphism::
1.  Ability to call the same method on different objects and each object responds in different way
2. can use the same method name repeatedly
3. achieved through the concept of method overloading and method overriding

Function Overloading - 
1. two or more functions can have the same name but different parameters
2. Function name should be the same and the arguments should be different.
3. JavaScript Does not support Function Overloading.

Function Overriding - 
1. Method belongs to the parent class can be override by the same method of child class
2. Optional - child class may or may not use the same logic implemented in the parent class method
3. In order to invoke the methods or properties of the base class, Super keyowrd is used
4. It's useful when we wants to alter the behaviour of any method of the parent class in child class. 
*/

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


/*
Encapsulation::
1. packing of data and functions into one component
2. internal details of an object are hidden from external code
3. keep code outside of the class from accidently changing internal methods & properties
4. helps in organizing and managing the complexity of code
*/

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