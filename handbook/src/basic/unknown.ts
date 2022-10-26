//And typescript doesn't allow you to use a variable of unknown type unless you either cast the variable to a known type or narrow its type.
// Type narrowing is the process of moving a less precise type to a more precise type.

const xu: unknown = 1;

console.log(xu * xu);
if (typeof xu === "number") {
    console.log(xu * xu);
}


const xb: unknown = {
    a: "a-value",
    b: "b-value"
};

console.log((xb as { a: string; b: string; }).b)

///////////////

const jsonParserUnknown = (jsonString: string): unknown => JSON.parse(jsonString);

const myOtherAccount = jsonParserUnknown(`{ "name": "Samuel" }`);

myOtherAccount.name;

type User = { name: string };
const myUserAccount = jsonParserUnknown(`{ "name": "Samuel" }`) as User;
myUserAccount.name;

