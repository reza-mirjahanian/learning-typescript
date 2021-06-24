//////////////////////////////****** practice 1
const greet = (name: string, time: Date) => {
    console.log(`Hello ${name}, today is ${time.toDateString()}!`);
};
greet("Reza Mirjahanian", new Date());
//greet("Maddison", Date());

//////////////////////////////****** practice 2
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
const practice2 = () => {
    try {
        let obj: any = {x: 0};
        obj.foo();
        obj();
        obj.bar = 100;
        obj = "hello";
        const n: number = obj;
        console.log(n)
    } catch (e) {
        console.log("Error: 'Any' type is dangerous!")
        // console.log(e)
    }

};
practice2();
//////////////////////////////****** practice 3
//Return Type Annotations
const practice3 = function (): string {
    return "practice3";

};
//console.log(practice3() * 3);
console.log(practice3() + "!");
console.log(1 + practice3() ); // I don't like this one!

//////////////////////////////****** practice 4
//Return Type Annotations
const practice4 = function (): void {
    const names = ["Alice", "Bob", "Eve"];
    //Even though the parameter s didn’t have a type annotation, TypeScript used the types of the forEach function, along with the inferred type of the array, to determine the type s will have.
    // This process is called contextual typing
    names.forEach(function (s) {
        console.log(s.toUpperCase());
    });
};
practice4();

//////////////////////////////****** practice 5
//Optional Properties
function printName(obj: { first: string; last?: string }) {
    // console.log(obj.last.toUpperCase()); Error!
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

//////////////////////////////****** practice 6
// Union and narrowing
function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
//
