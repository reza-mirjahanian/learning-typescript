# **The Basics of TypeScript**

TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. Below is a comprehensive guide to the basics of TypeScript, covering all essential concepts, tips, and tricks.

---

## **1. Setting Up TypeScript**
- Install TypeScript globally:
  ```bash
  npm install -g typescript
  ```
- Initialize a TypeScript project:
  ```bash
  tsc --init
  ```
  This creates a `tsconfig.json` file to configure TypeScript.
- Compile a `.ts` file to `.js`:
  ```bash
  tsc filename.ts
  ```

---

## **2. Type Annotations**
TypeScript allows you to explicitly specify types for variables, function parameters, and return values.

### **Variable Annotations**
```typescript
let isDone: boolean = true;
let count: number = 42;
let name: string = "TypeScript";
```

### **Function Annotations**
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

### **Array Annotations**
```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

### **Object Annotations**
```typescript
let person: { name: string; age: number } = {
  name: "John",
  age: 30,
};
```

---

## **3. Type Inference**
TypeScript can infer types automatically if no explicit type is provided.
```typescript
let isDone = true; // Inferred as boolean
let count = 42;    // Inferred as number
```

---

## **4. Union and Intersection Types**
### **Union Types**
A variable can have multiple possible types.
```typescript
let id: number | string;
id = 101;
id = "ABC";
```

### **Intersection Types**
Combine multiple types into one.
```typescript
type Person = { name: string };
type Employee = { id: number };

let employee: Person & Employee = {
  name: "Alice",
  id: 123,
};
```

---

## **5. Interfaces**
Interfaces define the structure of an object or a class.

### **Basic Interface**
```typescript
interface User {
  name: string;
  age: number;
}

let user: User = {
  name: "John",
  age: 25,
};
```

### **Optional Properties**
```typescript
interface User {
  name: string;
  age?: number; // Optional
}

let user: User = { name: "Alice" };
```

### **Readonly Properties**
```typescript
interface User {
  readonly id: number;
  name: string;
}

let user: User = { id: 1, name: "John" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
```

---

## **6. Classes**
TypeScript extends JavaScript classes with strong typing.

### **Basic Class**
```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let person = new Person("Alice");
person.greet();
```

### **Access Modifiers**
- `public`: Default, accessible anywhere.
- `private`: Accessible only within the class.
- `protected`: Accessible within the class and subclasses.

```typescript
class Employee {
  private id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
```

### **Readonly Modifier**
```typescript
class Employee {
  readonly id: number;

  constructor(id: number) {
    this.id = id;
  }
}
```

---

## **7. Enums**
Enums allow defining a set of named constants.

### **Numeric Enums**
```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
```

### **String Enums**
```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

---

## **8. Generics**
Generics provide a way to create reusable components.

### **Generic Function**
```typescript
function identity<T>(value: T): T {
  return value;
}

let result = identity<number>(42);
```

### **Generic Class**
```typescript
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }
}

let box = new Box<string>("Hello");
```

---

## **9. Type Aliases**
Type aliases create custom types.

```typescript
type Point = { x: number; y: number };

let point: Point = { x: 10, y: 20 };
```

---

## **10. Type Assertion**
Type assertions tell TypeScript the specific type of a value.

### **Syntax**
```typescript
let someValue: unknown = "Hello, TypeScript";
let strLength: number = (someValue as string).length;
```

---

## **11. Utility Types**
TypeScript provides built-in utility types to manipulate types.

### **Partial**
Makes all properties optional.
```typescript
interface User {
  name: string;
  age: number;
}

let partialUser: Partial<User> = { name: "Alice" };
```

### **Readonly**
Makes all properties readonly.
```typescript
let readonlyUser: Readonly<User> = { name: "Alice", age: 25 };
// readonlyUser.age = 30; // Error
```

### **Pick**
Select specific properties from a type.
```typescript
type UserName = Pick<User, "name">;
```

### **Omit**
Exclude specific properties from a type.
```typescript
type UserWithoutAge = Omit<User, "age">;
```

---

## **12. Advanced Types**
### **Mapped Types**
Transform properties in a type.
```typescript
type ReadonlyUser = {
  [K in keyof User]: Readonly<User[K]>;
};
```

### **Conditional Types**
```typescript
type IsString<T> = T extends string ? true : false;

type Test = IsString<string>; // true
type Test2 = IsString<number>; // false
```

---

## **13. Modules**
TypeScript supports ES modules for code organization.

### **Export**
```typescript
export const name = "TypeScript";
export function greet() {
  console.log("Hello");
}
```

### **Import**
```typescript
import { name, greet } from "./module";
```

---

## **14. Decorators**
Decorators are special annotations for classes and members (experimental feature).

### **Class Decorator**
```typescript
function Logger(constructor: Function) {
  console.log("Logging...");
}

@Logger
class Person {
  name: string = "John";
}
```

---

## **15. Non-Nullable Types**
Exclude `null` and `undefined` from a type.
```typescript
type NonNullableType = NonNullable<string | null | undefined>;
```

---

## **16. Nullish Coalescing and Optional Chaining**
### **Nullish Coalescing**
```typescript
let value = null ?? "Default Value"; // "Default Value"
```

### **Optional Chaining**
```typescript
let user = { name: "Alice", address: { city: "NY" } };
console.log(user?.address?.city); // "NY"
```

---

## **17. Configuration with `tsconfig.json`**
Key options in `tsconfig.json`:
- **`"target"`**: Specify the JavaScript version.
  ```json
  "target": "ES6"
  ```
- **`"module"`**: Specify the module system.
  ```json
  "module": "CommonJS"
  ```
- **`"strict"`**: Enable strict type checking.
  ```json
  "strict": true
  ```
- **`"outDir"`**: Specify the output directory for compiled JavaScript files.
  ```json
  "outDir": "./dist"
  ```

---

## **18. Tips and Tricks**
- **Use `strict` mode**: Always enable strict mode in `tsconfig.json` for better type safety.
- **Leverage VS Code**: TypeScript integrates seamlessly with Visual Studio Code, providing autocomplete and error checking.
- **Avoid `any`**: Use `unknown` or proper types instead of `any` for better type safety.
- **Use `ts-node` for development**: Run TypeScript files directly without compiling.
  ```bash
  npx ts-node filename.ts
  ```
- **Use `eslint` with TypeScript**: Enforce coding standards and catch potential issues.

