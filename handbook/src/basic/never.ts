// # The`never`type
// When narrowing, you can reduce the options of a union to a point where you have removed all possibilities and have nothing left. In those cases,
// TypeScript will use a  `never`  type to represent a state which shouldn’t exist.


// TypeScript introduced a new type never, which indicates the values that will never occur.

// The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    while (true) {
        console.log('I always does something and never ends.')
    }
}

//////
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

// ---cut---
type Shape2 = Circle | Square;

function getArea(shape: Shape2) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// ---cut---
interface Triangle {
    kind: "triangle";
    sideLength: number;
}

type Shape3 = Circle | Square | Triangle;

function getArea2(shape: Shape3) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// Difference between never and void
// The void type can have undefined or null(** not always) as a value where as never cannot have any value.

let something: void = undefined;
let nothing: never = undefined; //
