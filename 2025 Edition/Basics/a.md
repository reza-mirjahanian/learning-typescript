### **The Basics of TypeScript**

#### **1. Static Typing**
- **Type Annotations**:
  ```typescript
  let name: string = "John";
  let age: number = 30;
  let isActive: boolean = true;
  ```
- **Function Parameters/Return Types**:
  ```typescript
  function add(a: number, b: number): number {
    return a + b;
  }
  ```

#### **2. Interfaces**
- Define object shapes:
  ```typescript
  interface Person {
    name: string;
    age: number;
    isAdmin?: boolean; // Optional property
  }
  ```
- **Readonly Properties**:
  ```typescript
  interface Point {
    readonly x: number;
    readonly y: number;
  }
  ```

#### **3. Classes**
- **Access Modifiers**:
  ```typescript
  class User {
    public name: string; // Default
    private password: string;
    protected email: string;
  
    constructor(name: string, password: string) {
      this.name = name;
      this.password = password;
    }
  }
  ```
- **Inheritance**:
  ```typescript
  class Admin extends User {
    overridePermissions() {
      // Access to protected `email` allowed here
    }
  }
  ```

#### **4. Generics**
- **Reusable Code**:
  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  ```
- **Generic Interfaces**:
  ```typescript
  interface Response<T> {
    data: T;
    status: number;
  }
  ```

#### **5. Enums and Union Types**
- **Enums**:
  ```typescript
  enum Direction {
    Up = "UP",
    Down = "DOWN",
  }
  ```
- **Union Types**:
  ```typescript
  let value: string | number;
  value = "hello";
  value = 42;
  ```

#### **6. Type Inference**
- TypeScript infers types when not specified:
  ```typescript
  let score = 100; // Inferred as `number`
  const greeting = "Hello"; // Inferred as `string`
  ```

#### **7. Type Aliases vs. Interfaces**
- **Type Aliases**:
  ```typescript
  type Coordinates = {
    x: number;
    y: number;
  };
  ```
- **Key Differences**:
  - Interfaces can be merged; type aliases cannot.
  - Use interfaces for object shapes, types for unions/aliases.

#### **8. Modules**
- **ES6 Imports/Exports**:
  ```typescript
  // math.ts
  export const PI = 3.14;
  
  // app.ts
  import { PI } from "./math";
  ```

#### **9. Compiler Configuration (`tsconfig.json`)**
- **Common Options**:
  | Option             | Description                          |
  |--------------------|--------------------------------------|
  | `target`           | Output JS version (e.g., `ES6`)      |
  | `module`           | Module system (e.g., `CommonJS`)     |
  | `strict`           | Enable all strict checks             |
  | `outDir`           | Output directory for compiled files  |

#### **10. Advanced Types**
- **Utility Types**:
  ```typescript
  type PartialUser = Partial<User>; // All properties optional
  type ReadonlyUser = Readonly<User>;
  type UserNames = Pick<User, "name" | "email">;
  type StringMap = Record<string, string>;
  ```

#### **11. Debugging**
- Use **source maps** in `tsconfig.json`:
  ```json
  {
    "compilerOptions": {
      "sourceMap": true
    }
  }
  ```

#### **12. Best Practices**
- **Enable `strict` Mode**:
  ```json
  { "compilerOptions": { "strict": true } }
  ```
- **Avoid `any`**; use `unknown` for dynamic types.
- **Leverage Type Inference** where possible.
- **Use `interface` for public APIs**, `type` for internal logic.

#### **13. Common Mistakes**
- Forgetting to annotate function return types.
- Overusing `any` instead of proper types.
- Not using interfaces for complex object structures.

#### **14. Integration with Build Tools**
- **Webpack**:
  ```javascript
  // webpack.config.js
  module.exports = {
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
      rules: [{ test: /\.ts$/, use: "ts-loader" }]
    }
  };
  ```

#### **15. Testing with TypeScript**
- Use **Jest** + **ts-jest**:
  ```javascript
  // jest.config.js
  module.exports = {
    preset: "ts-jest",
    testEnvironment: "node"
  };
  ```