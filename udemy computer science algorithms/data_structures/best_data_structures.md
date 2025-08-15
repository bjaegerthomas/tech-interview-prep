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

