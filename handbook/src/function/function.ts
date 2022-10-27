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
