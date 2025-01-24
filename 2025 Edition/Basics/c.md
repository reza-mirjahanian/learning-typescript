# TypeScript Fundamentals

## Basic Types
```typescript
let str: string = "hello"
let num: number = 42
let bool: boolean = true
let arr: number[] = [1, 2, 3]
let tuple: [string, number] = ["hello", 10]
let any: any = "anything"
let void: void = undefined
let nullable: null = null
let undefined: undefined = undefined
```

## Type Annotations & Inference
```typescript
// Explicit annotation
let name: string = "John"

// Type inference
let age = 25 // TypeScript infers number
```

## Interfaces
```typescript
interface User {
    name: string;
    age: number;
    email?: string; // Optional property
    readonly id: number; // Read-only property
}

// Implementation
const user: User = {
    name: "John",
    age: 30,
    id: 1
}
```

## Type Aliases
```typescript
type Point = {
    x: number;
    y: number;
}

type ID = string | number;
```

## Functions
```typescript
// Function with type annotations
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;

// Optional parameters
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting} ${name}` : `Hello ${name}`;
}

// Default parameters
function countdown(start: number = 0): void {
    console.log(start);
}
```

## Generics
```typescript
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Generic interface
interface Container<T> {
    value: T;
}

// Generic class
class Queue<T> {
    private data: T[] = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}
```

## Classes
```typescript
class Animal {
    private name: string;
    protected age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    public getName(): string {
        return this.name;
    }
}

// Inheritance
class Dog extends Animal {
    bark(): void {
        console.log("Woof!");
    }
}
```

## Enums
```typescript
// Numeric enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
```

## Union and Intersection Types
```typescript
// Union type
type StringOrNumber = string | number;

// Intersection type
type Employee = Person & { employeeId: number };
```

## Type Assertions
```typescript
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// or
let strLength2: number = (someValue as string).length;
```

## Utility Types
```typescript
// Partial - Makes all properties optional
type PartialUser = Partial<User>;

// Required - Makes all properties required
type RequiredUser = Required<User>;

// Pick - Creates type with subset of properties
type NameOnly = Pick<User, 'name'>;

// Omit - Creates type without certain properties
type UserWithoutId = Omit<User, 'id'>;

// Record - Creates type with specified keys and type
type UserRoles = Record<string, User>;
```

## Decorators
```typescript
// Class decorator
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Example {
    // ...
}
```

## Advanced Types
```typescript
// Mapped types
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
}

// Conditional types
type NonNullable<T> = T extends null | undefined ? never : T;

// Index types
type PropertyType<T> = T extends { [key: string]: infer U } ? U : never;
```

## Best Practices
- Always define return types for functions
- Use interfaces for object shapes
- Avoid using `any` type when possible
- Enable strict mode in tsconfig.json
- Use type inference when types are obvious
- Prefer interfaces over type aliases for public APIs
- Use readonly modifier when properties shouldn't change
- Leverage union types instead of enums when possible
- Use generics for reusable components

## Configuration (tsconfig.json)
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```