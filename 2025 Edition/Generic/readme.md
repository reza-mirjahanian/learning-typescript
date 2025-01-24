### **Generics in TypeScript**

---

#### **1. Basic Generic Functions**
- **Reusable Type Logic**:
  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  ```
- **Explicit Type Arguments** (rarely needed):
  ```typescript
  identity<number>(42); // Explicitly set `T` to `number`
  ```

---

#### **2. Generic Interfaces**
- **Flexible Object Shapes**:
  ```typescript
  interface KeyValuePair<K, V> {
    key: K;
    value: V;
  }
  
  const pair: KeyValuePair<string, number> = { key: "age", value: 30 };
  ```

---

#### **3. Generic Classes**
- **Type-Safe Class Properties**:
  ```typescript
  class Box<T> {
    private content: T;
    
    constructor(value: T) {
      this.content = value;
    }
    
    getValue(): T {
      return this.content;
    }
  }
  
  const stringBox = new Box<string>("Hello");
  ```

---

#### **4. Generic Constraints**
- **Limit Types with `extends`**:
  ```typescript
  interface Lengthy {
    length: number;
  }
  
  function logLength<T extends Lengthy>(arg: T): void {
    console.log(arg.length);
  }
  
  logLength("hello"); // Works (string has `length`)
  logLength([1, 2]);  // Works (array has `length`)
  ```

---

#### **5. Default Generic Types**
- **Fallback Type Values**:
  ```typescript
  interface ApiResponse<T = string> {
    data: T;
    status: number;
  }
  
  const res: ApiResponse = { data: "success", status: 200 }; // `T` defaults to `string`
  ```

---

#### **6. Keyof & Typeof with Generics**
- **Type-Safe Property Access**:
  ```typescript
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const user = { name: "Alice", age: 30 };
  getProperty(user, "name"); // Returns `string`
  ```

---

#### **7. Mapped Types with Generics**
- **Transform Existing Types**:
  ```typescript
  type Optional<T> = { [P in keyof T]?: T[P] };
  type ReadonlyUser = Readonly<{ name: string; age: number }>;
  ```

---

#### **8. Utility Types Using Generics**
| **Utility**       | **Description**                          | **Example**                                  |
|--------------------|------------------------------------------|----------------------------------------------|
| `Partial<T>`       | All properties optional                  | `Partial<{ id: number }>` → `{ id?: number }`|
| `Pick<T, K>`       | Select subset of properties              | `Pick<User, "name">`                         |
| `Omit<T, K>`       | Exclude specified properties             | `Omit<User, "password">`                     |
| `Record<K, T>`     | Define key-value pairs                   | `Record<"a" | "b", number>` → `{ a: number; b: number }` |
| `ReturnType<T>`    | Extract return type of a function        | `ReturnType<typeof fetchData>`               |

---

#### **9. Conditional Types**
- **Type-Level Logic**:
  ```typescript
  type IsString<T> = T extends string ? "Yes" : "No";
  type A = IsString<"hello">; // "Yes"
  type B = IsString<42>;      // "No"
  ```
- **Infer Keyword**:
  ```typescript
  type Unbox<T> = T extends Array<infer U> ? U : T;
  type NumArray = Unbox<number[]>; // `number`
  ```

---

#### **10. Async Generics**
- **Typed Promises**:
  ```typescript
  async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url);
    return res.json() as T;
  }
  
  interface UserData { id: number; name: string }
  const data = await fetchData<UserData>("/api/user");
  ```

---

#### **11. Best Practices**
- **Use Descriptive Names** for complex generics (e.g., `TData` instead of `T`).
- **Avoid Overusing Generics** – prefer simpler types when possible.
- **Leverage Constraints** to enforce type requirements.
- **Combine with Utility Types** for advanced transformations.

---

#### **12. Common Mistakes**
- **Unconstrained Generics** leading to runtime errors:
  ```typescript
  function badExample<T>(arg: T): void {
    console.log(arg.length); // ❌ `T` might not have `length`
  }
  ```
- **Excessive Nesting** of generic types:
  ```typescript
  type NestedHell<T> = Promise<Array<Partial<Record<keyof T, string>>>>; // 🚫 Avoid
  ```
- **Ignoring Inference** by specifying redundant types:
  ```typescript
  const arr = new Array<string>(); // ✅ Prefer `const arr: string[] = []`
  ```

---

#### **13. Advanced Patterns**
- **Generic Type Guards**:
  ```typescript
  function isArrayOf<T>(arr: unknown, check: (item: unknown) => item is T): arr is T[] {
    return Array.isArray(arr) && arr.every(check);
  }
  ```
- **Curried Generic Functions**:
  ```typescript
  const createPair = <K>() => <V>(key: K, value: V): [K, V] => [key, value];
  const pairWithNumberKey = createPair<number>();
  const pair = pairWithNumberKey("value"); // [number, string]
  ```