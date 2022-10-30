interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

//////////////

interface IdLabel {
    id: number /* some fields */
    ;
}

interface NameLabel {
    name: string /* other fields */
    ;
}

//////////
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
    message: string;
}

interface Dog {
    bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
type DogMessageContents = MessageOf<Dog>;


type NameOrId<T extends number | string> = T extends number
    ? IdLabel
    : NameLabel;

///
// Inferring Within Conditional Types
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;


// Here, we used the infer keyword to declaratively introduce a new generic type variable named Item instead of specifying how to retrieve the element type of T within the true branch. This frees us from having to think about how to dig through and probing apart the structure of the types we’re interested in.

// We can write some useful helper type aliases using the infer keyword. For example, for simple cases, we can extract the return type out from function types:

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
    ? Return
    : never;

type Num = GetReturnType<() => number>;

// type Num = number

type Str = GetReturnType<(x: string) => string>;

// type Str = string

type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;

// type Bools = boolean[]


//////////////
// Distributive Conditional Types

type ToArray<Type> = Type extends any ? Type[] : never;

// type StrArrOrNumArr = ToArray<string | number>;
//
// type StrArrOrNumArr = string[] | number[]
