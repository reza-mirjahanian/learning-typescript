### **Conditional Types in TypeScript**

---

#### **1. Basic Syntax**
- **Definition**: `T extends U ? X : Y`  
  - Evaluates to `X` if `T` is assignable to `U`; otherwise, `Y`.
  ```typescript
  type IsString<T> = T extends string ? "yes" : "no";
  type A = IsString<"hello">; // "yes"  
  type B = IsString<42>;      // "no"
  ```

---

#### **2. Infer Keyword**
- **Extract Subtypes** within conditions:
  ```typescript
  type UnpackArray<T> = T extends (infer U)[] ? U : T;
  type Num = UnpackArray<number[]>;   // `number`  
  type Str = UnpackArray<string>;     // `string`
  ```
- **Infer Function Return Types**:
  ```typescript
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
  type FnReturn = ReturnType<() => number>; // `number`
  ```

---

#### **3. Distributive Conditional Types**
- **Distribute Over Union Types**:
  ```typescript
  type ToArray<T> = T extends any ? T[] : never;
  type NumOrStrArray = ToArray<number | string>; // `number[] | string[]`
  ```
- **Disable Distribution** with tuples:
  ```typescript
  type NonDistributive<T> = [T] extends [any] ? T[] : never;
  type Arr = NonDistributive<number | string>; // `(number | string)[]`
  ```

---

#### **4. Built-in Utility Types**
| **Utility**       | **Description**                          | **Implementation**                              |
|--------------------|------------------------------------------|-------------------------------------------------|
| `Exclude<T, U>`    | Exclude types from `T` assignable to `U` | `type Exclude<T, U> = T extends U ? never : T;` |
| `Extract<T, U>`    | Extract types from `T` assignable to `U` | `type Extract<T, U> = T extends U ? T : never;` |
| `NonNullable<T>`   | Exclude `null` and `undefined`           | `type NonNullable<T> = T extends null \| undefined ? never : T;` |
| `Parameters<T>`    | Extract function parameters as a tuple   | `type Parameters<T> = T extends (...args: infer P) => any ? P : never;` |

---

#### **5. Common Use Cases**
- **Type Guards**:
  ```typescript
  type IsNumber<T> = T extends number ? true : false;
  function logIfNumber<T>(value: T): IsNumber<T> extends true ? void : never {
    if (typeof value === "number") console.log(value);
    return undefined!; // Force return type
  }
  ```
- **Flatten Nested Types**:
  ```typescript
  type Flatten<T> = T extends (infer U)[] ? Flatten<U> : T;
  type DeepArray = Flatten<number[][][]>; // `number`
  ```
- **Handle Function Overloads**:
  ```typescript
  type OverloadReturn<T> = T extends { (...args: any): infer R; (...args: any): any } ? R : never;
  ```

---

#### **6. Advanced Patterns**
- **Recursive Conditional Types** (TS 4.1+):
  ```typescript
  type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T;
  type Nested = DeepReadonly<{ a: { b: number } }>; // `{ readonly a: { readonly b: number } }`
  ```
- **Template Literal Types** (TS 4.1+):
  ```typescript
  type GetEvent<T> = T extends `on${infer E}` ? E : never;
  type Event = GetEvent<"onClick">; // "Click"
  ```

---

#### **7. Pitfalls**
- **Unexpected Distribution**:
  ```typescript
  type T0<T> = T extends any ? T[] : never;
  type Result = T0<string | number>; // `string[] | number[]` (not `(string | number)[]`)
  ```
- **Circular References**:
  ```typescript
  type InfiniteLoop<T> = T extends any ? InfiniteLoop<T> : never; // ❌ Error
  ```

---

#### **8. Best Practices**
- **Use Constraints** to narrow types early:
  ```typescript
  type SafeUnpack<T extends any[]> = T extends (infer U)[] ? U : never;
  ```
- **Avoid Overcomplication** – prefer simpler types when possible.
- **Test Edge Cases** with union, `never`, and `any` inputs.