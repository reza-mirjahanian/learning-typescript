type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f() {
    return {x: 10, y: 3};
}

type P = ReturnType<f>;


// emember that values and types aren’t the same thing. To refer to the type that the value f has, we use typeof:

function f() {
    return {x: 10, y: 3};
}

type P2 = typeof f;
type P = ReturnType<typeof f>;

///////////
const MyArray = [
    {name: "Alice", age: 15},
    {name: "Bob", age: 23},
    {name: "Eve", age: 38},
];

type Person = typeof MyArray[number];

// type Person = {
//     name: string;
//     age: number;
// }
type Age = typeof MyArray[number]["age"];

// type Age = number
// Or
type Age2 = Person["age"];

// type Age2 = number


//////////////
You
can
only
use
types
when
indexing, meaning
you
can’t
use
a
const to
make
a
variable
reference:

    const key = "age";
type Age = Person[key];
// Type 'key' cannot be used as an index type.
// 'key' refers to a value, but is being used as a type here. Did you mean 'typeof key'?
//     Try
//     However, you can use a type alias for a similar style of refactor:

type key = "age";
// type Age = Person[key];
