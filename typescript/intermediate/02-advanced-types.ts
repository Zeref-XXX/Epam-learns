// TypeScript Intermediate - Advanced Types
// Practice union types, intersection types, type guards, and more

// Union types
type RequestStatus = "success" | "error" | "loading";

function handleStatus(status: RequestStatus): string {
  switch (status) {
    case "success":
      return "Operation successful";
    case "error":
      return "Operation failed";
    case "loading":
      return "Operation in progress";
  }
}

console.log(handleStatus("success")); // OUTPUT: Operation successful

// Intersection types
interface Nameable {
  name: string;
}

interface Ageable {
  age: number;
}

type PersonType = Nameable & Ageable;

const personData: PersonType = {
  name: "Alice",
  age: 30
};

// Type guards
function isString(value: any): value is string {
  return typeof value === "string";
}

function isNumber(value: any): value is number {
  return typeof value === "number";
}

function processValue(value: string | number): string {
  if (isString(value)) {
    return value.toUpperCase();
  } else if (isNumber(value)) {
    return (value * 2).toString();
  }
  return "";
}

console.log(processValue("hello")); // OUTPUT: HELLO
console.log(processValue(21)); // OUTPUT: 42

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Rectangle | Triangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
  }
}

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 10, height: 20 };
const triangle: Triangle = { kind: "triangle", base: 10, height: 15 };

console.log("Circle area:", getArea(circle)); // OUTPUT: 78.53981633974483
console.log("Rectangle area:", getArea(rectangle)); // OUTPUT: 200
console.log("Triangle area:", getArea(triangle)); // OUTPUT: 75

// Conditional types
type IsString<T> = T extends string ? true : false;

type Test1 = IsString<string>; // true
type Test2 = IsString<number>; // false

// Mapped types
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

interface UserEntity {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUserEntity = MyReadonly<UserEntity>;
type NullableUserEntity = Nullable<UserEntity>;

// Template literal types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = `/api/${string}`;
type ApiRoute = `${HttpMethod} ${Endpoint}`;

const route1: ApiRoute = "GET /api/users";
const route2: ApiRoute = "POST /api/products";

// Index signatures
interface StringDictionary {
  [key: string]: string;
}

const translations: StringDictionary = {
  hello: "Hola",
  goodbye: "Adiós",
  thanks: "Gracias"
};

console.log(translations["hello"]);

// Function overloads
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine("Hello", " World")); // OUTPUT: Hello World
console.log(combine(10, 20)); // OUTPUT: 30

```
