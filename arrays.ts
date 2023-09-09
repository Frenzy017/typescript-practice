// Syntax
const activeUsers: string[] = ["colt"];
activeUsers.push("Tony");

const ageList: number[] = [45, 32, 12];
ageList[0] = 99;

// Alternative syntax for Array Types
const bools: Array<boolean> = []

type Point = {
    x: number,
    y: number
}
const coords: Point[] = []
coords.push({x: 23, y: 9})

// Multidimensional Arrays
const board: string[][] =
    [
        ["X", "0", "X"],
        ["X", "0", "X"],
        ["X", "0", "X"]
    ]

