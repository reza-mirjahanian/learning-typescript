# **Complete Reference Guide: Conditional Types in TypeScript**

Conditional types in TypeScript allow you to express logic and create more dynamic and flexible types. They are written using the ternary operator-like syntax (`T extends U ? X : Y`) and are a powerful tool for type manipulation.

---

## **Syntax**
```typescript
T extends U ? X : Y
```
- `T`: The type to check.
- `U`: The condition type to compare against.
- `X`: The type returned if the condition (`T extends U`) is true.
- `Y`: The type returned if the condition is false.

---

## **Key Concepts**

### 1. **Basic Usage**
Conditional types work similarly to an `if-else` statement for types.
```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<string>; // true
type B = IsString<number>; // false
```

---

### 2. **Distributive Conditional Types**
When a conditional type is applied to a union, it is **distributed** across each member of the union. This is a key behavior of conditional types.

#### Example:
```typescript
type Example<T> = T extends string ? "string" : "not string";

type Result = Example<string | number>; // "string" | "not string"
```

- The union `string | number` is distributed:
  - For `string`, the result is `"string"`.
  - For `number`, the result is `"not string"`.
- Final result: `"string" | "not string"`.

#### To Prevent Distribution:
Wrap the type in a tuple or object to stop distribution.
```typescript
type Example<T> = [T] extends [string] ? "string" : "not string";

type Result = Example<string | number>; // "not string"
```

---

### 3. **Inferring Types with `infer`**
The `infer` keyword allows you to extract a type from another type during conditional type evaluation.

#### Example: Extracting Return Type
```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => number;
type Result = ReturnType<Fn>; // number
```

- `infer R` extracts the return type (`R`) from the function type `T`.

#### Example: Extracting Array Element Type
```typescript
type ElementType<T> = T extends (infer U)[] ? U : never;

type Result = ElementType<number[]>; // number
```

---

### 4. **Type Filtering**
Conditional types can be used to filter types from a union.

#### Example: Extracting Specific Types
```typescript
type ExtractString<T> = T extends string ? T : never;

type Result = ExtractString<string | number | boolean>; // string
```

#### Example: Excluding Specific Types
```typescript
type ExcludeString<T> = T extends string ? never : T;

type Result = ExcludeString<string | number | boolean>; // number | boolean
```

---

### 5. **Built-in Utility Types Based on Conditional Types**
TypeScript provides several utility types that are built using conditional types. Here are the most common ones:

| **Utility Type** | **Description**                                                                 | **Example**                                                                                   |
|-------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `Exclude<T, U>`  | Excludes from `T` those types that are assignable to `U`.                      | `Exclude<string | number, string>` → `number`                                                |
| `Extract<T, U>`  | Extracts from `T` those types that are assignable to `U`.                      | `Extract<string | number, string>` → `string`                                                |
| `NonNullable<T>` | Removes `null` and `undefined` from `T`.                                       | `NonNullable<string | null | undefined>` → `string`                                         |
| `ReturnType<T>`  | Extracts the return type of a function type `T`.                               | `ReturnType<() => number>` → `number`                                                        |
| `InstanceType<T>`| Extracts the instance type of a class or constructor function type `T`.        | `InstanceType<typeof MyClass>` → Instance type of `MyClass`                                  |

---

### 6. **Advanced Examples**

#### **Flattening Nested Arrays**
```typescript
type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;

type Result = Flatten<number[][][]>; // number
```
- Recursively unwraps nested arrays until the base type is reached.

#### **Deep Readonly**
```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

type Example = {
  name: string;
  details: {
    age: number;
    hobbies: string[];
  };
};

type Result = DeepReadonly<Example>;
/*
Result:
{
  readonly name: string;
  readonly details: {
    readonly age: number;
    readonly hobbies: readonly string[];
  };
}
*/
```

#### **Conditional Type with Mapped Types**
You can combine conditional types with mapped types for complex transformations.
```typescript
type NullableFields<T> = {
  [K in keyof T]: T[K] extends string ? T[K] | null : T[K];
};

type Example = {
  name: string;
  age: number;
};

type Result = NullableFields<Example>;
/*
Result:
{
  name: string | null;
  age: number;
}
*/
```

---

### 7. **Best Practices**

- **Use `infer` for Dynamic Type Extraction**: Use `infer` when you need to extract or infer types dynamically from a given type.
- **Prevent Distribution When Needed**: Wrap types in tuples or objects to prevent unintended distribution.
- **Combine with Utility Types**: Leverage built-in utility types like `Exclude`, `Extract`, and `ReturnType` for common operations.
- **Test Complex Types**: Use tools like TypeScript's `tsc` or IDEs to validate complex conditional types.

---

### 8. **Common Pitfalls**

#### **Unintended Distribution**
```typescript
type Example<T> = T extends string ? "string" : "not string";

type Result = Example<string | number>; // "string" | "not string"
```
- **Solution**: Wrap the type in a tuple or object to prevent distribution.
```typescript
type Example<T> = [T] extends [string] ? "string" : "not string";

type Result = Example<string | number>; // "not string"
```

#### **Overusing Conditional Types**
- Conditional types can become overly complex and hard to debug. Refactor when necessary.

---

### 9. **Real-World Use Cases**

#### **Type-Safe API Response Handling**
```typescript
type ApiResponse<T> = T extends { success: true } ? T : never;

type SuccessResponse = { success: true; data: string };
type ErrorResponse = { success: false; error: string };

type Result = ApiResponse<SuccessResponse | ErrorResponse>; // { success: true; data: string }
```

#### **Type Guards**
```typescript
type IsArray<T> = T extends any[] ? true : false;

function isArray<T>(value: T): IsArray<T> {
  return Array.isArray(value) as IsArray<T>;
}

const result = isArray([1, 2, 3]); // true
```

---

### **Summary Table**

| **Feature**                     | **Description**                                                                                  | **Example**                                                                                   |
|----------------------------------|--------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Basic Conditional Types          | `T extends U ? X : Y` syntax for conditional logic.                                              | `IsString<T>`                                                                                 |
| Distributive Conditional Types   | Automatically distributes over unions.                                                          | `Example<string | number>` → `"string" | "not string"`                                        |
| Preventing Distribution          | Wrap in tuples or objects to stop distribution.                                                 | `[T] extends [string]`                                                                        |
| `infer` for Type Extraction      | Extracts types dynamically.                                                                     | `ReturnType<T>`                                                                               |
| Built-in Utility Types           | Predefined types like `Exclude`, `Extract`, `NonNullable`, etc.                                 | `Exclude<string | number, string>` → `number`                                                |
| Combining with Mapped Types      | Combine conditional and mapped types for advanced transformations.                              | `NullableFields<T>`                                                                           |
| Recursive Conditional Types      | Handle nested structures like arrays or objects.                                                | `Flatten<T>`                                                                                 |

