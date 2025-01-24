### **Type Aliases vs Interfaces in TypeScript**

#### **1. Definitions**
- **Type Aliases**:
  - Create a new name for any type (primitives, unions, tuples, objects, etc.).
  ```typescript
  type Name = string;
  type Point = { x: number; y: number };
  ```
- **Interfaces**:
  - Define contracts for object shapes (only object types).
  ```typescript
  interface Point {
    x: number;
    y: number;
  }
  ```

---

#### **2. Key Differences**
| **Feature**              | **Type Aliases**                          | **Interfaces**                          |
|--------------------------|-------------------------------------------|-----------------------------------------|
| **Declaration Merging**  | ❌ Not supported                          | ✅ Merges multiple declarations          |
| **Extending**            | Uses `&` (intersection)                   | Uses `extends` keyword                  |
| **Implementing**         | Cannot be `implemented` by classes*       | Can be `implemented` by classes         |
| **Primitives/Unions**    | ✅ Supports unions, tuples, etc.          | ❌ Only object types                     |
| **Readability**          | Better for complex type compositions      | Better for hierarchical OOP structures  |

---

#### **3. Use Cases**
- **Use Type Aliases When**:
  - Defining unions, tuples, or mapped types:
    ```typescript
    type Status = "active" | "inactive";
    type Coordinates = [number, number];
    ```
  - Creating reusable utility types:
    ```typescript
    type Nullable<T> = T | null;
    ```
- **Use Interfaces When**:
  - Defining object shapes for classes or API contracts:
    ```typescript
    interface User {
      id: string;
      name: string;
    }
    ```
  - Leveraging declaration merging (e.g., extending third-party types):
    ```typescript
    interface Window {
      customProp: string;
    }
    ```

---

#### **4. Extending/Combining**
- **Interfaces**:
  ```typescript
  interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  ```
- **Type Aliases**:
  ```typescript
  type Animal = {
    name: string;
  };
  
  type Dog = Animal & { 
    breed: string;
  };
  ```

---

#### **5. Declaration Merging Example**
- **Interfaces** auto-merge:
  ```typescript
  interface User { name: string; }
  interface User { age: number; }
  
  // Result: { name: string; age: number; }
  ```
- **Type Aliases** throw errors for duplicates:
  ```typescript
  type User = { name: string; };
  type User = { age: number; }; // ❌ Error: Duplicate identifier
  ```

---

#### **6. Performance Considerations**
- **Interfaces**:
  - Better for incremental type-checking in large codebases (cached by name).
- **Type Aliases**:
  - Resolved once and cannot be modified later.

---

#### **7. Best Practices**
- **Prefer Interfaces** for:
  - Public API definitions (libraries, class contracts).
  - Object shapes requiring future extension.
- **Prefer Type Aliases** for:
  - Union/intersection types, tuples, or mapped types.
  - Simplifying complex type expressions.

---

#### **8. Common Mistakes**
- **Using `type` for OOP hierarchies**:
  ```typescript
  type Animal = { name: string };
  class Dog implements Animal { ... } // Works, but `interface` is clearer.
  ```
- **Overusing unions in interfaces** (use `type` instead):
  ```typescript
  // ❌ Avoid:
  interface Result { data: string | number; }
  // ✅ Better:
  type Result = { data: string | number; };
  ```