// Tuples
//  They're array of fixed lengths and ordered with specific types - rigid arrays

const stuff: string[] = ["asd", 'asddsa', 'asdsad']

//  Tuple represents exactly 3 numbers and length, anything else is invalid
// Order matters
const color: [number, number, number] = [255, 0, 255];

type HTTResponse = [number, string];

const goodRes: HTTResponse = [200, "OK"]

// Type limitation
goodRes.push(123)
goodRes.pop()


// Enums
// They're set of named constants that we can reuse throughout our code

enum OrderStatus {
    PENDING, // 0
    SHIPPED, // 1
    DELIVERED, // 2
    RETURNED // 3
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

// Enums can be mixed strings or numbers
// When written like this it will pollute JS with a lot of code, so we have to use const before enum

// That's the JS code that gets generated behind the scenes if not used const:

// var ArrowKey;
// (function (ArrowKey) {
//     ArrowKey["UP"] = "up";
//     ArrowKey["DOWN"] = "down";
//     ArrowKey["LEFT"] = "left";
//     ArrowKey["RIGHT"] = "right";
//     ArrowKey[ArrowKey["ERROR"] = 234] = "ERROR";
// })(ArrowKey || (ArrowKey = {}));

// Down bellow is the coded that JS generated if used with const

// function isDelivered(status) {
//     return status === OrderStatus.DELIVERED;
// }
// isDelivered(OrderStatus.RETURNED);

 const enum ArrowKey {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right",
    ERROR = 234,
}

