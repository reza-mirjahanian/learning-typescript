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


interface StringArray {
    [name: number]: string
}

const aStr: StringArray = ['1']


// It is possible to support both types of indexers...
// It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer. This is because when indexing with a number, JavaScript will actually convert that to a string before indexing into an object. That means that indexing with 100 (a number) is the same thing as indexing with "100" (a string), so the two need to be consistent.

// number[] or string[], that’s really just a shorthand for Array<number> and Array<string>.


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

let x = {a: 1, b: 2, c: 3, d: 4};

getProperty(x, "a");
getProperty(x, "m");

// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.


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
