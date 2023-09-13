"use strict";
//     Typeof Guards
// They involve simply doing a type check before working with a value
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
// Truthiness Guards
//  They involve checking a value for being truthy or falsy before working with it
//  Helpful avoiding errors like null or undefined
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("You did not pass in a word!");
    }
};
// Equality Narrowing
// They involve comparing types to each other before certain operations with values.
// By checkin two values against one another,
// we can be sure they're both the same before working with them
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
someDemo(3, "3");
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
getRunTime({ title: "Amadeus", duration: 140 });
getRunTime({ title: "SpongeBob", numEpisodes: 140, episodeDuration: 20 });
// Instanceof Narrowing
// Instanceof is a JS operator that allows us to check
// if one thing is an instance or another (prototype?)
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
// The type predicate is the 'animal is Cat'
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow";
    }
}
// Exhaustiveness Checks with Never
// basically the never type is assignable to every type,
// but no other type is assignable to never
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moo!";
        case "roster":
            return "Cockadoodledoo!";
        default:
            //     We should never make it here, if we handled all cases correctly
            //     const shouldNeverGetHere: never = animal
            //     return shouldNeverGetHere
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "roster",
};
