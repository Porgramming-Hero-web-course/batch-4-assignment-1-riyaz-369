# Why is Type Guard and Why is it Important in TypeScript?

TypeScript is great at catching errors before they happen, but sometimes we work with data that could be multiple types. This is where type guards come in handy. Type guards let us check the type of data on runtime, helping us avoid errors and making our code more reliable. Let’s look whats type guard are and how they are useful for us.

# What Are Type Guards?

Type guards are way to check what type a value is, especially when it could be one of several types. They help us write safer code by ensuring we only use data the way it’s intended.

## Common Type Guards in TypeScript

### `typeof` type guard:

Use typeof for basic types like `string, number and boolean`.

```ts
type Alphanumeric = string | number;

const add = (
  param1: Alphanumeric,
  param2: Alphanumeric
): Alphanumeric | undefined => {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
};

const result1 = add("2", "3"); // 23
console.log(typeof result1); // string
```

### `instanceof` type guard:

```ts
class Dog {
  bark() {}
}
class Cat {
  meow() {}
}

const makeSound = (animal: Dog | Cat) => {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
};

const dog = new Dog();
console.log(makeSound(dog)); // bark
```
