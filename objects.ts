// Declaring objects with types
// first is the VALUE, key is the TYPE in the object
function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({first: "Thomas", last: "Jenkins"})


// the object xy is the type, whereas the other object is the actual value

let coordinate: { x: number; y: number } = {x: 34, y: 2};


//  the xy braces denote the object type which is returned by the function
function randomCoordinate(): { x: number; y: number } {
    return {x: Math.random(), y: Math.random()};
}

// Excess properties

// TS doesn't allow us to pass additional properties, concluding it might be wrong
// it searches the original object literal and accepts ONLY its properties
printName({first: "Mick", last: "Jagger", age: 473})
