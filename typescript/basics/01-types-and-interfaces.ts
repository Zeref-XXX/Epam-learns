// TypeScript Basics - Types and Interfaces
// Practice basic TypeScript type annotations and interfaces

// Basic types
let username: string = "John Doe";
let age: number = 30;
let isActive: boolean = true;
let userId: number | string = 123; // Union type

// Arrays
let numberList: number[] = [1, 2, 3, 4, 5];
let stringList: Array<string> = ["hello", "world"];

// Tuples
let personTuple: [string, number] = ["Alice", 25];

// Enums
enum Color {
  Red,
  Green,
  Blue
}
let favoriteColor: Color = Color.Blue;

enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING"
}

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Readonly property
}

const user: User = {
  id: 1,
  name: "Bob Smith",
  email: "bob@example.com",
  createdAt: new Date()
};

// Type alias
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };

// Function types
function add(a: number, b: number): number {
  return a + b;
}

const multiply: (a: number, b: number) => number = (a, b) => a * b;

// Interface for functions
interface MathOperation {
  (a: number, b: number): number;
}

const divide: MathOperation = (a, b) => a / b;

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// Console outputs
console.log("User:", user);
console.log("Point:", point);
console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(4, 7));
console.log("Color enum:", favoriteColor);
console.log("UserStatus:", UserStatus.Active);
