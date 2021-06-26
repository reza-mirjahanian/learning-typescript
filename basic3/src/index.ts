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
function create<Type>(c: { new (): Type }): Type {
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
