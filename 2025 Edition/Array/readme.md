### **Arrays in TypeScript**

---

#### **1. Array Declaration**
- **Type Annotation Syntax**:
  ```typescript
  let numbers: number[] = [1, 2, 3];
  let names: Array<string> = ["Alice", "Bob"]; // Generic syntax
  ```
- **Empty Array Initialization**:
  ```typescript
  let values: number[] = []; // Explicitly typed to avoid `any[]`
  ```

---

#### **2. Union Type Arrays**
- **Mixed Types**:
  ```typescript
  let mixed: (string | number)[] = ["hello", 42];
  ```

---

#### **3. Readonly Arrays**
- **Immutable Arrays**:
  ```typescript
  const colors: readonly string[] = ["red", "green"];
  // OR
  const numbers: ReadonlyArray<number> = [1, 2, 3];
  ```
- **Restrictions**:
  ```typescript
  colors.push("blue"); // ❌ Error: `push` does not exist on `readonly` type
  ```

---

#### **4. Tuple Types**
- **Fixed-Length Typed Arrays**:
  ```typescript
  let user: [string, number, boolean] = ["Alice", 30, true];
  ```
- **Optional Tuple Elements** (TS 4.0+):
  ```typescript
  let optionalTuple: [string, number?] = ["Alice"]; // `number` is optional
  ```
- **Labeled Tuples** (TS 4.0+):
  ```typescript
  type Point = [x: number, y: number, z?: number];
  ```

---

#### **5. Array Methods (Type-Safe)**
- **Common Methods with Type Inference**:
  ```typescript
  const numbers = [1, 2, 3];
  numbers.map((n) => n * 2); // `n` inferred as `number`
  ```
- **Method Examples**:
  | **Method**       | **Example**                                 | **Return Type**   |
  |------------------|---------------------------------------------|-------------------|
  | `filter`         | `numbers.filter(n => n > 2)`               | `number[]`        |
  | `reduce`         | `numbers.reduce((acc, n) => acc + n, 0)`   | `number`          |
  | `find`           | `numbers.find(n => n === 2)`               | `number \| undefined` |
  | `some`           | `numbers.some(n => n % 2 === 0)`           | `boolean`         |

---

#### **6. Type Inference**
- **Contextual Typing**:
  ```typescript
  const users = ["Alice", "Bob"]; // Inferred as `string[]`
  ```
- **Complex Inference**:
  ```typescript
  const matrix = [[1, 2], [3, 4]]; // Inferred as `number[][]`
  ```

---

#### **7. Array Spread & Destructuring**
- **Spread Operator**:
  ```typescript
  const arr1 = [1, 2];
  const arr2 = [...arr1, 3]; // `number[]`
  ```
- **Destructuring with Types**:
  ```typescript
  const [first, second]: [string, number] = ["Alice", 30];
  ```

---

#### **8. Const Assertions**
- **Preserve Literal Types**:
  ```typescript
  const roles = ["admin", "user"] as const; // Type: readonly ["admin", "user"]
  ```
- **Immutable + Narrowed Type**:
  ```typescript
  roles.push("guest"); // ❌ Error: `push` not available on `readonly`
  ```

---

#### **9. Type Narrowing with Arrays**
- **Array Type Guards**:
  ```typescript
  function isStringArray(arr: unknown[]): arr is string[] {
    return arr.every((item) => typeof item === "string");
  }
  ```
- **Using `Array.isArray`**:
  ```typescript
  function logArray(arr: unknown) {
    if (Array.isArray(arr)) {
      console.log(arr.length); // `arr` narrowed to `any[]`
    }
  }
  ```

---

#### **10. Utility Types for Arrays**
| **Utility**          | **Description**                     | **Example**                          |
|-----------------------|-------------------------------------|--------------------------------------|
| `ReadonlyArray<T>`    | Immutable array                     | `ReadonlyArray<number>`              |
| `Partial<T[]>`        | All elements optional               | `Partial<string[]>`                  |
| `Pick<T[], K>`        | Subset of array properties          | Not typically used for arrays        |
| `Record<number, T>`   | Alternative to index signature      | `Record<number, string>` → `string[]` |

---

#### **11. Best Practices**
- **Prefer `readonly`** for arrays that shouldn’t mutate.
- **Use Tuples** for fixed-length, structured data (e.g., API responses).
- **Avoid `any[]`** – explicitly type empty arrays.
- **Leverage `as const`** for immutable arrays with literal types.

---

#### **12. Common Mistakes**
- **Inferring `any[]`**:
  ```typescript
  const empty = []; // ❌ Type `any[]`
  const emptySafe: number[] = []; // ✅
  ```
- **Modifying `readonly` Arrays**:
  ```typescript
  const users: readonly string[] = ["Alice"];
  users[0] = "Bob"; // ❌ Error: Index signature is readonly
  ```
- **Tuple Length Mismatches**:
  ```typescript
  const tuple: [string, number] = ["Alice"]; // ❌ Missing `number`
  ```

---

#### **13. Performance Considerations**
- **Arrays vs Tuples**:
  | **Feature**       | **Array**                          | **Tuple**                          |
  |--------------------|------------------------------------|------------------------------------|
  | Mutability         | Fully mutable                     | Partially immutable               |
  | Use Case           | Dynamic collections               | Fixed structures (e.g., coordinates) |
  | Type Safety        | Homogeneous types                 | Heterogeneous types               |