### Generics in TypeScript: A Comprehensive Guide

#### 1. Basic Generic Syntax

*   **Type Parameters:** Generics use type parameters, denoted by angle brackets `<T>`, `<U>`, etc. These parameters act as placeholders for actual types that will be specified later.

    ```typescript
    function identity<T>(arg: T): T {
      return arg;
    }
    ```

*   **Generic Function Call:** When calling a generic function, you can explicitly specify the type argument or let TypeScript infer it.

    ```typescript
    let result1 = identity<string>("hello"); // Explicit type argument
    let result2 = identity(123); // Type inference
    ```

*   **Generic Interfaces:** Interfaces can also be generic, allowing you to define reusable structures with type parameters.

    ```typescript
    interface Box<T> {
      value: T;
    }

    let box1: Box<number> = { value: 10 };
    let box2: Box<string> = { value: "text" };
    ```

*   **Generic Classes:** Classes can be generic, enabling you to create classes that work with different types.

    ```typescript
    class Container<T> {
      private items: T[] = [];

      addItem(item: T) {
        this.items.push(item);
      }

      getItems(): T[] {
        return this.items;
      }
    }

    let container1 = new Container<number>();
    container1.addItem(1);
    container1.addItem(2);

    let container2 = new Container<string>();
    container2.addItem("a");
    container2.addItem("b");
    ```

#### 2. Multiple Type Parameters

*   **Multiple Generic Types:** You can use multiple type parameters in generic functions, interfaces, and classes.

    ```typescript
    function pair<T, U>(first: T, second: U): [T, U] {
      return [first, second];
    }    let pair1 = pair<number, string>(10, "hello");
    let pair2 = pair(true, 123);
    ```

*   **Type Parameter Constraints:** When using multiple type parameters, you can constrain them to specific types or interfaces.

    ```typescript    interface Lengthy {
      length: number;
    }

    function logLength<T extends Lengthy>(arg: T): void {
      console.log(arg.length);
    }

    logLength("string"); // Valid
    logLength([1, 2, 3]); // Valid
    // logLength(123); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthy'.
    ```

#### 3. Generic Constraints

*   **`extends` Keyword:** Use the `extends` keyword to constrain type parameters to a specific type or interface.

    ```typescript
    interface Printable {
      print(): void;
    }

    function printItem<T extends Printable>(item: T): void {
      item.print();
    }
    ```

*   **Type Constraints:** You can use a union type to constrain type parameters to a set of allowed types.

    ```typescript
    type StringOrNumber = string | number;
    function processValue<T extends StringOrNumber>(value: T): void {
      console.log(value);
    }

    processValue("hello"); // Valid
    processValue(123); // Valid
    // processValue(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'StringOrNumber'.
    ```

*   **Using `keyof`:** The `keyof` operator can be used to constrain a type parameter to the keys of another type.

    ```typescript
    function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
      return obj[key];
    }

    let person = { name: "Alice", age: 30 };
    let name = getProperty(person, "name"); // name is of type string
    let age = getProperty(person, "age"); // age is of type number
    // getProperty(person, "city"); // Error: Argument of type '"city"' is not assignable to parameter of type '"name" | "age"'.
    ```

#### 4. Generic Type Aliases

*   **Generic Type Aliases:** Type aliases can be generic, allowing you to create reusable type definitions with type parameters.

    ```typescript
    type Result<T> = {
      success: boolean;
      data?: T;
      error?: string;
    };

    let successResult: Result<number> = { success: true, data: 10 };
    let errorResult: Result<string> = { success: false, error: "Failed" };
    ```

*   **Generic Function Types:** You can create type aliases for generic function types.

    ```typescript
    type Mapper<T, U> = (item: T) => U;

    let numberToString: Mapper<number, string> = (num) => String(num);
    let stringToNumber: Mapper<string, number> = (str) => Number(str);
    ```

#### 5. Generic Default Type Parameters

*   **Default Type Parameters:** You can provide default values for type parameters using the `=` operator.

    ```typescript
    function createArray<T = string>(length: number, value: T): T[] {
      return Array(length).fill(value);
    }

    let stringArray = createArray(3, "hello"); // Type is string[]
    let numberArray = createArray<number>(3, 10); // Type is number[]
    ```

#### 6. Generic Utility Types

*   **TypeScript Built-in Generics:** TypeScript provides several built-in generic utility types, such as `Partial<T>`, `Required<T>`, `Readonly<T>`, `Pick<T, K>`, `Omit<T, K>`, `Record<K, T>`, `Exclude<T, U>`, `Extract<T, U>`, `NonNullable<T>`, `Parameters<T>`, `ReturnType<T>`, `InstanceType<T>`.

    ```typescript
    interface Person {
      name: string;
      age: number;
      city?: string;
    }

    type PartialPerson = Partial<Person>; // All properties are optional
    type RequiredPerson = Required<Person>; // All properties are required
    type ReadonlyPerson = Readonly<Person>; // All properties are readonly
    type PersonName = Pick<Person, "name">; // Only "name" property
    type PersonWithoutCity = Omit<Person, "city">; // All properties except "city"
    type StringMap = Record<string, number>; // Map of string to number
    ```

#### 7. Generic Best Practices

*   **Use Descriptive Names:** Use clear and descriptive names for type parameters (e.g., `T`, `U`, `Key`, `Value`).
*   **Keep Type Parameters Simple:** Keep type parameters as simple as possible to improve readability.
*   **Use Constraints When Necessary:** Use constraints to ensure that type parameters meet certain requirements.
*   **Avoid Overusing Generics:** Don't use generics when they are not necessary.
*   **Document Generic Types:** Document complex generic types using comments for better understanding.
*   **Test Generic Functions:** Write unit tests to ensure generic functions are working correctly with different types.
*   **Use Utility Types:** Use TypeScript's built-in generic utility types to simplify common type transformations.
*   **Prefer Interfaces Over Type Aliases:** When defining generic object types, prefer interfaces over type aliases as interfaces support declaration merging.
*   **Consider Default Type Parameters:** Use default type parameters when appropriate to reduce verbosity.
*   **Be Mindful of Performance:** Be aware of the performance implications of using complex generic types.