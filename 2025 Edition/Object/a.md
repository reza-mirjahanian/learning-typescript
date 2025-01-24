### Object Types in TypeScript: A Comprehensive Guide

#### 1. Basic Object Type Syntax

*   **Inline Type Annotation:** You can define object types directly within type annotations using curly braces `{}`. Each property is defined with its name, a colon, and its type.

    ```typescript
    let person: { name: string; age: number; };
    person = { name: "Alice", age: 30 };
    ```

*   **Optional Properties:** Use a question mark `?` after a property name to make it optional.

    ```typescript
    let car: { model: string; year?: number; };
    car = { model: "Tesla" }; // 'year' is optional
    car = { model: "BMW", year: 2022 }; // 'year' is provided
    ```

*   **Readonly Properties:** Use the `readonly` keyword to make a property immutable after object creation.

    ```typescript
    let config: { readonly apiKey: string; };
    config = { apiKey: "secret-key" };
    // config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
    ```

#### 2. Type Aliases for Object Types

*   **Reusable Type Definitions:** Use `type` aliases to create reusable object type definitions. This improves code readability and maintainability.

    ```typescript
    type Point = { x: number; y: number; };
    let point1: Point = { x: 10, y: 20 };
    let point2: Point = { x: 5, y: 15 };
    ```

*   **Complex Type Aliases:** Type aliases can define complex object types, including nested objects, arrays, and function properties.

    ```typescript
    type User = {
      id: number;
      name: string;
      address: {
        street: string;
        city: string;
      };
      hobbies: string[];
      greet: (message: string) => void;
    };
    ```

#### 3. Interfaces for Object Types

*   **Interface Declaration:** Use the `interface` keyword to define object types. Interfaces are similar to type aliases but have some unique features, such as declaration merging.

    ```typescript
    interface Rectangle {
      width: number;
      height: number;
    }
    let rect1: Rectangle = { width: 10, height: 20 };
    ```

*   **Extending Interfaces:** Use the `extends` keyword to create new interfaces based on existing ones. This promotes code reuse and avoids duplication.

    ```typescript
    interface Shape {
      color: string;
    }
    interface Circle extends Shape {
      radius: number;
    }
    let circle: Circle = { color: "red", radius: 5 };
    ```

*   **Interface Merging:** Interfaces with the same name in the same scope are automatically merged by TypeScript. This is useful for adding properties to existing interfaces in a modular way.

    ```typescript
    interface Person {
      name: string;
    }
    interface Person {
      age: number;
    }
    let person1: Person = { name: "John", age: 25 };
    ```

*   **Optional and Readonly Properties in Interfaces:** Interfaces support optional properties using `?` and readonly properties using `readonly`.

    ```typescript
    interface Product {
      id: number;
      name: string;
      price?: number;
      readonly category: string;
    }
    ```

#### 4. Index Signatures

*   **Dynamic Properties:** Use index signatures to define object types where the names of the properties are not known in advance. They are useful for representing dictionaries or maps.

    ```typescript
    let scores: { [name: string]: number } = {
      "Alice": 95,
      "Bob": 88,
      "Charlie": 92,
    };
    ```

*   **String and Number Index Signatures:** Index signatures can use string or number types as keys.

    ```typescript
    let data: { [id: number]: string; } = {
      1: "apple",
      2: "banana",
      3: "cherry",
    };
    ```

*   **Readonly Index Signatures:** Use `readonly` to make the properties accessed via the index signature immutable.

    ```typescript
    let cache: { readonly [key: string]: any; } = {
      "item1": "value1",
      "item2": "value2",
    };
    // cache["item1"] = "new-value"; // Error: Index signature in type '...' only permits reading
    ```

#### 5. Intersection Types

*   **Combining Types:** Use the `&` operator to create intersection types that combine the properties of multiple types.

    ```typescript
    type Loggable = { log: () => void; };
    type Serializable = { serialize: () => string; };
    type LoggableSerializable = Loggable & Serializable;
    let item: LoggableSerializable = {
      log: () => console.log("Logging"),
      serialize: () => "Serialized data",
    };
    ```

*   **Combining Object Types:** Intersection types can combine multiple object types.

    ```typescript
    type Circle = { radius: number; };
    type Color = { color: string; };
    type ColoredCircle = Circle & Color;
    let coloredCircle: ColoredCircle = { radius: 5, color: "blue" };
    ```

#### 6. Union Types

*   **Multiple Possible Types:** Use the `|` operator to create union types that can hold values of different types.

    ```typescript
    type StringOrNumber = string | number;
    let value: StringOrNumber;
    value = "Hello";
    value = 123;
    ```

*   **Union of Object Types:** Union types can represent objects that can have different shapes.

    ```typescript
    type Square = { side: number; };
    type Rectangle = { width: number; height: number; };
    type Shape = Square | Rectangle;
    let shape1: Shape = { side: 5 };
    let shape2: Shape = { width: 10, height: 20 };
    ```

#### 7. Nested Object Types

*   **Objects Within Objects:** Object types can contain nested object types to represent complex data structures.

    ```typescript
    type Address = {
      street: string;
      city: string;
      zipCode: string;
    };
    type Employee = {
      name: string;
      address: Address;
    };
    let employee: Employee = {
      name: "Jane Doe",
      address: {
        street: "123 Main St",        city: "Anytown",
        zipCode: "12345",
      },
    };
    ```

#### 8. Function Properties in Object Types

*   **Methods in Objects:** Object types can include function properties, which represent methods of the object.

    ```typescript
    type Calculator = {
      add: (x: number, y: number) => number;
      subtract: (x: number, y: number) => number;
    };
    let calc: Calculator = {
      add: (x, y) => x + y,      subtract: (x, y) => x - y,
    };
    ```

#### 9. Object Type Best Practices

*   **Use Type Aliases or Interfaces:** Use type aliases or interfaces to define object types for reusability and maintainability.
*   **Choose Between Type Aliases and Interfaces:** Use type aliases for simple object types and interfaces when you need features like declaration merging or extending.
*   **Use Optional Properties:** Use optional properties with `?` when a property is not always required.
*   **Use Readonly Properties:** Use `readonly` properties to prevent accidental modifications.
*   **Use Index Signatures:** Use index signatures when you need to represent dynamic properties.
*   **Use Intersection Types:** Use intersection types to combine multiple object types.
*   **Use Union Types:** Use union types when a property can have multiple possible types.
*   **Keep Object Types Focused:** Design object types to represent specific data structures or entities.
*   **Use Descriptive Names:** Use clear and descriptive names for object types and their properties.
*   **Avoid Deeply Nested Objects:** Try to keep object types as flat as possible to improve readability and maintainability.