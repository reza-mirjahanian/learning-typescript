### **Narrowing in TypeScript**

#### **1. Type Guards**
- **`typeof` Checks**:
  ```typescript
  function padLeft(value: string | number) {
    if (typeof value === "number") {
      return value.toFixed(2); // `value` is narrowed to `number`
    }
    return value.padStart(4); // `value` is narrowed to `string`
  }
  ```
- **Common `typeof` Results**:
  | Type      | `typeof` Result |
  |-----------|-----------------|
  | `string`  | `"string"`      |
  | `number`  | `"number"`      |
  | `boolean` | `"boolean"`     |
  | `object`  | `"object"`      |

- **`instanceof` Checks**:
  ```typescript
  class Bird { fly() {} }
  class Fish { swim() {} }
  
  function move(animal: Bird | Fish) {
    if (animal instanceof Bird) {
      animal.fly(); // `animal` is narrowed to `Bird`
    } else {
      animal.swim(); // `animal` is narrowed to `Fish`
    }
  }
  ```

- **`in` Operator**:
  ```typescript
  interface Dog { bark(): void }
  interface Cat { meow(): void }
  
  function petAction(pet: Dog | Cat) {
    if ("bark" in pet) {
      pet.bark(); // `pet` is narrowed to `Dog`
    } else {
      pet.meow(); // `pet` is narrowed to `Cat`
    }
  }
  ```

---

#### **2. Truthiness Narrowing**
- **Falsy Values**: `0`, `""`, `null`, `undefined`, `false`, `NaN`.
  ```typescript
  function printLength(str?: string) {
    if (str) {
      console.log(str.length); // `str` is narrowed to `string`
    } else {
      console.log("No string provided");
    }
  }
  ```
- **Non-Null Assertion** (Use Sparingly):
  ```typescript
  function liveDangerously(value?: string) {
    console.log(value!.toUpperCase()); // `value` is treated as `string`
  }
  ```

---

#### **3. Equality Checks**
- **`===`/`!==` Narrowing**:
  ```typescript
  function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // Both `x` and `y` are narrowed to `string`
      console.log(x.toUpperCase(), y.toLowerCase());
    }
  }
  ```
- **Checking `null`/`undefined`**:
  ```typescript
  function processValue(val: string | null) {
    if (val !== null) {
      val.toUpperCase(); // `val` is narrowed to `string`
    }
  }
  ```

---

#### **4. Discriminated Unions**
- **Use a Common Literal Property**:
  ```typescript
  interface Circle { kind: "circle"; radius: number }
  interface Square { kind: "square"; sideLength: number }
  
  type Shape = Circle | Square;
  
  function getArea(shape: Shape) {
    switch (shape.kind) {
      case "circle": // `shape` is narrowed to `Circle`
        return Math.PI * shape.radius ** 2;
      case "square": // `shape` is narrowed to `Square`
        return shape.sideLength ** 2;
    }
  }
  ```

---

#### **5. Type Predicates**
- **Custom Type Guards**:
  ```typescript
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  
  function handlePet(pet: Fish | Bird) {
    if (isFish(pet)) {
      pet.swim(); // `pet` is narrowed to `Fish`
    } else {
      pet.fly(); // `pet` is narrowed to `Bird`
    }
  }
  ```

---

#### **6. Assertion Functions**
- **`asserts` Keyword**:
  ```typescript
  function assertIsString(val: unknown): asserts val is string {
    if (typeof val !== "string") throw new Error("Not a string!");
  }
  
  function greet(input: unknown) {
    assertIsString(input);
    console.log(input.toUpperCase()); // `input` is narrowed to `string`
  }
  ```

---

#### **7. Control Flow Analysis**
- **After Assignments**:
  ```typescript
  let x: string | number = Math.random() > 0.5 ? "hello" : 42;
  
  x = "updated"; // `x` is now narrowed to `string`
  console.log(x.length);
  ```

---

#### **8. Exhaustiveness Checks**
- **`never` Type for Unreachable Code**:
  ```typescript
  function assertNever(x: never): never {
    throw new Error("Unexpected object: " + x);
  }
  
  function logShape(shape: Shape) {
    switch (shape.kind) {
      case "circle": /* ... */ break;
      case "square": /* ... */ break;
      default:
        assertNever(shape); // Ensures all cases are handled
    }
  }
  ```

---

#### **9. Array/Object Narrowing**
- **Array Checks**:
  ```typescript
  function printFirst(arr: string[] | null) {
    if (arr?.length) {
      console.log(arr[0]); // `arr` is narrowed to `string[]`
    }
  }
  ```
- **Object Property Checks**:
  ```typescript
  interface User { name?: string; age?: number }
  
  function greetUser(user: User) {
    if (user.name) {
      console.log(`Hello, ${user.name.toUpperCase()}`); // `user.name` is `string`
    }
  }
  ```

---

#### **10. Best Practices**
- **Order Matters**: Narrow from general → specific.
- **Use `const`/`readonly`** for literal types to aid narrowing.
- **Avoid Mutations** after narrowing (may invalidate type checks).

---

#### **11. Common Pitfalls**
- **Indirect Mutations**:
  ```typescript
  let val: string | number = "hello";
  if (typeof val === "string") {
    val = 42; // Type reverts to `string | number`
    console.log(val.toUpperCase()); // ❌ Runtime error!
  }
  ```
- **Implicit `any`** in loose TypeScript configurations.
- **Overcomplicating** with unnecessary type guards.