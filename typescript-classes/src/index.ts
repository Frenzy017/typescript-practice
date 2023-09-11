class Player {

    constructor(
        public readonly first: string,
        public readonly last: string,
        // When declaring private class in TS, we can only access it in the class that it was made
        //  even if we extend a class with it's child component we cannot access it.
        private _score: number = 0) {
    }

    secretMethod()
        :
        void {
        console.log("SECRET METHOD?")
    }

    get fullName()
        :
        string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!")
        }
        this._score = newScore;
    }
}

const elton = new Player("Elton", "Steele");
elton.fullName


interface Colorful {
    color: string
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {
    }
}

class Jacket implements Colorful, Printable {
    constructor(public color: string, public brand: string) {
    }

    private() {
        console.log(`${this.color} ${this.brand} jacket`)
    }
}

const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");

// Abstract class is basically defining a pattern
// defining methods that must be implemented by a child class.
abstract class Employee {
    constructor(public first: string, public last: string) {
    }

    abstract getPay(): number;

    greet() {
        console.log("Hello!")
    }
}

class FullTimeEmployee extends Employee {
    getPay() {
        return 13
    }
}

class PartTimeEmployee extends Employee {
    getPay(): number {
        return 12321;
    }
}


//  Once you mark a class abstract, you can't actually instantiate an instance of it anymore
// but you can use the abstract keyword to mark methods as required

// Employee
// - FullTimeEmployee
// - PartTimeEmployee
