//////////////////////////////****** practice 1
//readonly properties can also change via aliasing.
interface Person {
    name: string;
    age: number;
}

interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

//////////////////////////////****** practice 2 , Index
declare function getStringArray(): StringArray;

// ---cut---
interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
//     ^?

//////////////////////////////****** practice 3, obj.property  obj["property"]

interface NumberDictionary {
    [index: string]: number;

    length: number; // ok
    name: number;
    // name: string; //Error 🚫
}

interface NumberOrStringDictionary {
    [index: string]: number | string;

    length: number; // ok, length is a number
    name: string; // ok, name is a string
}

//////////////////////////////****** practice 4 ,Intersection Types
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

type OrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
// type OneOrManyOrNull<Type> = OneOrMany<Type> | null

type OneOrManyOrNullStrings = OneOrManyOrNull<string>;

//////////////////////////////****** practice 5 , other
//The ReadonlyArray Type == readonly Type[]
function doStuff(values: ReadonlyArray<string>) {
    // We can read from 'values'...
    values.slice();
    console.log(`The first value is ${values[0]}`);

    // ...but we can't mutate 'values'.
    // values.push("hello!"); Error 🚫
}

type StringNumberBooleans = [string, number, ...boolean[]];

let point = [3, 4] as const; //type equal to : readonly [3, 4]

//////////////////////////////****** practice 6 , Generic
//We can also write the generic type as a call signature of an object literal type:

function identity<Type>(arg: Type): Type {
    return arg;
}

let myIdentity: { <Type>(arg: Type): Type } = identity;

//////////////////////////////****** practice 7 , Generic Constraints
function loggingIdentityWrong<Type>(arg: Type): Type {
    // console.log(arg.length); //Error 🚫   function loggingIdentity<Type>(arg: Type): Type {
    return arg;
}

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}

//////////////////////////////****** practice 8 , Class Types in Generics
function create<Type>(c: { new(): Type }): Type {
    return new c();
}

//This pattern is used to power the mixins design pattern.
class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;

//////////////////////////////****** practice 9 , The keyof type operator
//The keyof operator takes an object type and produces a string or numeric literal union of its keys:
type Point = { x: number; y: number };
type P = keyof Point;
let test9: P = "x";
test9 = "y";
//test9 = "z";Error 🚫
//
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
//type M = string | number
//Note that in this example, M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].

//////////////////////////////****** practice 10, The type operator
//TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:
let s = "hello";
let n: typeof s;

//  ReturnType
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;  // type K = boolean

function f() {
    return {x: 10, y: 3};
}

type myReturnType = ReturnType<typeof f>;
// type myReturnType = ReturnType<f>; // We can't use with function directly!
//Specifically, it’s only legal to use typeof on identifiers (i.e. variable names) or their properties.

//////////////////////////////****** practice 11, Indexed Access Types
type PersonIndex = { age: number; name: string; alive: boolean };
type Age = PersonIndex["age"];
let myAge: Age = 4;

type I1 = PersonIndex["age" | "name"];
let testI1: I1 = "reza";
type AliveOrName = "alive" | "name";
type I3 = PersonIndex[AliveOrName];
//
const MyArray = [
    {name: "Alice", age: 15},
    {name: "Bob", age: 23},
    {name: "Eve", age: 38},
];
type PersonTest1 = typeof MyArray[number];
type AgeTest = typeof MyArray[number]["age"];
type Age2 = Person["age"];

//////////////////////////////****** practice 12, Conditional type
interface Animal {
    live(): void;
}

interface Dog extends Animal {
    woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // Condition is True
type Example2 = RegExp extends Animal ? number : string; // Condition is False

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

//
interface Email {
    message: string;
}

interface Dog {
    bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
//type EmailMessageContents = string

type DogMessageContents = MessageOf<Dog>;
//type DogMessageContents = never

//////////////////////////////****** practice 14, infer keyword
//Inferring Within Conditional Types
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;
//
// type Unpromisify<T> = T extends Promise<any> ? T : never
type Unpromisify<T> = T extends Promise<infer R> ? R : T
//We check if type extends Promise
// If it does we extract the type from the promise
// If it does not leave it as is

//Distributive Conditional Types
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; // type StrArrOrNumArr = string[] | number[]

// we use [] to prevent spreading
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type StrOrNumArr = ToArrayNonDist<string | number>; //type StrOrNumArr = (string | number)[]
