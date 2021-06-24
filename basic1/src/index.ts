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

