//////////////////////////////****** practice 1
const greet = (name: string, time: Date) => {
    console.log(`Hello ${name}, today is ${time.toDateString()}!`);
};
greet("Reza Mirjahanian", new Date());
//greet("Maddison", Date());

//////////////////////////////****** practice 2
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
const practice2 = () => {
    try {
        let obj: any = {x: 0};
        obj.foo();
        obj();
        obj.bar = 100;
        obj = "hello";
        const n: number = obj;
        console.log(n)
    } catch (e) {
        console.log("Error: 'Any' type is dangerous!")
        // console.log(e)
    }

};
practice2();
//////////////////////////////****** practice 3
//Return Type Annotations
const practice3 = function (): string {
    return "practice3";

};
//console.log(practice3() * 3);
console.log(practice3() + "!");
console.log(1 + practice3()); // I don't like this one!

//////////////////////////////****** practice 4
//Return Type Annotations
const practice4 = function (): void {
    const names = ["Alice", "Bob", "Eve"];
    //Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.
    // This process is called contextual typing
    names.forEach(function (s) {
        console.log(s.toUpperCase());
    });
};
practice4();

//////////////////////////////****** practice 5
//Optional Properties
function printName(obj: { first: string; last?: string }) {
    // console.log(obj.last.toUpperCase()); Error!
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}

// Both OK
printName({first: "Bob"});
printName({first: "Alice", last: "Alisson"});

//////////////////////////////****** practice 6
// Union and narrowing
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}

//////////////////////////////****** practice 7

interface Point {
    x: number;
}

interface Point {
    y: number;
}

interface Point3d extends Point {
    z: number;
}

// type Point = {
//     x: number;
//     y: number;
// };

//Differences Between Type Aliases and Interfaces?
//Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 100, y: 100});

//////////////////////////////****** practice 8
//Type Assertions

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas"); // not in .tsx file

//////////////////////////////****** practice 9
// Literal Types
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system

const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation

function printText(s: string, alignment: "left" | "right" | "center") {
    console.log({s, alignment})
}

printText("Hello, world", "center");
// printText("G'day, mate", "centre")

//////////////////////////////****** practice 10
//declare is used to tell the compiler "this thing (usually a variable) exists already, and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript".
declare function handleRequest(url: string, method: "GET" | "POST"): void;

// 'as cons' is important
const req = {url: "https://example.com", method: "GET"} as const;
handleRequest(req.url, req.method);

//The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.

//////////////////////////////****** practice 11
function doSomething(x: string | null) {
    if (x === null) {
        // do nothing
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
    //strictNullChecks on
    // console.log("Hello, " + x.toUpperCase()); Error!

    //Work around
    console.log(x!.toUpperCase());
}

//
