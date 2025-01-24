# **Functions in TypeScript**

Functions are a fundamental part of TypeScript, and they provide enhanced type safety and flexibility compared to plain JavaScript. Below is a complete reference covering all aspects of functions in TypeScript, with tips, tricks, and examples.

---

## **1. Function Declaration**
### **Basic Syntax**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
- **`a: number` and `b: number`**: Parameter type annotations.
- **`: number`**: Return type annotation.

---

## **2. Function Expressions**
- Functions can be assigned to variables.
```typescript
const multiply = function (a: number, b: number): number {
  return a * b;
};
```

- **Arrow Functions**:
```typescript
const divide = (a: number, b: number): number => a / b;
```

---

## **3. Optional Parameters**
- Use `?` to make a parameter optional.
```typescript
function greet(name: string, age?: number): string {
  return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
}
```
- Optional parameters are always **`undefined`** if not provided.

---

## **4. Default Parameters**
- Assign default values to parameters.
```typescript
function greet(name: string, age: number = 18): string {
  return `Hello, ${name}. You are ${age} years old.`;
}
```

---

## **5. Rest Parameters**
- Use the `...` syntax to handle a variable number of arguments.
```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

---

## **6. Function Overloading**
- Define multiple function signatures for a single function.

### **Example**
```typescript
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

const result1 = combine(1, 2); // number
const result2 = combine("Hello, ", "World!"); // string
```
- **Overload Signatures**: The first two lines define the possible types for the function.
- **Implementation**: The actual function must handle all cases.

---

## **7. Void Return Type**
- Use `void` for functions that do not return a value.
```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

---

## **8. Never Return Type**
- Use `never` for functions that never return (e.g., infinite loops or throwing errors).
```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
```

---

## **9. Anonymous Functions**
- Functions without a name, often used in callbacks.
```typescript
setTimeout(function () {
  console.log("Hello after 1 second");
}, 1000);

setTimeout(() => {
  console.log("Hello after 1 second");
}, 1000);
```

---

## **10. `this` in Functions**
- TypeScript allows you to explicitly type `this`.

### **Example**
```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(this: Person): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person = new Person("Alice");
person.greet();
```
- The `this: Person` annotation ensures that the function is called with the correct context.

---

## **11. Function Types**
- Define the type of a function explicitly.

### **Example**
```typescript
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
```

---

## **12. Generic Functions**
- Create reusable functions that work with different types.

### **Example**
```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42); // T is number
const str = identity<string>("Hello"); // T is string
```

- **Generic Constraints**:
```typescript
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("Hello"); // Valid
getLength([1, 2, 3]); // Valid
// getLength(42); // Error: number does not have a length property
```

---

## **13. Asynchronous Functions**
- Use `async` and `await` for asynchronous operations.

### **Example**
```typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}
```

---

## **14. Callable Interfaces**
- Define objects that can be called like functions.

### **Example**
```typescript
interface Greet {
  (name: string): string;
}

const sayHello: Greet = (name) => `Hello, ${name}`;
```

---

## **15. Overriding `this` in Functions**
- Use `bind`, `call`, or `apply` to override `this`.

### **Example**
```typescript
class Counter {
  count = 0;

  increment(this: Counter): void {
    this.count++;
  }
}

const counter = new Counter();
const increment = counter.increment.bind(counter);
increment();
```

---

## **16. Higher-Order Functions**
- Functions that take other functions as arguments or return functions.

### **Example**
```typescript
function withLogging(fn: (x: number) => number): (x: number) => number {
  return (x) => {
    console.log("Input:", x);
    const result = fn(x);
    console.log("Output:", result);
    return result;
  };
}

const square = (x: number) => x * x;
const loggedSquare = withLogging(square);

loggedSquare(5);
```

---

## **17. Parameter Destructuring**
- Destructure parameters directly in the function signature.

### **Example**
```typescript
function printUser({ name, age }: { name: string; age: number }): void {
  console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "Alice", age: 25 };
printUser(user);
```

---

## **18. Tips and Best Practices**
- **Enable `strict` mode**: This ensures better type safety for functions.
- **Use explicit return types**: Always specify return types for better readability and type checking.
- **Avoid `any`**: Use `unknown` or proper types instead of `any` for better type safety.
- **Leverage function overloading**: Use function overloading for functions with multiple input/output combinations.
- **Use arrow functions for callbacks**: Arrow functions automatically bind `this`, making them ideal for callbacks.
- **Use generic functions for reusability**: Write generic functions to handle multiple types without duplicating code.

---

## **19. Summary Table**

| Feature                     | Syntax Example                                                                 |
|-----------------------------|-------------------------------------------------------------------------------|
| **Basic Function**           | `function add(a: number, b: number): number { return a + b; }`               |
| **Arrow Function**           | `const multiply = (a: number, b: number): number => a * b;`                 |
| **Optional Parameter**       | `function greet(name: string, age?: number): string {}`                     |
| **Default Parameter**        | `function greet(name: string, age: number = 18): string {}`                 |
| **Rest Parameter**           | `function sum(...numbers: number[]): number {}`                             |
| **Function Overloading**     | `function combine(a: number, b: number): number;`                           |
| **Void Return Type**         | `function logMessage(message: string): void {}`                             |
| **Never Return Type**        | `function throwError(message: string): never {}`                            |
| **Generic Function**         | `function identity<T>(value: T): T {}`                                      |
| **Async Function**           | `async function fetchData(url: string): Promise<string> {}`                 |
| **Callable Interface**       | `interface Greet { (name: string): string; }`                               |
| **Destructured Parameters**  | `function printUser({ name, age }: { name: string; age: number }): void {}` |

