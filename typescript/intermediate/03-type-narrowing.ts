// TypeScript Intermediate - Type Narrowing
// Practice narrowing types for safer type checking

// typeof type guards
function printValue(value: string | number): void {
  if (typeof value === "string") {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows value is number here
    console.log(value.toFixed(2));
  }
}

printValue("hello");
printValue(3.14159);

// Truthiness narrowing
function printLength(str: string | null | undefined): void {
  if (str) {
    // str is narrowed to string
    console.log("Length:", str.length);
  } else {
    console.log("No string provided");
  }
}

printLength("TypeScript");
printLength(null);

// Equality narrowing
function compare(x: string | number, y: string | boolean): void {
  if (x === y) {
    // Both must be strings here
    console.log(x.toUpperCase());
  }
}

// in operator narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird): void {
  if ("swim" in animal) {
    animal.swim();
  } else {
    animal.fly();
  }
}

const fish: Fish = { swim: () => console.log("Swimming...") };
const bird: Bird = { fly: () => console.log("Flying...") };

move(fish);
move(bird);

// instanceof narrowing
class Dog {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat {
  meow(): void {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());

// Custom type guards
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function isSquare(shape: Shape): shape is Square {
  return shape.kind === "square";
}

function getArea(shape: Shape): number {
  if (isCircle(shape)) {
    return Math.PI * shape.radius ** 2;
  }
  if (isSquare(shape)) {
    return shape.sideLength ** 2;
  }
  // Exhaustiveness checking
  const _exhaustive: never = shape;
  return _exhaustive;
}

const circle: Circle = { kind: "circle", radius: 5 };
const square: Square = { kind: "square", sideLength: 10 };

console.log("Circle area:", getArea(circle));
console.log("Square area:", getArea(square));

// Discriminated unions
type NetworkLoadingState = {
  state: "loading";
};

type NetworkFailedState = {
  state: "failed";
  code: number;
};

type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
  };
};

type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState;

function handleNetworkState(state: NetworkState): string {
  // We can't access response here since not all states have it
  // state.response;

  switch (state.state) {
    case "loading":
      return "Loading...";
    case "failed":
      return `Failed with code ${state.code}`;
    case "success":
      return `Downloaded ${state.response.title} in ${state.response.duration}ms`;
  }
}

console.log(handleNetworkState({ state: "loading" }));
console.log(handleNetworkState({ state: "failed", code: 404 }));
console.log(
  handleNetworkState({
    state: "success",
    response: { title: "Data", duration: 150 }
  })
);

// Array.isArray narrowing
function processValue(value: string | string[]): void {
  if (Array.isArray(value)) {
    // value is string[]
    console.log("Array length:", value.length);
    value.forEach((item) => console.log(item));
  } else {
    // value is string
    console.log("String:", value);
  }
}

processValue("hello");
processValue(["a", "b", "c"]);

// Type predicates with objects
interface Admin {
  name: string;
  privileges: string[];
}

interface User {
  name: string;
  email: string;
}

function isAdmin(user: Admin | User): user is Admin {
  return "privileges" in user;
}

function displayUser(user: Admin | User): void {
  console.log("Name:", user.name);
  
  if (isAdmin(user)) {
    console.log("Privileges:", user.privileges);
  } else {
    console.log("Email:", user.email);
  }
}

const admin: Admin = { name: "Alice", privileges: ["manage-users", "delete"] };
const regularUser: User = { name: "Bob", email: "bob@example.com" };

displayUser(admin);
displayUser(regularUser);

// Control flow analysis
function example(x: string | number | boolean) {
  if (typeof x === "string") {
    console.log(x.toUpperCase());
    return;
  }

  if (typeof x === "number") {
    console.log(x.toFixed(2));
    return;
  }

  // TypeScript knows x must be boolean here
  console.log(x ? "true" : "false");
}

example("hello");
example(42);
example(true);

// Nullish coalescing with narrowing
function processName(name: string | null | undefined): string {
  // Using nullish coalescing
  const validName = name ?? "Anonymous";
  return validName.toUpperCase(); // validName is always string
}

console.log(processName("Alice"));
console.log(processName(null));
console.log(processName(undefined));

// Optional chaining with narrowing
interface Response {
  data?: {
    user?: {
      name: string;
      email: string;
    };
  };
}

function getUserName(response: Response): string {
  // Optional chaining returns string | undefined
  const name = response.data?.user?.name;
  
  if (name) {
    // Narrowed to string
    return name.toUpperCase();
  }
  
  return "Unknown";
}

console.log(getUserName({ data: { user: { name: "Alice", email: "alice@example.com" } } }));
console.log(getUserName({ data: {} }));
console.log(getUserName({}));
