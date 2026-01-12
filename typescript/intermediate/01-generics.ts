// TypeScript Intermediate - Generics
// Practice using generic types for reusable code

// Generic function
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));

// Generic with type inference
console.log(identity("TypeScript")); // Type inferred as string

// Generic array function
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));

// Generic interface
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(value: T): void;
}

class Box<T> implements Container<T> {
  constructor(public value: T) {}

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const numberBox = new Box<number>(100);
console.log("Number box:", numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log("String box:", stringBox.getValue());

// Generic class with constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
  console.log("Length:", arg.length);
}

logLength("Hello"); // string has length
logLength([1, 2, 3]); // array has length
// logLength(42); // Error: number doesn't have length

// Generic with multiple type parameters
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

console.log(pair<string, number>("age", 30));
console.log(pair("name", "Alice")); // Type inference

// Generic utility types
interface UserData {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial - makes all properties optional
type PartialUserData = Partial<UserData>;

const updateUser: PartialUserData = {
  name: "New Name"
};

// Pick - select specific properties
type UserPublicInfo = Pick<UserData, "id" | "name" | "email">;

const publicUser: UserPublicInfo = {
  id: 1,
  name: "Bob",
  email: "bob@example.com"
};

// Omit - exclude specific properties
type UserWithoutPassword = Omit<UserData, "password">;

const safeUser: UserWithoutPassword = {
  id: 2,
  name: "Charlie",
  email: "charlie@example.com"
};

// Record - construct object type with specific key-value types
type PageInfo = Record<string, { title: string; url: string }>;

const pages: PageInfo = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" }
};

console.log("Pages:", pages);

// Generic array utilities
function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

const numList = [1, 2, 3, 4, 5];
const doubled = map(numList, n => n * 2);
const strList = map(numList, n => `Number: ${n}`);

console.log("Doubled:", doubled);
console.log("Strings:", strList);
