### **Type Aliases vs Interfaces in TypeScript**

---

#### **1. Definitions**
- **Type Aliases**  
  Created with `type` keyword. Define a name for any type (primitives, unions, objects, etc.):  
  ```typescript
  type Age = number;
  type User = { id: string; name: string };
  ```

- **Interfaces**  
  Created with `interface` keyword. Define object shapes and enforce structure:  
  ```typescript
  interface User { 
    id: string; 
    name: string; 
  }
  ```

---

#### **2. Key Differences**

| **Feature**               | **Type Aliases**                                                                 | **Interfaces**                                                                 |
|---------------------------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| **Scope**                 | Can represent **any type** (primitives, unions, tuples, etc.).                  | Only describe **object shapes**.                                              |
| **Declaration Merging**   | ❌ Cannot be merged/redeclared.                                                  | ✅ Automatically merged if declared multiple times.                           |
| **Extensibility**         | Use `&` for intersection types: `type Admin = User & { role: string }`          | Use `extends`: `interface Admin extends User { role: string }`                |
| **Union/Intersection**    | ✅ Can define unions (`type ID = string | number`) and intersections.               | ❌ Cannot directly represent unions.                                           |
| **Mapped/Conditional**    | ✅ Support mapped/conditional types: `type Optional<T> = { [P in keyof T]?: T[P] }` | ❌ Cannot use mapped/conditional types.                                        |
| **Performance**           | May not cache as efficiently for large object types.                            | Better optimized for object shapes in large codebases.                        |

---

#### **3. When to Use Which**

| **Use Case**                                      | **Type Alias**                                  | **Interface**                                  |
|---------------------------------------------------|-------------------------------------------------|------------------------------------------------|
| Defining object shapes                            | ✅ (but prefer interfaces for OOP)             | ✅ **Preferred**                                |
| Union/intersection types                          | ✅ **Required**                                 | ❌                                              |
| Function types                                    | ✅ `type Handler = (data: string) => void`      | ✅ `interface Handler { (data: string): void }`|
| Tuples                                            | ✅ `type Pair = [string, number]`               | ❌                                              |
| Declaration merging (e.g., extending libraries)   | ❌                                              | ✅ **Required**                                |
| Extending/combining existing types                | ✅ (via `&`)                                   | ✅ (via `extends`)                             |

---

#### **4. Extending/Combining**
- **Type Alias Example** (Intersection):  
  ```typescript
  type Person = { name: string };
  type Employee = Person & { id: number };
  ```
- **Interface Example** (Inheritance):  
  ```typescript
  interface Person { name: string }
  interface Employee extends Person { id: number }
  ```

---

#### **5. Declaration Merging (Interfaces Only)**
```typescript
interface User { name: string }
interface User { age: number } // Merges into { name: string; age: number }
```

---

#### **6. Class Implementation**
Both work with `implements`, but **interfaces are more idiomatic** for OOP:  
```typescript
// With interface
interface Serializable { serialize(): string }
class Document implements Serializable { /* ... */ }

// With type alias
type Serializable = { serialize(): string };
class Report implements Serializable { /* ... */ }
```

---

#### **7. Performance Considerations**
- Prefer **interfaces** for large object hierarchies (better compiler optimizations).  
- Use **type aliases** for complex types (unions, mapped types).  

---

#### **8. Best Practices**
1. **Default to interfaces** for object shapes (aligns with OOP patterns).  
2. Use **type aliases** for:  
   - Unions (`type Status = "active" | "inactive"`)  
   - Mapped/conditional types  
   - Tuples or function types  
3. Avoid mixing styles in a project for consistency.  
4. **Never use type aliases** for primitive renaming (e.g., `type Email = string` adds no value).  

---

#### **9. Examples**
- **Union with Type Alias**:  
  ```typescript
  type Result = { success: true; data: string } | { success: false; error: string };
  ```
- **Mapped Type with Alias**:  
  ```typescript
  type ReadonlyUser = Readonly<User>;
  ```
- **Interface Merging**:  
  ```typescript
  interface Window { myLib: any } // Augment global Window type
  ```