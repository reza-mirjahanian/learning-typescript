### **Object Types in TypeScript**

---

#### **1. Inline Object Types**
- **Basic Syntax**:
  ```typescript
  let user: { name: string; age: number } = { name: "Alice", age: 30 };
  ```
- **Optional Properties**:
  ```typescript
  let book: { title: string; author?: string };
  book = { title: "TS Guide" }; // `author` is optional
  ```

---

#### **2. Interfaces**
- **Define Reusable Object Shapes**:
  ```typescript
  interface Person {
    name: string;
    age: number;
  }
  ```
- **Extending Interfaces**:
  ```typescript
  interface Employee extends Person {
    id: number;
    department: string;
  }
  ```

---

#### **3. Readonly Properties**
- **Immutable Fields**:
  ```typescript
  interface Config {
    readonly apiKey: string;
    readonly endpoint: string;
  }
  ```
- **Compile-Time Enforcement**:
  ```typescript
  const config: Config = { apiKey: "abc123", endpoint: "/api" };
  config.apiKey = "newKey"; // ❌ Error: Cannot assign to 'apiKey'
  ```

---

#### **4. Index Signatures**
- **Dynamic Keys**:
  ```typescript
  interface Dictionary {
    [key: string]: number; // Keys are strings, values are numbers
  }
  
  const scores: Dictionary = { math: 90, science: 85 };
  ```
- **Restrictions**:
  - String/number keys only.
  - All properties must match the index signature type.

---

#### **5. Intersection Types**
- **Combine Types with `&`**:
  ```typescript
  type Name = { name: string };
  type Age = { age: number };
  type Person = Name & Age; // { name: string; age: number }
  ```

---

#### **6. Type Aliases for Objects**
- **Reusable Object Definitions**:
  ```typescript
  type Point = {
    x: number;
    y: number;
  };
  ```
- **vs Interfaces**:
  - Use `type` for unions, intersections, or complex shapes.
  - Use `interface` for declaration merging and OOP patterns.

---

#### **7. Nested Objects**
- **Complex Structures**:
  ```typescript
  interface User {
    id: string;
    profile: {
      name: string;
      email: string;
    };
  }
  ```

---

#### **8. Utility Types for Objects**
| **Utility**       | **Description**                          | **Example**                                  |
|--------------------|------------------------------------------|----------------------------------------------|
| `Partial<T>`       | Makes all properties optional            | `Partial<User>`                              |
| `Readonly<T>`      | Makes all properties readonly            | `Readonly<User>`                             |
| `Record<K, T>`     | Defines key-value pairs                  | `Record<"a" | "b", number>` → `{ a: number; b: number }` |
| `Pick<T, K>`       | Select subset of properties              | `Pick<User, "id" | "name">`                 |
| `Omit<T, K>`       | Exclude specified properties             | `Omit<User, "password">`                     |

---

#### **9. Object Type Guards**
- **Check Property Existence**:
  ```typescript
  interface Admin { permissions: string[] }
  interface Guest { isTemporary: boolean }
  
  function checkAccess(user: Admin | Guest) {
    if ("permissions" in user) {
      console.log(user.permissions); // Narrowed to `Admin`
    }
  }
  ```

---

#### **10. Excess Property Checks**
- **Strict Object Literals**:
  ```typescript
  interface Cat { name: string; age: number }
  const garfield: Cat = { name: "Garfield", age: 5, color: "orange" }; // ❌ Error
  ```
- **Workarounds**:
  ```typescript
  // Type assertion
  const garfield = { name: "Garfield", age: 5, color: "orange" } as Cat;
  
  // Intermediate variable
  const temp = { name: "Garfield", age: 5, color: "orange" };
  const garfield: Cat = temp;
  ```

---

#### **11. Mapped Types**
- **Transform Existing Types**:
  ```typescript
  type Optional<T> = { [P in keyof T]?: T[P] };
  type ReadonlyUser = { readonly [P in keyof User]: User[P] };
  ```

---

#### **12. Object Methods**
- **Function Properties**:
  ```typescript
  interface Calculator {
    add: (a: number, b: number) => number;
    subtract(a: number, b: number): number; // Alternative syntax
  }
  ```

---

#### **13. Best Practices**
- **Prefer `interface` for Public APIs** (supports declaration merging).
- **Use `type` for Unions/Intersections**.
- **Avoid Nested Optional Chains** (e.g., `user.profile?.address?.city`).
- **Leverage Utility Types** for common transformations.

---

#### **14. Common Mistakes**
- **Ignoring Excess Property Checks** in object literals.
- **Mixing `interface` and `type` Unnecessarily**.
- **Forgetting Optional Chaining** (`?.`) for nested properties.