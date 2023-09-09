// Union Types
// We use them so we can get few different possible types
// we use the pipe character (|) to seperate the types we want to include

let age: number | string = 21;
age = 23;
age = "24";

type Point = {
    x: number,
    y: number;
};

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y: 34}
coordinates = {lat: 321.213, long: 23.234}


function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

// Type Narrowing with Unions
// We use typeof operator so TS can decide which value of the two should proceed with
function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    } else {
        return price * tax
    }
}

