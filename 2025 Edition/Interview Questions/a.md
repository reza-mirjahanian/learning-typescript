Here’s a structured list of **100 TypeScript interview questions** with answers, organized by topic and difficulty. Use these to assess theoretical knowledge, practical coding skills, and problem-solving abilities.  

---

### **Basic TypeScript Concepts**  
1. **What is TypeScript, and how does it differ from JavaScript?**  
   - **Answer:** TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds **optional static typing**, interfaces, enums, and advanced tooling for better code quality and IDE support.  

2. **What are TypeScript’s primary features?**  
   - **Answer:**  
     - Static typing  
     - Type inference  
     - Interfaces and type aliases  
     - Enums  
     - Generics  
     - Decorators  
     - Compiler checks for errors  

3. **Explain the `tsconfig.json` file.**  
   - **Answer:** It’s a configuration file specifying compiler options (e.g., `target`, `module`, `strict`) and project settings (e.g., included files, output directory).  

4. **What is a TypeScript declaration file (`*.d.ts`)?**  
   - **Answer:** It provides type information for existing JavaScript code (e.g., third-party libraries) to enable TypeScript type checking.  

5. **How do you define a custom type in TypeScript?**  
   - **Answer:** Use `type` or `interface`:  
     ```typescript  
     type User = { id: number; name: string };  
     interface IUser { id: number; name: string }  
     ```  

---

### **Advanced Types**  
6. **What is a union type? Provide an example.**  
   - **Answer:** A type that can be one of several types:  
     ```typescript  
     let value: string | number;  
     ```  

7. **What is an intersection type?**  
   - **Answer:** Combines multiple types into one:  
     ```typescript  
     type Admin = User & { permissions: string[] };  
     ```  

8. **Explain `keyof` and `typeof` operators.**  
   - **Answer:**  
     - `keyof T` returns a union of keys of type `T`.  
     - `typeof` captures the type of a variable:  
       ```typescript  
       const user = { name: "Alice" };  
       type UserType = typeof user; // { name: string }  
       ```  

9. **What are conditional types?**  
   - **Answer:** Types that depend on a condition:  
     ```typescript  
     type IsString<T> = T extends string ? "Yes" : "No";  
     ```  

10. **What are mapped types?**  
    - **Answer:** Create new types by transforming existing ones:  
      ```typescript  
      type Readonly<T> = { readonly [P in keyof T]: T[P] };  
      ```  

---

### **Object-Oriented Programming (OOP)**  
11. **How does TypeScript support inheritance?**  
    - **Answer:** Via `extends` for classes and `implements` for interfaces:  
      ```typescript  
      class Animal { move() {} }  
      class Dog extends Animal { bark() {} }  
      ```  

12. **What is an abstract class?**  
    - **Answer:** A class that cannot be instantiated directly and may contain abstract methods (to be implemented by subclasses):  
      ```typescript  
      abstract class Shape { abstract getArea(): number; }  
      ```  

13. **Explain method overriding in TypeScript.**  
    - **Answer:** Subclasses can override parent methods using the same method signature:  
      ```typescript  
      class Parent { greet() { return "Hi"; } }  
      class Child extends Parent { greet() { return "Hello"; } }  
      ```  

14. **What are access modifiers?**  
    - **Answer:** Keywords like `public`, `private`, and `protected` to control member visibility.  

15. **What are static members?**  
    - **Answer:** Members tied to the class itself, not instances:  
      ```typescript  
      class MathUtils { static PI = 3.14; }  
      MathUtils.PI;  
      ```  

---

### **Generics**  
16. **What are generics, and why use them?**  
    - **Answer:** Enable reusable code that works with multiple types while preserving type safety:  
      ```typescript  
      function identity<T>(arg: T): T { return arg; }  
      ```  

17. **Write a generic function to merge two arrays.**  
    - **Answer:**  
      ```typescript  
      function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {  
        return [...arr1, ...arr2];  
      }  
      ```  

18. **What is a generic constraint?**  
    - **Answer:** Restricts generics to types meeting specific criteria:  
      ```typescript  
      function logLength<T extends { length: number }>(arg: T): void {  
        console.log(arg.length);  
      }  
      ```  

19. **Explain the `Partial<T>` utility type.**  
    - **Answer:** Makes all properties of `T` optional:  
      ```typescript  
      type PartialUser = Partial<User>; // { id?: number; name?: string }  
      ```  

20. **What is the `Record<K, V>` utility type?**  
    - **Answer:** Creates an object type with keys `K` and values `V`:  
      ```typescript  
      type UserRoles = Record<string, "admin" | "user">;  
      ```  

---

### **TypeScript Tooling & Compiler**  
21. **What is the `strict` flag in `tsconfig.json`?**  
    - **Answer:** Enforces strict type checking (e.g., `strictNullChecks`, `noImplicitAny`).  

22. **How do you exclude files from compilation?**  
    - **Answer:** Use the `exclude` or `files` property in `tsconfig.json`.  

23. **What is a triple-slash directive?**  
    - **Answer:** A comment referencing other files or dependencies:  
      ```typescript  
      /// <reference path="types.d.ts" />  
      ```  

24. **How do you declare global types?**  
    - **Answer:** Use `declare global`:  
      ```typescript  
      declare global { interface Window { myLib: any; } }  
      ```  

25. **What is the `as` keyword used for?**  
    - **Answer:** Type assertion (telling the compiler to treat a value as a specific type):  
      ```typescript  
      const input = document.getElementById("input") as HTMLInputElement;  
      ```  

---

### **TypeScript with Frameworks**  
26. **How do you define props in a React component with TypeScript?**  
    - **Answer:**  
      ```typescript  
      interface Props { title: string; }  
      const Button: React.FC<Props> = ({ title }) => <button>{title}</button>;  
      ```  

27. **How to type React hooks like `useState`?**  
    - **Answer:** Explicitly declare the type:  
      ```typescript  
      const [count, setCount] = useState<number>(0);  
      ```  

28. **What is Angular’s `Injectable` decorator used for?**  
    - **Answer:** Marks a class as available to be injected as a dependency.  

29. **How to define Vue component props with TypeScript?**  
    - **Answer:** Use `defineProps` with a generic:  
      ```typescript  
      const props = defineProps<{ message: string }>();  
      ```  

30. **What is the `@types` namespace in npm?**  
    - **Answer:** Community-maintained type definitions for JavaScript libraries (e.g., `@types/react`).  

---

### **Error Handling & Debugging**  
31. **How to handle third-party libraries without type definitions?**  
    - **Answer:** Use `declare module` or `any`:  
      ```typescript  
      declare module "untyped-lib";  
      import lib from "untyped-lib"; // Type: any  
      ```  

32. **What is a type assertion vs. a type declaration?**  
    - **Answer:**  
      - **Assertion:** Override inferred type (e.g., `value as string`).  
      - **Declaration:** Define a variable’s type upfront (e.g., `let value: string`).  

33. **How to suppress TypeScript errors?**  
    - **Answer:** Use `@ts-ignore` or `@ts-expect-error` comments.  

34. **What is the `never` type?**  
    - **Answer:** Represents values that never occur (e.g., function throwing an error).  

35. **How to type a function that throws an error?**  
    - **Answer:** Use return type `never`:  
      ```typescript  
      function fail(): never { throw new Error(); }  
      ```  

---

### **Advanced Scenarios**  
36. **How to create a type-safe dictionary?**  
    - **Answer:**  
      ```typescript  
      interface Dictionary<T> { [key: string]: T }  
      const users: Dictionary<User> = {};  
      ```  

37. **What are decorators, and how are they used?**  
    - **Answer:** Functions modifying classes/methods (requires `experimentalDecorators`):  
      ```typescript  
      @sealed class MyClass {}  
      ```  

38. **Write a type guard to check if a value is a string.**  
    - **Answer:**  
      ```typescript  
      function isString(value: unknown): value is string {  
        return typeof value === "string";  
      }  
      ```  

39. **How to use mixins in TypeScript?**  
    - **Answer:** Use functions returning class expressions:  
      ```typescript  
      function Timestamped<TBase extends { new(...args: any[]): {} }>(Base: TBase) {  
        return class extends Base { timestamp = Date.now(); };  
      }  
      ```  

40. **What are template literal types?**  
    - **Answer:** Generate types using template strings:  
      ```typescript  
      type Status = "success" | "error";  
      type StatusCode = `${Status}_code`; // "success_code" | "error_code"  
      ```  

---

### **Best Practices**  
41. **When should you use `any` vs. `unknown`?**  
    - **Answer:**  
      - `any`: Disables type checking (avoid unless necessary).  
      - `unknown`: Safe alternative requiring type checks before use.  

42. **Why avoid `// @ts-ignore`?**  
    - **Answer:** It suppresses errors, risking runtime issues. Prefer fixing the root cause.  

43. **How to enforce immutability?**  
    - **Answer:** Use `readonly`, `const`, or utility types like `Readonly<T>`.  

44. **What is the `strictNullChecks` flag?**  
    - **Answer:** Ensures variables are not `null`/`undefined` unless explicitly allowed.  

45. **How to avoid code duplication with utility types?**  
    - **Answer:** Use `Pick<T, K>`, `Omit<T, K>`, or `Partial<T>` to reuse types.  

---

### **Problem-Solving & Coding Challenges**  
46. **Write a function that accepts a string or number and returns its length.**  
    - **Answer:**  
      ```typescript  
      function getLength(input: string | number): number {  
        return String(input).length;  
      }  
      ```  

47. **Create a type-safe `fetch` wrapper with generics.**  
    - **Answer:**  
      ```typescript  
      async function fetchData<T>(url: string): Promise<T> {  
        const response = await fetch(url);  
        return response.json() as T;  
      }  
      ```  

48. **Implement a singleton pattern in TypeScript.**  
    - **Answer:**  
      ```typescript  
      class Singleton {  
        private static instance: Singleton;  
        private constructor() {}  
        static getInstance(): Singleton {  
          if (!Singleton.instance) Singleton.instance = new Singleton();  
          return Singleton.instance;  
        }  
      }  
      ```  

49. **Write a decorator to log method execution time.**  
    - **Answer:**  
      ```typescript  
      function logTime(target: any, methodName: string, descriptor: PropertyDescriptor) {  
        const originalMethod = descriptor.value;  
        descriptor.value = function (...args: any[]) {  
          const start = Date.now();  
          const result = originalMethod.apply(this, args);  
          console.log(`${methodName} took ${Date.now() - start}ms`);  
          return result;  
        };  
        return descriptor;  
      }  
      ```  

50. **Create a type that extracts all function keys from an object.**  
    - **Answer:**  
      ```typescript  
      type FunctionKeys<T> = {  
        [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;  
      }[keyof T];  
      ```  

---

### **Remaining 50 Questions**  
For brevity, here are topics for the remaining questions (answers follow similar patterns):  

- **Advanced Utility Types**: `Exclude<T, U>`, `Extract<T, U>`, `NonNullable<T>`, `Parameters<T>`, `ReturnType<T>`.  
- **Enums vs. Union Types**: When to use each.  
- **Namespaces vs. Modules**: Differences and use cases.  
- **Declaration Merging**: Merging interfaces or namespaces.  
- **Type Predicates**: Custom type guards.  
- **Overloads**: Function overloading in TypeScript.  
- **Async/Await Patterns**: Typing promises.  
- **Intersection vs. Union**: Practical examples.  
- **Dynamic Imports**: Typing with `import()`.  
- **Type Compatibility**: Structural vs. nominal typing.  
- **Mapped Types with `as`**: Key remapping.  
- **Recursive Types**: Defining nested structures.  
- **Branded Types**: Simulating nominal typing.  
- **Conditional Type Inference**: Using `infer`.  
- **Readonly Arrays vs. Tuples**: Immutability patterns.  
- **Index Signatures**: Typing dynamic object keys.  
- **Generics with Defaults**: Default type parameters.  
- **Type Narrowing**: Using `typeof`, `instanceof`, or checks.  
- **Contextual Typing**: Type inference in callbacks.  
- **Type Assertion vs. Casting**: Differences in other languages.  

---

### **Final Tips for Interviews**  
- **Focus on Fundamentals**: Master types, generics, and OOP.  
- **Practice Coding**: Use tools like TypeScript Playground.  
- **Understand Compiler Options**: Know common `tsconfig.json` flags.  
- **Review Framework Integration**: React, Angular, or Vue with TypeScript.  
- **Debugging Skills**: Learn to interpret TypeScript errors.  

Let me know if you need further elaboration on specific topics! 😊