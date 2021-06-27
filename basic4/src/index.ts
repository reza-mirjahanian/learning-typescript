//////////////////////////////****** practice 1
// type PropEventSource<Type> = {
//     on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
// };
//
// /// Create a "watched object" with an 'on' method
// /// so that you can watch for changes to properties.
// declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
//
// const person = makeWatchedObject({
//     firstName: "Saoirse",
//     lastName: "Ronan",
//     age: 26
// });
//
// person.on("firstNameChanged", () => {});

// It's typo-resistent
// person.on("firstName", () => {}); //Error 🚫

//
// type PropEventSource2<Type> = {
//     on<Key extends string & keyof Type>
//     (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
// };

// declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource2<Type>;
//
// const person2 = makeWatchedObject({
//     firstName: "Saoirse",
//     lastName: "Ronan",
//     age: 26
// });
//
// person2.on("firstNameChanged", newName => {
//     console.log(`new name is ${newName.toUpperCase()}`);
// });
//
// person2.on("ageChanged", newAge => {
//     if (newAge < 0) {
//         console.warn("warning! negative age");
//     }
// })
//////////////////////////////****** practice 2
// type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
// type MainID = ASCIICacheKey<"my_app">

// Capitalize<StringType>

//////////////////////////////****** practice 3 , Some Tips
// Use structural typing to facilitate unit testing.
// Limit Use of the any Type

interface Person {
    name: string;
}

interface Lifespan {
    birth: Date;
    death?: Date;
}

type PersonSpan = Person & Lifespan;
const ps: PersonSpan = {
    name: 'Alan Turing',
    birth: new Date('2021/06/23'),
    death: new Date('2029/06/07'),
};

//keyof (A&B) = (keyof A) | (keyof B)
// keyof (A|B) = (keyof A) & (keyof B)
type K = keyof (Person | Lifespan); // k is Never
type T = keyof (Person & Lifespan);
type P = Person | Lifespan;
let testT: T = "name";
let testP: P = {birth: new Date('2029/06/07'), death: new Date('2029/06/07'),};
testP = {birth: new Date('2029/06/07')};

//https://www.typescriptlang.org/docs/handbook/utility-types.html

