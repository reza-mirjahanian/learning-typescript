# **Generics in TypeScript**

Generics in TypeScript allow you to create reusable, type-safe components, functions, classes, and interfaces that work with a variety of types while maintaining type safety. Below is a complete reference covering all aspects of generics in TypeScript, with tips, tricks, and examples.

---

## **1. Generic Functions**
- Generics allow you to create functions that can work with any type.

### **Basic Syntax**
```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42); // T is number
const str = identity<string>("Hello"); // T is string
```
- **`<T>`**: Declares a generic type `T`.
- **`value: T`**: The parameter `value` is of type `T`.
- **`: T`**: The function returns a value of type `T`.

### **Type Inference**
- TypeScript can infer the generic type based on the argument.
```typescript
const inferred = identity("Hello"); // T is inferred as string
```

---

## **2. Generic Constraints**
- Use constraints to restrict the types that can be passed to a generic.

### **`extends` Constraint**
```typescript
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

getLength("Hello"); // Valid
getLength([1, 2, 3]); // Valid
// getLength(42); // Error: number does not have a 'length' property
```

---

## **3. Generic Interfaces**
- Define interfaces with generics for reusable type-safe structures.

### **Example**
```typescript
interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };
```

---

## **4. Generic Classes**
- Create classes that work with multiple types.

### **Example**
```typescript
class GenericBox<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const stringBox = new GenericBox<string>("Hello");
console.log(stringBox.getContent()); // "Hello"

const numberBox = new GenericBox<number>(42);
console.log(numberBox.getContent()); // 42
```

---

## **5. Generic Type Aliases**
- Use `type` to define reusable generic types.

### **Example**
```typescript
type Pair<T, U> = { first: T; second: U };

const pair: Pair<string, number> = { first: "Alice", second: 25 };
```

---

## **6. Generic Functions with Multiple Types**
- Use multiple type parameters for more complex scenarios.

### **Example**
```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Alice" }, { age: 25 });
console.log(merged); // { name: "Alice", age: 25 }
```

---

## **7. Default Generic Types**
- Provide default types for generics.

### **Example**
```typescript
interface Box<T = string> {
  content: T;
}

const defaultBox: Box = { content: "Default" }; // T is inferred as string
const numberBox: Box<number> = { content: 42 }; // T is explicitly number
```

---

## **8. Generic Constraints with `keyof`**
- Use `keyof` to restrict a generic type to the keys of another type.

### **Example**
```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
const name = getProperty(user, "name"); // Valid
// const invalid = getProperty(user, "address"); // Error: 'address' does not exist on type
```

---

## **9. Generic Utility Types**
TypeScript provides several built-in utility types that leverage generics.

### **`Partial`**
- Makes all properties of a type optional.
```typescript
type User = { name: string; age: number };
type PartialUser = Partial<User>;

const user: PartialUser = { name: "Alice" }; // Valid
```

### **`Required`**
- Makes all properties of a type required.
```typescript
type User = { name?: string; age?: number };
type RequiredUser = Required<User>;

const user: RequiredUser = { name: "Alice", age: 25 }; // Valid
```

### **`Readonly`**
- Makes all properties of a type readonly.
```typescript
type User = { name: string; age: number };
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { name: "Alice", age: 25 };
// user.age = 30; // Error: Cannot assign to 'age' because it is a read-only property
```

### **`Record`**
- Creates an object type with dynamic keys and values.
```typescript
type UserRoles = Record<string, string>;

const roles: UserRoles = { admin: "Alice", editor: "Bob" };
```

### **`Pick`**
- Select specific properties from a type.
```typescript
type User = { name: string; age: number; address: string };
type UserName = Pick<User, "name">;

const user: UserName = { name: "Alice" };
```

### **`Omit`**
- Exclude specific properties from a type.
```typescript
type User = { name: string; age: number; address: string };
type UserWithoutAddress = Omit<User, "address">;

const user: UserWithoutAddress = { name: "Alice", age: 25 };
```

---

## **10. Generic Constraints with Conditional Types**
- Use conditional types to create dynamic types based on conditions.

### **Example**
```typescript
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false
```

---

## **11. Generic Constraints with `infer`**
- Use `infer` to extract types within conditional types.

### **Example**
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Func = () => string;
type Result = ReturnType<Func>; // string
```

---

## **12. Variance in Generics**
- Covariance and contravariance determine how types relate to each other in a hierarchy.

### **Example**
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let animal: Animal;
let dog: Dog;

animal = dog; // Covariant: Dog can be assigned to Animal
// dog = animal; // Error: Animal cannot be assigned to Dog
```

---

## **13. Generic Constraints with Arrays**
- Use generics with arrays for type-safe operations.

### **Example**
```typescript
function mapArray<T, U>(arr: T[], callback: (item: T) => U): U[] {
  return arr.map(callback);
}

const numbers = [1, 2, 3];
const strings = mapArray(numbers, (num) => num.toString());
console.log(strings); // ["1", "2", "3"]
```

---

## **14. Generic Constraints with Tuples**
- Use generics to work with tuples.

### **Example**
```typescript
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const swapped = swap([1, "Hello"]);
console.log(swapped); // ["Hello", 1]
```

---

## **15. Generic Tips and Best Practices**
- **Use descriptive generic names**: Use meaningful names like `TItem`, `TKey`, or `TValue` instead of single letters like `T` when working with complex generics.
- **Avoid overusing generics**: Use generics only when necessary. If a specific type will suffice, prefer it for simplicity.
- **Combine generics with utility types**: Leverage built-in utility types like `Partial`, `Pick`, and `Record` with generics for reusable and flexible code.
- **Use constraints to enforce type safety**: Use `extends` to limit the types that can be passed to generics.
- **Leverage type inference**: Let TypeScript infer the generic type whenever possible to reduce verbosity.
- **Use default generic types**: Provide default types for generics to make your code more flexible and user-friendly.

---

## **16. Summary Table**

| Feature                     | Syntax Example                                                                 |
|-----------------------------|-------------------------------------------------------------------------------|
| **Basic Generic Function**   | `function identity<T>(value: T): T { return value; }`                        |
| **Generic Class**            | `class Box<T> { content: T; }`                                               |
| **Generic Interface**        | `interface Box<T> { content: T; }`                                           |
| **Multiple Generics**        | `function merge<T, U>(a: T, b: U): T & U {}`                                 |
| **Default Generic Type**     | `interface Box<T = string> { content: T; }`                                  |
| **Keyof Constraint**         | `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {}`        |
| **Utility Type: Partial**    | `type PartialUser = Partial<User>;`                                          |
| **Utility Type: Pick**       | `type UserName = Pick<User, "name">;`                                        |
| **Utility Type: Omit**       | `type UserWithoutAddress = Omit<User, "address">;`                           |
| **Conditional Type**         | `type IsString<T> = T extends string ? true : false;`                        |
| **Infer Keyword**            | `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;`    |
| **Tuple Swap**               | `function swap<T, U>(tuple: [T, U]): [U, T] {}`                              |

