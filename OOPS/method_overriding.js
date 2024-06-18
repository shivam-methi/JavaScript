/*
Method belongs to the parent class can be override by the same method of child class
Optional - child class may or may not use the same logic implemented in the parent class method
In order to invoke the methods or properties of the base class, Super keyowrd is used
It's useful when we wants to alter the behaviour of any method of the parent class in child class. 
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