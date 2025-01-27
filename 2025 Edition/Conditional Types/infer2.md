### **`infer` Keyword in TypeScript**

---

#### **1. Basic Usage**
- **Purpose**: Declares a type variable to be **inferred** within a conditional type.
- **Syntax**: `T extends ... ? ... infer U ... : ...`
  ```typescript
  type UnwrapArray<T> = T extends (infer U)[] ? U : T;
  type Num = UnwrapArray<number[]>; // `number`
  ```

---

#### **2. Common Use Cases**
- **Extract Function Return Type**:
  ```typescript
  type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
  type FnReturn = ReturnType<() => number>; // `number`
  ```
- **Extract Promise Resolution Type**:
  ```typescript
  type Awaited<T> = T extends Promise<infer U> ? U : T;
  type Resolved = Awaited<Promise<string>>; // `string`
  ```
- **Extract Array Element Type**:
  ```typescript
  type ElementType<T> = T extends (infer U)[] ? U : T;
  type Str = ElementType<string[]>; // `string`
  ```

---

#### **3. Multiple `infer` Declarations**
- **Infer Multiple Types**:
  ```typescript
  type FirstArg<T> = T extends (arg: infer A, ...rest: any[]) => any ? A : never;
  type Arg = FirstArg<(x: number, y: string) => void>; // `number`
  ```

---

#### **4. Nested Inference**
- **Infer Within Nested Types**:
  ```typescript
  type UnboxNested<T> = 
    T extends Promise<infer U> ? UnboxNested<U> : 
    T extends Array<infer V> ? UnboxNested<V> : 
    T;
  
  type Result = UnboxNested<Promise<number[][]>>; // `number`
  ```

---

#### **5. Discriminated Unions**
- **Extract Specific Union Members**:
  ```typescript
  type ExtractString<T> = T extends { type: infer U } ? (U extends "str" ? T : never) : never;
  
  type Event = { type: "str"; data: string } | { type: "num"; data: number };
  type StringEvent = ExtractString<Event>; // `{ type: "str"; data: string }`
  ```

---

#### **6. Built-in Utility Types Using `infer`**
| **Utility**       | **Description**                          | **Example**                                  |
|--------------------|------------------------------------------|----------------------------------------------|
| `Parameters<T>`    | Extract function parameters as a tuple   | `Parameters<(a: number) => void>` → `[number]` |
| `ConstructorParameters<T>` | Extract class constructor parameters | `ConstructorParameters<Error>` → `[string]` |
| `InstanceType<T>`  | Extract instance type of a class         | `InstanceType<typeof Error>` → `Error`       |

---

#### **7. Advanced Patterns**
- **Recursive Inference** (TS 4.1+):
  ```typescript
  type DeepReadonly<T> = T extends object ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T;
  type Nested = DeepReadonly<{ a: { b: number } }>; // `{ readonly a: { readonly b: number } }`
  ```
- **Template Literal Inference** (TS 4.1+):
  ```typescript
  type ExtractAction<T> = T extends `user/${infer Action}` ? Action : never;
  type Action = ExtractAction<"user/login">; // "login"
  ```

---

#### **8. Pitfalls**
- **Order Matters**: Place `infer` in the correct position within the condition.
  ```typescript
  // ❌ Fails to infer U correctly
  type BadInfer<T> = T extends Array<number> ? (infer U)[] : never;
  
  // ✅ Correct
  type GoodInfer<T> = T extends (infer U)[] ? U : never;
  ```
- **Ambiguous Inference**:
  ```typescript
  type Ambiguous<T> = T extends { a: infer U, b: infer U } ? U : never;
  type T = Ambiguous<{ a: string, b: number }>; // `string | number`
  ```



---

#### **9. Best Practices**
- **Use Constraints** to narrow inference scope:
  ```typescript
  type SafeInfer<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
  ```
- **Avoid Overuse**: Prefer simpler type utilities when possible.
- **Test Edge Cases** with unions, `never`, and `any`.