
**Beginner Level Questions (30 Questions)**

These questions focus on basic TypeScript syntax, types, and concepts.

**Types & Basic Syntax**

1.  **Question:** What is TypeScript and how does it relate to JavaScript?
    **Answer:** TypeScript is a superset of JavaScript that adds static typing. It compiles down to JavaScript and helps catch errors during development.

2.  **Question:** What are the basic data types in TypeScript?
    **Answer:** `number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`, `object`, `array`, `tuple`, `enum`, `void`, `any`, and `never`.3.  **Question:** How do you declare a variable with a specific type in TypeScript?
    **Answer:** Using a colon after the variable name, followed by the type. Example: `let age: number = 30;`

4.  **Question:** What is the difference between `any` and `unknown`?
    **Answer:** `any` bypasses type checking, while `unknown` requires type assertions or narrowing before use. `unknown` is safer.

5.  **Question:** What is the `void` type used for?
    **Answer:** `void` is used for functions that do not return any value.

6.  **Question:** How do you define an array of numbers in TypeScript?
    **Answer:** `let numbers: number[] = [1, 2, 3];` or `let numbers: Array<number> = [1, 2, 3];`

7.  **Question:** How do you define a tuple in TypeScript?
    **Answer:** A tuple is an array with a fixed number of elements with known types. Example: `let person: [string, number] = ["Alice", 30];`

8.  **Question:** What is type inference in TypeScript?
    **Answer:** TypeScript automatically infers the type of a variable based on its initial value.

9.  **Question:** Explain the difference between `let` and `const`.
    **Answer:** `let` allows reassignment, while `const` creates a constant variable that cannot be reassigned.

10. **Question:** How do you declare a function with a specific return type?
    **Answer:** Using a colon after the function parameter list, followed by the return type. Example: `function add(a: number, b: number): number { return a + b; }`

**Interfaces & Classes**

11. **Question:** What is an interface in TypeScript?
    **Answer:** An interface defines a contract for the structure of an object, specifying the names and types of its properties.

12. **Question:** How do you define an interface?
    **Answer:** Using the `interface` keyword. Example: `interface Person { name: string; age: number; }`

13. **Question:** How do you implement an interface in a class?
    **Answer:** Using the `implements` keyword. Example: `class Employee implements Person { ... }`

14. **Question:** What is a class in TypeScript?
    **Answer:** A class is a blueprint for creating objects, containing properties and methods.

15. **Question:** How do you create an instance of a class?
    **Answer:** Using the `new` keyword followed by the class name and parentheses. Example: `let myObject = new MyClass();`

16. **Question:** What is a constructor in a class?
    **Answer:** The constructor is a special method that is called when an object is created from a class.

17. **Question:** How do you define a public, private, and protected member in a class?
    **Answer:** Using the `public`, `private`, and `protected` keywords before the member name.

18. **Question:** What is inheritance in TypeScript?
    **Answer:** Inheritance allows a class to inherit properties and methods from another class.

19. **Question:** How do you implement inheritance in TypeScript?
    **Answer:** Using the `extends` keyword. Example: `class Manager extends Employee { ... }`

**Enums & Unions**

20. **Question:** What is an enum in TypeScript?
    **Answer:** An enum is a way of giving more friendly names to sets of numeric values.

21. **Question:** How do you define an enum?
    **Answer:** Using the `enum` keyword. Example: `enum Status { Pending, Active, Inactive }`

22. **Question:** What are union types in TypeScript?
    **Answer:** A union type allows a variable to hold values of different types.

23. **Question:** How do you define a union type?
    **Answer:** Using the `|` operator. Example: `let value: string | number;`

24. **Question:** What is type narrowing?
    **Answer:** Type narrowing is the process of refining a type to a more specific type within a conditional block.

**Basic Functions**

25. **Question:** How do you define optional parameters in a function?
    **Answer:** Using a question mark `?` after the parameter name. Example: `function greet(name?: string) { ... }`

26. **Question:** How do you define default parameters in a function?
    **Answer:** Assigning a default value to the parameter. Example: `function greet(name: string = "Guest") { ... }`

27. **Question:** What are rest parameters in a function?
    **Answer:** Rest parameters allow a function to accept an indefinite number of arguments as an array.

28. **Question:** How do you define rest parameters?
    **Answer:** Using the `...` operator before the parameter name. Example: `function sum(...numbers: number[]) { ... }`

29. **Question:** What are arrow functions in TypeScript?
    **Answer:** Arrow functions provide a more concise syntax for writing functions.

30. **Question:** How do you define an arrow function?
    **Answer:** `const add = (a: number, b: number): number => a + b;`

**Intermediate Level Questions (40 Questions)**

These questions focus on more complex TypeScript concepts such as generics, advanced types, and practical usage.

**Generics**

31. **Question:** What are generics in TypeScript?
    **Answer:** Generics allow you to write reusable code that can work with different types.

32. **Question:** How do you define a generic function?
    **Answer:** Using angle brackets `<>` to define type parameters. Example: `function identity<T>(arg: T): T { return arg; }`

33. **Question:** How do you define a generic interface?
    **Answer:** Using angle brackets `<>` to define type parameters in the interface definition. Example: `interface Box<T> { value: T; }`

34. **Question:** What are constraints in generics?
    **Answer:** Constraints limit the types that can be used with a generic type parameter.

35. **Question:** How do you define a constraint in a generic?
    **Answer:** Using the `extends` keyword. Example: `function logLength<T extends { length: number }>(arg: T) { ... }`

**Advanced Types**

36. **Question:** What are type aliases in TypeScript?
    **Answer:** Type aliases create a new name for a type, making code more readable.

37. **Question:** How do you define a type alias?
    **Answer:** Using the `type` keyword. Example: `type Point = { x: number; y: number; };`

38. **Question:** What are intersection types?
    **Answer:** Intersection types combine multiple types into one.

39. **Question:** How do you define an intersection type?
    **Answer:** Using the `&` operator. Example: `type Person = Name & Age;`

40. **Question:** What are mapped types?
    **Answer:** Mapped types transform existing types into new types.

41. **Question:** How do you define a mapped type?
    **Answer:** Using the `[key in keyof Type]` syntax. Example: `type ReadOnly<T> = { readonly [P in keyof T]: T[P] };`

42. **Question:** What are conditional types?
    **Answer:** Conditional types allow you to define types based on a condition.

43. **Question:** How do you define a conditional type?
    **Answer:** Using the `T extends U ? X : Y` syntax. Example: `type IsString<T> = T extends string ? true : false;`

44. **Question:** What is the `keyof` operator?
    **Answer:** The `keyof` operator extracts the keys of a type as a union of string literal types.

45. **Question:** What is the `typeof` operator?
    **Answer:** The `typeof` operator extracts the type of a variable or expression.

46. **Question:** What is the `infer` keyword?
    **Answer:** The `infer` keyword allows you to infer a type within a conditional type.

47. **Question:** What are template literal types?
    **Answer:** Template literal types allow you to create string literal types using template literals.

**Practical Usage**

48. **Question:** How do you use TypeScript with React?    **Answer:** By defining types for props, state, and using `.tsx` files.

49. **Question:** How do you define types for React components?
    **Answer:** Using interfaces or types for props and state.

50. **Question:** How do you handle event types in React with TypeScript?
    **Answer:** Using `React.ChangeEvent`, `React.MouseEvent`, etc.

51. **Question:** How do you use TypeScript with Node.js?
    **Answer:** By using `ts-node` to run TypeScript files directly or compiling to JavaScript.

52. **Question:** How do you define types for API responses?
    **Answer:** Using interfaces or types that match the structure of the API response.

53. **Question:** How do you handle errors in TypeScript?
    **Answer:** Using try-catch blocks and defining custom error types.

54. **Question:** How do you use TypeScript with asynchronous operations?
    **Answer:** Using `async` and `await` keywords and defining return types for Promises.

55. **Question:** What are declaration files (`.d.ts`)?
    **Answer:** Declaration files describe the types of existing JavaScript libraries.

56. **Question:** How do you use declaration files?
    **Answer:** By installing type definitions from `@types` or creating custom declaration files.

57. **Question:** How do you configure `tsconfig.json`?
    **Answer:** By setting compiler options like `target`, `module`, `strict`, etc.

58. **Question:** What is the purpose of the `strict` mode in `tsconfig.json`?
    **Answer:** It enables stricter type checking, which helps catch more errors at compile time.

59. **Question:** How do you handle null and undefined values in TypeScript?
    **Answer:** Using optional properties, union types, and nullish coalescing operators.

60. **Question:** What is the nullish coalescing operator (`??`)?
    **Answer:** It returns the right-hand side operand when the left-hand side is `null` or `undefined`.

61. **Question:** What is the optional chaining operator (`?.`)?
    **Answer:** It allows you to access properties of potentially null or undefined objects without causing errors.

62. **Question:** How do you handle different environments (e.g., development, production) in TypeScript?
    **Answer:** Using environment variables and conditional compilation.

63. **Question:** How do you write unit tests for TypeScript code?
    **Answer:** Using testing frameworks like Jest or Mocha and defining types for test cases.

64. **Question:** What are decorators in TypeScript?
    **Answer:** Decorators are a way to add annotations and metadata to classes, methods, and properties.

65. **Question:** How do you define a decorator?
    **Answer:** Using the `@` symbol followed by the decorator name. Example: `@log`66. **Question:** What are modules in TypeScript?
    **Answer:** Modules allow you to organize code into separate files and namespaces.

67. **Question:** How do you import and export modules in TypeScript?
    **Answer:** Using the `import` and `export` keywords.

68. **Question:** How do you handle external libraries with TypeScript?
    **Answer:** By installing type definitions or creating custom declaration files.

69. **Question:** How do you use namespaces in TypeScript?
    **Answer:** Using the `namespace` keyword to group related code.

70. **Question:** What are declaration merging?
     **Answer:** Declaration merging is when the compiler merges two or more declarations with the same name into a single definition.

**Advanced Level Questions (30 Questions)**

These questions focus on more complex TypeScript concepts, design patterns, and performance considerations.

**Advanced Generics & Types**

71. **Question:** Explain how to use recursive types in TypeScript.
    **Answer:** Recursive types are types that refer to themselves, often used for tree-like structures.

72. **Question:** How do you use distributive conditional types?
    **Answer:** Distributive conditional types apply a condition to each member of a union type.

73. **Question:** What are variadic tuple types?
    **Answer:** Variadic tuple types allow you to define tuples with a variable number of elements.

74. **Question:** How do you use indexed access types?    **Answer:** Indexed access types allow you to access the type of a property of another type. Example: `type Value = Person['name'];`

75. **Question:** Explain the difference between `Partial<T>`, `Required<T>`, `Readonly<T>`, and `Pick<T, K>`.
    **Answer:**
        *   `Partial<T>`: Makes all properties of T optional.
        *   `Required<T>`: Makes all properties of T required.
        *   `Readonly<T>`: Makes all properties of T read-only.
        *   `Pick<T, K>`: Picks a set of properties K from T.

76. **Question:** How do you create a type that extracts the return type of a function?
    **Answer:** Using `ReturnType<typeof functionName>`.

77. **Question:** How do you create a type that extracts the parameters of a function?
    **Answer:** Using `Parameters<typeof functionName>`.

78. **Question:** What is the `Omit<T, K>` type?
    **Answer:** It creates a new type by omitting the properties K from T.

79. **Question:** What is the `Exclude<T, U>` type?
    **Answer:** It creates a new type by excluding types that are assignable to U from T.

80. **Question:** What is the `Extract<T, U>` type?
    **Answer:** It creates a new type by extracting types that are assignable to U from T.

**Design Patterns & Architecture**

81. **Question:** How can TypeScript be used to implement the Factory pattern?
    **Answer:** By defining interfaces for the products and a factory class that creates objects based on input.

82. **Question:** How can TypeScript be used to implement the Singleton pattern?
    **Answer:** By defining a class with a private constructor and a static method that returns the single instance.

83. **Question:** How can TypeScript be used to implement the Observer pattern?
    **Answer:** By defining interfaces for subjects and observers and using methods for subscribing and notifying.

84. **Question:** How can TypeScript be used to implement the Strategy pattern?
    **Answer:** By defining an interface for strategies and allowing clients to choose which strategy to use.

85. **Question:** How can you design a scalable application using TypeScript?
    **Answer:** By using modules, namespaces, and a well-defined architecture.

86. **Question:** How do you handle dependency injection in TypeScript?
    **Answer:** Using libraries like `tsyringe` or `inversify-ts`, or by manually passing dependencies to constructors.

**Performance & Optimization**

87. **Question:** How can you optimize TypeScript code for performance?
    **Answer:** By avoiding unnecessary type checks, using efficient algorithms, and optimizing data structures.

88. **Question:** How does TypeScript's compilation process impact performance?
    **Answer:** TypeScript compiles to JavaScript, so the performance is ultimately determined by the generated JavaScript code.

89. **Question:** How do you handle large datasets in TypeScript?
    **Answer:** By using techniques like pagination, lazy loading, and efficient data structures.

90. **Question:** How do you avoid type errors at runtime?
    **Answer:** By using strict type checking, proper error handling, and unit tests.

**Advanced Practical Scenarios**

91. **Question:** How would you design a state management solution using TypeScript?
    **Answer:** By using libraries like Redux or Zustand, or by creating custom solutions using interfaces and classes.

92. **Question:** How would you implement a type-safe API client using TypeScript?
    **Answer:** By defining types for API requests and responses, and using generics to create reusable functions.

93. **Question:** How would you handle internationalization (i18n) in a TypeScript application?
    **Answer:** By using libraries like `i18next` and defining types for translation keys and values.

94. **Question:** How would you handle authentication and authorization in a TypeScript application?
    **Answer:** By using libraries like Passport.js and defining types for user roles and permissions.

95. **Question:** How would you implement a custom validation library using TypeScript?
    **Answer:** By using classes, interfaces, and generics to define validation rules and error messages.

96. **Question:** How would you handle complex data transformations using TypeScript?
    **Answer:** By using functional programming techniques, mapped types, and utility types.

97. **Question:** How would you handle caching in a TypeScript application?
    **Answer:** By using libraries like `node-cache` or by creating custom caching solutions.

98. **Question:** How would you handle web sockets in a TypeScript application?
    **Answer:** By using libraries like `ws` or `socket.io` and defining types for messages and events.

99. **Question:** How would you implement a plugin system using TypeScript?
    **Answer:** By defining interfaces for plugins and using dependency injection to load and manage plugins.

100. **Question:** Explain the concept of "structural typing" in TypeScript.
     **Answer:** Structural typing means that if two types have the same shape (properties and methods), they are considered compatible, regardless of their names.

