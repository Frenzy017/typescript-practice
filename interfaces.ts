// Interface introduction111111

interface Point {
    x: number,
    y: number;
}

const pt: Point = {x: 123, y: 1234}

interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    // different syntaxes
    // sayHi: () => string;
    sayHi(): string
}

// Interface Methods
// Parenthesis are methods in interface syntax


const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Hardy",
    id: 21321,
    sayHi: () => {
        return "Hello!";
    }
}

thomas.first = "has"

interface Product {
    name: string,
    price: number,

    applyDiscount(discount: number): number
}

// Interface Method Parameters

const shoes: Product = {
    name: "Blue Suede Shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price
    };
};

interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;

    bark(): string
}

// Interface vs Types
// With interface you can extend or add info whereas with default types you can't

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "Woof Woof"
    }
}

// Extending Interfaces
// It basically inherits all of the previous types that are written, making it reusable

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark(): string {
        return "Bark!"
    },
    job: "guide dog"
}

interface Human {
    name: string
}

interface Employee {
    readonly id: number,
    email: string
}


// Interface Multiple Inheritance
interface Enginner extends Human, Employee {
    level: string,
    languages: string[]
}

const pierre: Enginner = {
    name: "Pierre",
    id: 123213,
    email: "pierre@gmail.com",
    level: "senior",
    languages: ["JS", "Python"]
}

// Final Types vs  Interfaces

// Interfaces can only describe object shapes, can't use for anything else
// Interfaces can extend multiple interfaces whereas Type Alias cannot
// Type Alias can describe any sort of type, could be object type, union







