# TypeScript Functions Guide

## Function Declarations
```typescript
// Basic function
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function
const multiply = (x: number, y: number): number => x * y;

// Function expression
const divide: (x: number, y: number) => number = function(x, y) {
    return x / y;
};
```

## Optional and Default Parameters
```typescript
// Optional parameter (?)
function greet(name: string, greeting?: string): string {
    return greeting ? `${greeting}, ${name}` : `Hello, ${name}`;
}

// Default parameter
function countdown(start: number = 0): void {
    console.log(start);
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
```

## Function Overloads
```typescript
// Overload signatures
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;
function makeDate(yearOrTimestamp: number, month?: number, day?: number): Date {
    if (month !== undefined && day !== undefined) {
        return new Date(yearOrTimestamp, month - 1, day);
    }
    return new Date(yearOrTimestamp);
}
```

## Generic Functions
```typescript
// Basic generic function
function identity<T>(arg: T): T {
    return arg;
}

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Generic constraints
function getLength<T extends { length: number }>(arg: T): number {
    return arg.length;
}

// Generic interfaces
interface GenericFn<T> {
    (arg: T): T;
}
```

## Function Types
```typescript
// Type alias for function
type MathFunc = (x: number, y: number) => number;

// Interface for function
interface Calculator {
    (x: number, y: number): number;
}

// Function with properties
interface FunctionWithProps {
    (x: number): number;
    defaultValue: number;
}
```

## This Parameters
```typescript
interface User {
    id: number;
    admin: boolean;
    becomeAdmin: () => void;
}

const user: User = {
    id: 123,
    admin: false,
    becomeAdmin(this: User) {
        this.admin = true;
    },
};
```

## Call Signatures
```typescript
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}
```

## Construct Signatures
```typescript
type SomeConstructor = {
    new (s: string): object;
};

function fn(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

## Parameter Destructuring
```typescript
function sum({ a, b, c }: { a: number; b: number; c: number }): number {
    return a + b + c;
}

// With interface
interface Params {
    a: number;
    b: number;
    c: number;
}
function sum2({ a, b, c }: Params): number {
    return a + b + c;
}
```

## Function Type Inference
```typescript
// Return type inference
function createPerson(name: string, age: number) {
    return { name, age }; // Returns { name: string; age: number }
}

// Parameter type inference in callbacks
[1, 2, 3].map((num) => num * 2); // num is inferred as number
```

## Async Functions
```typescript
// Promise return type
async function fetchData(): Promise<string> {
    const response = await fetch('api/data');
    return response.text();
}

// Async arrow function
const getData = async (): Promise<object> => {
    const data = await fetchData();
    return JSON.parse(data);
};
```

## Function Type Guards
```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processValue(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
}
```

## Function Composition
```typescript
type Func<T, U> = (arg: T) => U;

function compose<A, B, C>(
    f: Func<B, C>,
    g: Func<A, B>
): Func<A, C> {
    return (x) => f(g(x));
}
```

## Best Practices
- Always specify return types for public APIs
- Use type inference for simple functions
- Prefer interfaces for function types in public APIs
- Use function overloads for complex type relationships
- Keep generic constraints as specific as possible
- Document complex function signatures
- Use async/await with proper Promise types
- Implement proper error handling in functions
- Use parameter destructuring for cleaner code
- Avoid using 'any' in function signatures

## Function Decorators
```typescript
function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args);
        return originalMethod.apply(this, args);
    };
}

class Example {
    @logged
    multiply(x: number, y: number) {
        return x * y;
    }
}
```