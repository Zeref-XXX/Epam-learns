// TypeScript Basics - Types and Interfaces
// Practice basic TypeScript type annotations and interfaces

// Basic types
let username: string = "John Doe";

let age: number = 30;
let isActive: boolean = true;
let userId: number | string = 123; // Union type

// Arrays
let numberList: number[] = [1, 2, 3, 4, 5];
// let stringList: string[] = ["hello", "world"];
let stringList: Array<string> = ["hello", "world"]; //genric type hai

// Tuples (smsya hai toda sa)
let personTuple: [string, number,string] = ["Alice", 25,"abhii"];

let custom:[string,boolean[]]=["hello",[true,false]]

// Enums (smsya hai)
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
interface Users {
  id: number;
  name: string;
  email: string;
  ages?: number; // Optional property
  readonly createdAt: Date; // Readonly property
}

const user1: Users = {
  id: 1,
  name: "Bob Smith",
  email: "bob@example.com",
  createdAt: new Date()
};
// Type alias //used for union  types
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };

// Function types
function addd(a: number = 0, b: number): number {
  return a+b;
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
console.log("User:", user1); // OUTPUT: { id: 1, name: 'Bob Smith', email: 'bob@example.com', createdAt: 2024-01-26T... }
console.log("Point:", point); // OUTPUT: { x: 10, y: 20 }
console.log("Addition:", addd(undefined, 3)); // OUTPUT: 3
console.log("Multiplication:", multiply(4, 7)); // OUTPUT: 28
console.log("Color enum:", favoriteColor); // OUTPUT: 2
console.log("UserStatus:", UserStatus.Active); // OUTPUT: ACTIVE

