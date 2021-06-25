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
type StringBooleansNumber = [string, ...boolean[], number];

let point = [3, 4] as const; //type equal to : readonly [3, 4]
