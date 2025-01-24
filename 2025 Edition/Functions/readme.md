### **Functions in TypeScript**

---

#### **1. Function Declarations**
- **Explicit Parameter/Return Types**:
  ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  ```
- **Inferred Return Types** (avoid for complex logic):
  ```typescript
  function greet(name: string) { // Return type inferred as `string`
    return `Hello, ${name}`;
  }
  ```

---

#### **2. Function Expressions**
- **Arrow Functions with Types**:
  ```typescript
  const multiply = (a: number, b: number): number => a * b;
  ```
- **Type Annotations for Variables**:
  ```typescript
  type MathOp = (a: number, b: number) => number;
  const divide: MathOp = (a, b) => a / b;
  ```

---

#### **3. Optional & Default Parameters**
- **Optional Parameters** (use `?`):
  ```typescript
  function logMessage(message: string, prefix?: string): void {
    console.log(prefix ? `${prefix}: ${message}` : message);
  }
  ```
- **Default Parameters**:
  ```typescript
  function createUser(name: string, isAdmin: boolean = false) { ... }
  ```

---

#### **4. Rest Parameters**
- **Typed Arrays for Variadic Functions**:
  ```typescript
  function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  ```

---

#### **5. Function Overloading**
- **Multiple Signatures + Single Implementation**:
  ```typescript
  // Overloads
  function reverse(value: string): string;
  function reverse<T>(value: T[]): T[];
  
  // Implementation
  function reverse(value: string | any[]): string | any[] {
    return typeof value === "string" 
      ? value.split("").reverse().join("")
      : value.slice().reverse();
  }
  ```

---

#### **6. `this` Parameter Typing**
- **Explicit `this` Context**:
  ```typescript
  interface Card {
    suit: string;
    show: (this: Card) => void;
  }
  
  const card: Card = {
    suit: "Hearts",
    show: function() { console.log(this.suit); } // `this` typed as `Card`
  };
  ```

---

#### **7. Generics in Functions**
- **Reusable Type Logic**:
  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  ```
- **Constrained Generics**:
  ```typescript
  function longest<T extends { length: number }>(a: T, b: T): T {
    return a.length > b.length ? a : b;
  }
  ```

---

#### **8. Void vs Never Return Types**
| **Type** | **Description**                     | **Example**                          |
|----------|-------------------------------------|--------------------------------------|
| `void`   | No return value                     | `function log(): void { ... }`       |
| `never`  | Function never completes execution  | `function error(msg: string): never { throw msg; }` |

---

#### **9. Async Functions**
- **Promise Return Types**:
  ```typescript
  async function fetchData(url: string): Promise<Response> {
    return await fetch(url);
  }
  ```

---

#### **10. Function Type Aliases**
- **Reusable Signatures**:
  ```typescript
  type StringTransformer = (input: string) => string;
  
  const toUpper: StringTransformer = (s) => s.toUpperCase();
  ```

---

#### **11. Parameter Destructuring**
- **Typed Object Parameters**:
  ```typescript
  function draw({ x, y, color }: { x: number; y: number; color: string }): void {
    console.log(`Drawing at (${x}, ${y}) with ${color}`);
  }
  ```

---

#### **12. Callback Functions**
- **Typing Event Handlers**:
  ```typescript
  function onClick(callback: (event: MouseEvent) => void): void {
    document.addEventListener("click", callback);
  }
  ```

---

#### **13. Best Practices**
- **Use Interfaces for Complex Signatures**:
  ```typescript
  interface SearchFunc {
    (source: string, query: string): boolean;
  }
  ```
- **Avoid `Function` Type** (use specific signatures).
- **Order Overloads** from most specific → least specific.
- **Prefer Arrow Functions** for preserving `this` context in classes.

---

#### **14. Common Mistakes**
- **Optional Parameters Before Required Ones**:
  ```typescript
  // ❌ Bad
  function greet(prefix?: string, name: string) { ... }
  
  // ✅ Good
  function greet(name: string, prefix?: string) { ... }
  ```
- **Ignoring Return Types** in recursive/complex functions.
- **Overusing `any` in Generics** (constrain instead).