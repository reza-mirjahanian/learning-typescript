interface Human {
    name: string;
    hungry: boolean;
}

const Reza: Human = {
    hungry: true,
    name: 'reza',

}

class RezaClass implements Human {
    hungry: boolean = false;
    name!: string;

}

// ----------------
interface A {
    a(): void
}

interface B extends A {
    b(): void
}

class C implements B, Human {
    hungry: boolean = false;
    name!: string;

    a(): void {
    }

    b(): void {
    }

}

// ---------------- Error
// class D extends Human {
//
// }

//OK 1
interface F extends C {

}

//Merging interface
interface Student {
    id: number;
}

interface Student {
    // error: Subsequent property declarations
    // must have the same type.
    // Property 'id' must be of type 'number',
    // but here has type 'string'.
    // id: string;
    name: string;
}

interface Student {
    branch: string;
}

// function interface
interface Hello {
    (name: string): string
}

const sayHello: Hello = (input) => 'salam'

///////////////// Type Alias

type youtuber = {
    name: string
}

type blogger = {
    age: number
    name: string
}

type inter = youtuber & blogger;

const a: inter = {
    age: 3,
    name: '2',

}
