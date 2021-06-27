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
