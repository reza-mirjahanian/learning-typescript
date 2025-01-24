### TypeScript Basics: A Comprehensive Guide

#### Core Concepts

*   **Superset of JavaScript:** TypeScript extends JavaScript by adding static typing. This means you can specify the types of variables, function parameters, and return values.
*   **Static Typing:** Types are checked during compilation, not runtime. This helps catch errors early in development.
*   **Compilation to JavaScript:** TypeScript code is compiled into regular JavaScript code that can be run in browsers or Node.js.*   **Gradual Typing:** You can start using TypeScript in existing JavaScript projects incrementally. Not all code needs to be immediately converted.
*   **Benefits:**
    *   **Early Error Detection:** Catches type-related errors before runtime.
    *   **Improved Code Readability:** Explicit types make code easier to understand.
    *   **Enhanced Code Maintainability:** Refactoring is safer and easier.
    *   **Better IDE Support:** Provides features like autocompletion and refactoring.

#### Setting Up TypeScript

1.  **Installation:**
    ```bash
    npm install -g typescript
    ```
2.  **Compilation:**
    *   Create a `tsconfig.json` file in your project root to configure the TypeScript compiler.
    *   Compile TypeScript files to JavaScript using the `tsc` command:
        ```bash
        tsc your_file.ts
        ```
    *   To compile all files in a project, use:
        ```bash
        tsc
        ```

#### Basic Types

*   **Primitive Types:**
    *   `boolean`: `true` or `false`
    *   `number`: All numeric values (integers, floats, etc.)
    *   `string`: Textual data
    *   `null`: Represents the intentional absence of a value
    *   `undefined`: Represents a variable that has not been assigned a value
    *   `symbol`: Unique and immutable value (ES6)
    *   `bigint`: Arbitrary-precision integers (ES2020)
*   **Array:**
    *   `number[]`: Array of numbers    *   `Array<string>`: Array of strings
*   **Tuple:**
    *   `[number, string]`: Array with fixed number of elements and known types
*   **Enum:**
    ```typescript
    enum Color {
        Red,
        Green,
        Blue
    }
    let c: Color = Color.Green;
    ```
*   **Object:**
    ```typescript
    let person: { name: string, age: number } = { name: "John", age: 30 };
    ```
*   **Any:**    *   Disables type checking. Use sparingly.
    *   Useful for migrating JavaScript projects to TypeScript.
*   **Void:**
    *   Represents the absence of a return value from a function.
*   **Never:**
    *   Represents the type of values that never occur (e.g., functions that always throw an error).
*   **Unknown:**
    *   Type-safe counterpart of `any`.
    *   Requires type assertion or narrowing before use.

#### Type Annotations

*   **Explicitly specifying types:**
    ```typescript
    let age: number = 30;
    let name: string = "John";
    function add(a: number, b: number): number {
        return a + b;
    }
    ```
*   **Type Inference:** TypeScript can often infer types, but explicit annotations are beneficial for clarity.

#### Functions

*   **Function Types:**
    ```typescript
    function greet(name: string): string {
        return "Hello, " + name;
    }
    let myGreet: (name: string) => string = greet;
    ```
*   **Optional Parameters:**
    ```typescript
    function greet(name: string, greeting?: string): string {
        return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
    }
    ```
*   **Default Parameters:**
    ```typescript
    function greet(name: string, greeting: string = "Hello"): string {
        return `${greeting}, ${name}`;
    }
    ```
*   **Rest Parameters:**
    ```typescript
    function sum(...numbers: number[]): number {
        return numbers.reduce((total, num) => total + num, 0);
    }
    ```
*   **Function Overloading:**
    ```typescript
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: any, b: any): any {
        return a + b;
    }
    ```

#### Interfaces

*   **Defining contracts for objects:**
    ```typescript
    interface Person {
        name: string;
        age: number;
        greet(): string;
    }
    let person: Person = {
        name: "John",
        age: 30,
        greet() {
            return `Hello, my name is ${this.name}`
        }
    };
    ```
*   **Optional Properties:**
    ```typescript
    interface Person {
        name: string;
        age?: number;
    }
    ```
*   **Readonly Properties:**
    ```typescript
    interface Person {
        readonly id: number;
        name: string;
    }
    ```
*   **Extending Interfaces:**
    ```typescript
    interface Employee extends Person {
        department: string;
    }
    ```
*   **Function Types in Interfaces:**
    ```typescript
    interface MathOperation {
        (a: number, b: number): number;
    }
    ```

#### Classes

*   **Defining classes:**
    ```typescript
    class Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        move(distance: number) {
            console.log(`${this.name} moved ${distance} meters.`);
        }
    }
    ```
*   **Inheritance:**
    ```typescript
    class Dog extends Animal {
        bark() {
            console.log("Woof!");
        }
    }
    ```
*   **Access Modifiers:**
    *   `public`: Accessible from anywhere (default).
    *   `private`: Accessible only within the class.
    *   `protected`: Accessible within the class and its subclasses.
*   **Abstract Classes:**
    ```typescript
    abstract class Shape {
        abstract getArea(): number;
    }
    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }
    ```
*   **Static Members:**
    ```typescript
    class Counter {
        static count: number = 0;
        static increment() {
            Counter.count++;
        }
    }
    ```

#### Generics

*   **Creating reusable components that can work over a variety of types:**
    ```typescript
    function identity<T>(arg: T): T {
        return arg;
    }
    let output1 = identity<string>("myString");
    let output2 = identity<number>(100);
    ```
*   **Generic Interfaces:**
    ```typescript
    interface Box<T> {
        value: T;
    }
    let box: Box<number> = { value: 10 };
    ```
*   **Generic Classes:**
    ```typescript
    class DataStore<T> {
        data: T[] = [];
        add(item: T) {
            this.data.push(item);
        }
    }
    ```

#### Type Aliases

*   **Creating custom names for types:**
    ```typescript
    type Point = { x: number, y: number };
    let point: Point = { x: 10, y: 20 };
    type StringOrNumber = string | number;
    ```

#### Type Assertions

*   **Overriding TypeScript's type inference:**
    ```typescript
    let value: any = "hello";
    let strLength: number = (value as string).length;
    let strLength2: number = (<string>value).length;
    ```

#### Union and Intersection Types

*   **Union Types (OR):**
    ```typescript
    function printId(id: string | number) {
        console.log(`ID is: ${id}`);
    }
    ```
*   **Intersection Types (AND):**
    ```typescript
    interface Colorful {
        color: string;
    }
    interface Circle {
        radius: number;
    }
    type ColorfulCircle = Colorful & Circle;
    let cc: ColorfulCircle = { color: "red", radius: 10 };
    ```

#### Literal Types

*   **Specifying exact values a variable can hold:**
    ```typescript
    type Direction = "north" | "south" | "east" | "west";
    let dir: Direction = "north";
    ```

#### Conditional Types

*   **Types that depend on other types:**
    ```typescript
    type IsString<T> = T extends string ? true : false;
    type Str = IsString<string>; // true
    type Num = IsString<number>; // false
    ```

#### Mapped Types

*   **Transforming existing types:**
    ```typescript
    interface Person {
        name: string;
        age: number;
    }    type ReadonlyPerson = {
        readonly [K in keyof Person]: Person[K];
    };
    ```

#### Utility Types

*   **Built-in types for common type transformations:**
    *   `Partial<T>`: Makes all properties of T optional.
    *   `Required<T>`: Makes all properties of T required.
    *   `Readonly<T>`: Makes all properties of T readonly.
    *   `Pick<T, K>`: Creates a type with specified properties of T.
    *   `Omit<T, K>`: Creates a type by omitting specified properties of T.
    *   `Record<K, T>`: Creates a type with keys K and values T.
    *   `Exclude<T, U>`: Excludes types from T that are assignable to U.
    *   `Extract<T, U>`: Extracts types from T that are assignable to U.
    *   `NonNullable<T>`: Excludes `null` and `undefined` from T.
    *   `Parameters<T>`: Extracts the parameter types of a function T.
    *   `ReturnType<T>`: Extracts the return type of a function T.
    *   `InstanceType<T>`: Extracts the instance type of a constructor function T.

#### Modules

*   **Organizing code into separate files:**
    *   **Export:** Use `export` to make variables, functions, classes, etc. available in other files.
    *   **Import:** Use `import` to use exported members from other files.
    ```typescript
    // file: moduleA.ts
    export function greet(name: string): string {
        return `Hello, ${name}`;
    }
    // file: main.ts
    import { greet } from "./moduleA";
    console.log(greet("John"));
    ```

#### Namespaces

*   **Grouping related code under a common name:**
    ```typescript
    namespace MyMath {
        export function add(a: number, b: number): number {
            return a + b;
        }
    }
    console.log(MyMath.add(5, 3));
    ```
    *   **Note:**  Modules are preferred over namespaces in modern TypeScript.

#### Decorators

*   **Adding metadata and behavior to classes, methods, properties, etc.:**
    ```typescript
    function logClass(constructor: Function) {
        console.log(`Class ${constructor.name} has been created`);
    }
    @logClass
    class MyClass {
        constructor() {
            console.log("MyClass instance created");
        }
    }
    ```
    *   **Note:**  Decorators are an experimental feature and require enabling in `tsconfig.json`.

#### `tsconfig.json` Options

*   **`compilerOptions`**:
    *   `target`: Specifies the target ECMAScript version.
    *   `module`: Specifies the module system.
    *   `outDir`: Specifies the output directory for compiled JavaScript files.
    *   `rootDir`: Specifies the root directory of your source files.
    *   `sourceMap`: Generates source map files for debugging.
    *   `strict`: Enables all strict type checking options.
    *   `esModuleInterop`: Enables interoperability between CommonJS and ES modules.
    *   `experimentalDecorators`: Enables decorators.
    *   `lib`: Specifies the library files to include during compilation.
*   **`include` and `exclude`**: Specify which files to include or exclude from compilation.
*   **`files`**: Specifies the list of files to compile.

This comprehensive guide covers the core aspects of TypeScript. By mastering these concepts, you'll be well-equipped to build robust and maintainable applications. Remember to practice and experiment to solidify your understanding.