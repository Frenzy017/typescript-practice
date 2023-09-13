//     Typeof Guards

// They involve simply doing a type check before working with a value
function triple(value: number | string) {
    if (typeof value === "string") {
        return value.repeat(3)
    }
    return value * 3;
}


// Truthiness Guards

//  They involve checking a value for being truthy or falsy before working with it
//  Helpful avoiding errors like null or undefined

const printLetters = (word?: string) => {
    if (word) {
        for (let char of word) {
            console.log(char)
        }
    } else {
        console.log("You did not pass in a word!")
    }
}


// Equality Narrowing

// They involve comparing types to each other before certain operations with values.
// By checkin two values against one another,
// we can be sure they're both the same before working with them

function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase()
    }
}

someDemo(3, "3")


// in Operator narrowing

// in operator helps check if a certain property exists in an object

interface Movie {
    title: string,
    duration: number
}

interface TVShow {
    title: string,
    numEpisodes: number,
    episodeDuration: number
}

function getRunTime(media: Movie | TVShow) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration
    }
    return media.duration
}

getRunTime({title: "Amadeus", duration: 140})
getRunTime({title: "SpongeBob", numEpisodes: 140, episodeDuration: 20})

// Instanceof Narrowing

// Instanceof is a JS operator that allows us to check
// if one thing is an instance or another (prototype?)

function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString());
    }
}

class User {
    constructor(public username: string) {
    }
}

class Company {
    constructor(public name: string) {
    }
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        entity
    } else {
        entity
    }
}

// Type Predicates

// Allows us to write custom functions that can
// narrow the type of a value
// they have special return type called a type predicate

interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string,
    breed: string
}

// The type predicate is the 'animal is Cat'
function isCat(animal: Cat | Dog): animal is Cat {
    return (animal as Cat).numLives !== undefined

}

function makeNoise(animal: | Cat | Dog): string {
    if (isCat(animal)) {

        return "Meow"
    }
}


// Discriminated Unions

// A common pattern in TypeScript involves creating a literal property
// that is common across multiple types / we can narrow the type using that literal property

interface Roster {
    name: string,
    weight: number,
    age: number,
    kind: "roster"
}

interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: "cow"
}

interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig"
}

type FarmAnimal = Pig | Roster | Cow;

// Exhaustiveness Checks with Never
// basically the never type is assignable to every type,
// but no other type is assignable to never
function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!"
        case "cow":
            return "Moo!"
        case "roster":
            return "Cockadoodledoo!"
        default:
            //     We should never make it here, if we handled all cases correctly
            //     const shouldNeverGetHere: never = animal
            //     return shouldNeverGetHere

            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

const stevie: Roster = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "roster",
}








