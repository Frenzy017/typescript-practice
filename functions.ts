// Function Return Types / Annotations
function square(num: number): number {
    return num * num
}

function root(num: number): string {
    return num * num
}

// Working with default parameters
function greet(person: string = "stranger") {
    return `Hi there, ${person}`
}

const doSomething = (person: string, age: number, isFunny: boolean) => {
};


// Anonymous Function Contextual Typing,
// TS can infer the type because it knows how the method map works

const colors = ["red", "orange", "yellow"];
colors.map(color => {
    return color.toUpperCase()
})

// Void type, we use as of saying this doesn't return any value
function printTwice(msg: string): void {
    console.log(msg)
    console.log(msg)
}

// When function does not refer a value, TS infers that its return type is void.
function doNothing() {
    2+2
}

// The never type
// It represents values that NEVER occur, we could annotate a function
// that always throws an exception, or that never finishes executing.











