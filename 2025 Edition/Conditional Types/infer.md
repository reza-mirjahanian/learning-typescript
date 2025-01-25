# **10 Examples of Using `infer` in TypeScript**

The `infer` keyword in TypeScript is a powerful tool used with conditional types to dynamically infer or extract types from complex structures. Below are 10 examples that demonstrate how to use `infer` in various scenarios.

---

## **1. Extracting the Return Type of a Function**
The `infer` keyword can be used to extract the return type of a function.

```typescript
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type Fn = () => string;

type Result = ReturnType<Fn>; // string
```
- **Explanation**: `infer R` dynamically infers the return type `R` of the function type `T`.

---

## **2. Extracting the Argument Type of a Function**
You can use `infer` to extract the argument type of a function.

```typescript
type ArgumentType<T> = T extends (arg: infer A) => any ? A : never;

type Fn = (value: number) => void;

type Result = ArgumentType<Fn>; // number
```
- **Explanation**: `infer A` extracts the type of the first argument of the function.

---

## **3. Extracting the Element Type of an Array**
`infer` can be used to extract the type of elements inside an array.

```typescript
type ElementType<T> = T extends (infer U)[] ? U : never;

type Result = ElementType<string[]>; // string
```
- **Explanation**: `infer U` dynamically infers the type of elements in the array.

---

## **4. Extracting the Instance Type of a Class**
You can use `infer` to extract the instance type of a class or constructor function.

```typescript
type InstanceType<T> = T extends new (...args: any[]) => infer R ? R : never;

class MyClass {
  name: string = "TypeScript";
}

type Result = InstanceType<typeof MyClass>; // MyClass
```
- **Explanation**: `infer R` extracts the type of the class instance returned by the constructor.

---

## **5. Extracting the Promise Resolved Value**
Use `infer` to extract the type of the value a `Promise` resolves to.

```typescript
type UnwrapPromise<T> = T extends Promise<infer U> ? U : never;

type Result = UnwrapPromise<Promise<number>>; // number
```
- **Explanation**: `infer U` extracts the resolved value type from the `Promise`.

---

## **6. Extracting the Keys of a Union Type**
You can infer the keys of a union of objects.

```typescript
type UnionKeys<T> = T extends { [key: string]: any } ? keyof T : never;

type Obj1 = { name: string };
type Obj2 = { age: number };

type Result = UnionKeys<Obj1 | Obj2>; // "name" | "age"
```
- **Explanation**: `infer` is not directly used here, but the conditional type allows us to infer the keys from the union of objects.

---

## **7. Inferring the Type of a Tuple Element**
You can infer the type of elements in a tuple.

```typescript
type FirstElement<T> = T extends [infer F, ...any[]] ? F : never;

type Tuple = [string, number, boolean];

type Result = FirstElement<Tuple>; // string
```
- **Explanation**: `infer F` extracts the type of the first element of the tuple.

---

## **8. Inferring the Return Type of a Method**
You can infer the return type of a specific method in an object.

```typescript
type MethodReturnType<T, K extends keyof T> = T[K] extends (...args: any[]) => infer R ? R : never;

type Obj = {
  greet: () => string;
  add: (a: number, b: number) => number;
};

type GreetReturnType = MethodReturnType<Obj, "greet">; // string
type AddReturnType = MethodReturnType<Obj, "add">; // number
```
- **Explanation**: `infer R` dynamically infers the return type of the specified method.

---

## **9. Extracting Nested Array Types**
You can use recursive conditional types with `infer` to extract deeply nested array types.

```typescript
type DeepArrayElementType<T> = T extends (infer U)[] ? DeepArrayElementType<U> : T;

type NestedArray = number[][][];

type Result = DeepArrayElementType<NestedArray>; // number
```
- **Explanation**: The conditional type recursively unwraps nested arrays until the base type is reached.

---

## **10. Inferring the Type of a Function Overload**
`infer` can be used to extract the return type of the last overload in a function.

```typescript
type OverloadReturnType<T> = T extends { (...args: any[]): infer R } ? R : never;

type Fn = {
  (a: string): string;
  (a: number): number;
};

type Result = OverloadReturnType<Fn>; // number (last overload return type)
```
- **Explanation**: `infer R` extracts the return type of the last overload in the function signature.

---

### **Summary of `infer` Use Cases**

| **Use Case**                        | **Example**                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| Extracting return type              | `ReturnType<T>`                                                            |
| Extracting argument type            | `ArgumentType<T>`                                                          |
| Extracting array element type       | `ElementType<T>`                                                           |
| Extracting class instance type      | `InstanceType<T>`                                                          |
| Extracting resolved `Promise` value | `UnwrapPromise<T>`                                                         |
| Extracting union keys               | `UnionKeys<T>`                                                             |
| Extracting tuple element type       | `FirstElement<T>`                                                          |
| Inferring method return type        | `MethodReturnType<T, K>`                                                   |
| Extracting nested array type        | `DeepArrayElementType<T>`                                                  |
| Inferring function overload return  | `OverloadReturnType<T>`                                                    |

These examples demonstrate the versatility of `infer` in TypeScript for creating dynamic, reusable, and type-safe utilities.