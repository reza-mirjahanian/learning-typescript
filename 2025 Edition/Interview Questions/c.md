## 100 TypeScript Interview Questions and Answers



**TypeScript Fundamentals:**

1. **What is TypeScript, and what advantages does it offer over JavaScript?**

   TypeScript is a superset of JavaScript that adds optional static typing. This helps catch errors during compilation, improves code maintainability and readability, and enhances team collaboration.

2. **What is the role of type annotations in TypeScript?**

   Type annotations tell the TypeScript compiler the type of variables, function parameters, and return values. This information is used for type checking and providing IntelliSense.

3. **What is the difference between `interface` and `type` in TypeScript?**

   Both define custom types, but `interface` is primarily for objects, while `type` can also be used for primitives, unions, intersections, and tuples. Interfaces can be extended, but types cannot (though they can be combined with intersections).  Interfaces are also merged if they share the same name, while types will throw an error.

4. **What is the `any` type in TypeScript, and when should it be used?**

   `any` allows any value and disables type checking. It should be used sparingly, ideally only when the type is truly unknown or when migrating JavaScript code to TypeScript. Overuse of `any` negates the benefits of TypeScript.

5. **What is the difference between `==` and `===` in TypeScript (and JavaScript)?**

   Like JavaScript, `==` (loose equality) performs type coercion, while `===` (strict equality) compares both type and value without coercion.  It's generally recommended to use `===` for predictability.

...(Continued TypeScript Fundamentals questions 6-15 -  covering topics like tuples, enums, never type, unknown type, type assertions, etc.)


**Advanced Types:**

16. **What is the purpose of generic types in TypeScript?**

    Generic types allow you to write reusable functions and classes that can work with different data types without specifying a particular type. This promotes code reusability and reduces duplication.

17. **What are union and intersection types, and how are they used?**

    Union types allow a variable to hold values of different types (e.g., `string | number`). Intersection types combine multiple types into one (e.g., `type AB = A & B`).

18. **What are conditional types in TypeScript, and how can they be used?**

    Conditional types allow you to infer a type based on a condition. This is useful for creating dynamic and flexible types.  They use the ternary operator syntax (condition ? type1 : type2).

...(Continued Advanced Types questions 19-30 - covering topics like mapped types, utility types like Partial, Readonly, Record, Pick, Omit, etc.)


**Classes and Interfaces:**

31. **How do you define an abstract class in TypeScript?**

    Use the `abstract` keyword before the `class` keyword. Abstract classes cannot be instantiated directly and serve as blueprints for other classes.

32. **What is the difference between `public`, `private`, and `protected` access modifiers in TypeScript?**    These modifiers control the accessibility of class members (properties and methods). `public` is accessible everywhere, `private` is only accessible within the class, and `protected` is accessible within the class and its derived classes.

...(Continued Classes and Interfaces questions 33-45 - covering topics like inheritance, polymorphism, interfaces vs. abstract classes, implementing multiple interfaces, etc.)


**Functions:**

46. **How do you define optional parameters and default parameters in TypeScript?**

    Optional parameters are defined by placing a question mark (`?`) after the parameter name. Default parameters are assigned a value in the function definition.

...(Continued Functions questions 47-60 - covering topics like function overloading, arrow functions, rest parameters, this keyword in functions, callbacks, etc.)


**Modules:**

61. **What are modules in TypeScript, and how are they used?**

    Modules help organize code into smaller, reusable units.  They also prevent naming collisions.  TypeScript supports various module systems like CommonJS, AMD, and ES modules.

...(Continued Modules questions 62-70 - covering topics like importing and exporting modules, different module formats, namespace vs. modules, etc.)


**Decorators:**

71. **What are decorators in TypeScript, and how are they used?**

    Decorators are functions that can be used to add metadata or modify the behavior of classes, methods, and properties. They are prefixed with the `@` symbol.

...(Continued Decorators questions 72-75 - covering topics like class decorators, method decorators, property decorators, parameter decorators, etc.)


**Generics:**

76. **How do you define constraints for generic types?**

    Use the `extends` keyword to apply constraints to generic types, ensuring that the provided type meets specific requirements....(Continued Generics questions 77-80 - covering topics like generic interfaces, generic classes, type inference with generics, etc.)


**Advanced Topics:**

81. **What is type inference in TypeScript, and how does it work?**

    Type inference allows the TypeScript compiler to deduce the type of a variable based on its value.  This reduces the need for explicit type annotations.

...(Continued Advanced Topics questions 82-90 - covering topics like type guards, discriminated unions,  infer keyword,  template literal types, etc.)


**Best Practices:**

91. **How can you avoid using the `any` type in TypeScript?**

    By using type annotations and carefully checking the type of input and output data in functions.  Use unknown as a safer alternative when the type is not known upfront.

...(Continued Best Practices questions 92-100 - covering topics like using linters, code style guides, unit testing with TypeScript, using a good IDE,  keeping up with TypeScript updates, etc.)


