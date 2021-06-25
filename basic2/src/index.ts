//////////////////////////////****** practice 1
function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

logValue("Reza Mirjahanian");

//////////////////////////////****** practice 2
// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement
//// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
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

//////////////////////////////****** practice 3 Using type predicates
// function isString(s:unknown){ // TypeScript throws an error. We can be sure that x is of type string at this point. But since the validation is wrapped in a function, the type of x does not change (as opposed to type guards). Enter type predicates.
function isString(s: unknown): s is string {
    return typeof s === 'string';
}

function toUpperCase(x: unknown) {
    if (isString(x)) {
        x.toUpperCase(); // ✅ all good, x is string
    }
}

//////////////////////////////****** practice 4 ,Function Type Expressions
function greeter(fn: (a: string) => void) {
    fn("Function Type Expressions");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

//////////////////////////////****** practice 5 , Construct Signatures
//JavaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because they usually create a new object
type SomeConstructor = {
    new(s: string): Date;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}

//Some objects, like JavaScript’s Date object, can be called with or without new.
// You can combine call and construct signatures in the same type arbitrarily:
interface CallOrConstruct {
    new(s: string): Date;

    (n?: number): number;
}

//////////////////////////////****** practice 5 , Generic
function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

//////////////////////////////****** practice 9 , Constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'string'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
// const notOK = longest(10, 100); 🚫

//////////////////////////////****** practice 10 , Constraints B
function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        // return { length: minimum }; //Error 🚫
        return obj;
    }
}

// 'arr' gets value { length: 6 }
// and crashes here because arrays have
// a 'slice' method, but not the returned object!

// const arr = minimumLength([1, 2, 3], 6);  🚫
// console.log(arr.slice(0));
//////////////////////////////****** practice  11, Constraints C
//Rule: When possible, use the type parameter itself rather than constraining it
function firstElement1<Type>(arr: Type[]) {
    return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
    return arr[0];
}

// a: number (good)
const myTypeIsNumber = firstElement1([1, 2, 3]);
// b: any (bad)
const myTypeIsAny = firstElement2([1, 2, 3]);


//Optional Parameters
function f(n?: number) {
    if (n) {
        console.log(n.toFixed()); // 0 arguments
        console.log(n.toFixed(3)); // 1 argument
    }
}

f();
f(10);
f(undefined);

//////////////////////////////****** practice  12, Function Overloads
//When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument
//wrong way

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);


//Always prefer parameters with union types instead of overloads when possible

//////////////////////////////****** practice  12, unknown,never
//The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
function f1(a: any) {
    a.b(); // OK
}
function f2(a: unknown) {
    console.log({a});
    // a.b(); //Error 🚫
    // Object is of type 'unknown'.
}

//Some functions never return a value:
//never also appears when TypeScript determines there’s nothing left in a union.
function fail(msg: string): never {
    throw new Error(msg);
}

//////////////////////////////****** practice  13, Rest
// Inferred as 2-length tuple
// const args = [8, 5];  //Error 🚫 Expected 2 arguments, but got 0 or more.
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);

function sum({ a, b, c }: { a: number; b: number; c: number }) {
    console.log(a + b + c);
}

sum({ a: 10, b: 3, c: 9 });

////////////////////////////////****** practice  14 Return type void
//Contextual typing with a return type of void does not force functions to not return something. Another way to say this is a contextual function type with a void return type (type vf = () => void), when implemented, can return any other value, but it will be ignored.
type voidFunc = () => void;

const f11: voidFunc = () => {
    return true;
};

const f22: voidFunc = () => true;

const f33: voidFunc = function () {
    return true;
};

//This behavior exists so that the following code is valid even though Array.prototype.push returns a number and the Array.prototype.forEach method expects a function with a return type of void.
const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));

function f2a(): void {
    // return true; //Error 🚫
}
