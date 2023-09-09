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


// Creating Type Aliases

// They're useful for object types, making our code readable
// and could be reused elsewhere in our code
// the question mark is to make the property optional
type Point = {
    x: number;
    y: number;
    z?: number
}

let pixel: Point = {x: 45, y: 2}


// Nested Objects

type Song = {
    title: string, artist: string,
    numStreams: number,
    credits: { producer: string, writer: string }
}

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0333
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song =
    {
        title: "Unchained Melody",
        artist: "Righteous Brothers",
        numStreams: 12321321,
        credits: {producer: "Phil Spector", writer: "Alex North"}
    }
calculatePayout(mySong)

// Readonly modifier
// We can only access the value but not change it

type User = {
    readonly id: number;
    username: string;
}

const user: User = {
    id: 1233213,
    username: "dog"
}
user.id = 123321


// Intersection Types

type Circle = {
    radius: number;
}

type Colorful = {
    color: string;
}

// Type alias / intersection between the Circle and Colorful types
type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow"
}


