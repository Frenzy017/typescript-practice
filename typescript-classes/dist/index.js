"use strict";
class Player {
    constructor(first, last, 
    // When declaring private class in TS, we can only access it in the class that it was made
    //  even if we extend a class with it's child component we cannot access it.
    _score = 0) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD?");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "Steele");
elton.fullName;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    private() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
// Abstract class is basically defining a pattern
// defining methods that must be implemented by a child class.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("Hello!");
    }
}
class FullTimeEmployee extends Employee {
    getPay() {
        return 13;
    }
}
class PartTimeEmployee extends Employee {
    getPay() {
        return 12321;
    }
}
//  Once you mark a class abstract, you can't actually instantiate an instance of it anymore
// but you can use the abstract keyword to mark methods as required
// Employee
// - FullTimeEmployee
// - PartTimeEmployee
