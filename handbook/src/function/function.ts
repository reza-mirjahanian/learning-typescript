type callback = (input: number) => number

function runCallback(a: callback) {
    a(2)
}


///////////////


// Call Signatures
// In JavaScript, functions can have properties in addition to being callable. However, the function type expression syntax doesn’t allow for declaring properties. If we want to describe something callable with properties, we can write a call signature in an object type:

type DescribableFunction = {
    description: string;
    (someArg: number): boolean; // not (input: number) => boolean
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

// Note that the syntax is slightly different compared to a function type expression -
// use : between the parameter list and the return type rather than =>.


// Construct Signatures

type SomeConstructor = {
    new(s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}


// Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:

interface CallOrConstruct {
    new(s: string): Date;

    (n?: number): number;
}

// Generic
function firstElement<Type>(arr: Type[]): Type {
    return arr[0];
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);


// Constraints

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);
// longerString is of type 'alice' | 'bob'
const longerString = longest("alice", "bob");
// Error! Numbers don't have a 'length' property
const notOK = longest(10, 100);

///
function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
): Type {
    if (obj.length >= minimum) {
        return obj;
    } else {
        return {length: minimum};
    }
}

// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
console.log(arr.slice(0));

//////////
// declare function f(x?: number): void;
function f(x = 10) {
};
// cut
// All OK
f();
f(10);
f(undefined);

//
// When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

// Always prefer parameters with union types instead of overloads when possible

// In JavaScript, a function that doesn’t return any value will implicitly return the value undefined. However, void and undefined are not the same thing in TypeScript.
// object is not Object. Always use object!

function f1(a: any) {
    a.b(); // OK
}

function f2(a: unknown) {
    a.b();
    // Object is of type 'unknown'.
}

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

// Need to be careful with 'obj'!
const obj = safeParse('dfdfdfd');

//////////////////////////
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.

// never also appears when TypeScript determines there’s nothing left in a union.

function fn1(x: string | number) {
    if (typeof x === "string") {
        // do something
    } else if (typeof x === "number") {
        // do something else
    } else {
        x; // has type 'never'!
    }
}

function doSomething1(f: Function) {
    return f(1, 2, 3);
}

//////////
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);

//////////////////////

// Note that in general, TypeScript does not assume that arrays are immutable. This can lead to some surprising behavior:

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
const angle = Math.atan2(...args);

const args2 = [8, 5] as const;
// OK
const angle2 = Math.atan2(...args2);

//Contextual typing with a return type of void does not force functions to not return something. Another way to say this is a contextual function type with a void return type (type vf = () => void), when implemented, can return any other value, but it will be ignored.

type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
    return true;
};

