# Notes on Best Data Structures Module

Data Structures are collections of values, the relationship among them, and the functions or operations that can be applied to the data.

## Class

A class is a blueprint for creating objects with pre-defined properties and methods.

The method to create new objects must be called "constructor".

The "class" keyword creates a constant, so you can not redinfe it.

We use the "new" keyword to instantiate objects from a class.

Inside a constructor the "this" keyword refers to an individual instance of the class.

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

## Instance Methods

Methods like push and sort act on an individual instance.

class Student {
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }  
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

Inside of all our instance methods and constructor, the keyword "this" refers to the object created from that class (also known as an instance).

## Class Methods

We can use the "static" keyword for class methods which define methods pertinent to classes but not neccessarily to individual instances of a class. It is essentially a helper method within the class that performs a utility function. When called, you must use the class name, then a period, and then the method name. Again, we are not calling this method on an individual instance but the class.