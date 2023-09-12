// const nums: number[] = [];

// Generics allow us to define reusable functions and classes
// that work with multiple types rather than a single type.
const nums: Array<number> = []
const color: Array<string> = []

const inputEl = document.querySelector<HTMLInputElement>('#username');
const btn = document.querySelector<HTMLButtonElement>('.btn');


function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string {
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}

// function identity(item: any): any {
//     return item;
// }


interface Cat {
    name: string,
    breed: string
}

// Here the functions says:
// whatever the input type is, that will be the return type

// Also we can customize this identity function to work with different types.
function identity<Type>(item: Type): Type {
    return item
}

identity<string>("hello")
identity<number>(7)
identity<Cat>()

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx]
}

getRandomElement<string>(["a", 'b', 'c'])

// generics with multiple types
function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2
    }
}

const comboObj = merge({name: "colt"}, {pets: ["blue", "elton"]});

merge({name: "Colt"}, {num: 9});
