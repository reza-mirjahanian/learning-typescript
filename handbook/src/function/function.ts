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
function firstElement<Type>(arr: Type[]): Type  {
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
