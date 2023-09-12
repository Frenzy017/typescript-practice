"use strict";
// const nums: number[] = [];
// Generics allow us to define reusable functions and classes
// that work with multiple types rather than a single type.
const nums = [];
const color = [];
const inputEl = document.querySelector('#username');
const btn = document.querySelector('.btn');
function numberIdentity(item) {
    return item;
}
function stringIdentity(item) {
    return item;
}
function booleanIdentity(item) {
    return item;
}
// Here the functions says:
// whatever the input type is, that will be the return type
// Also we can customize this identity function to work with different types.
function identity(item) {
    return item;
}
identity("hello");
identity(7);
identity();
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
getRandomElement(["a", 'b', 'c']);
// generics with multiple types
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
merge({ name: "Colt" }, { num: 9 });
