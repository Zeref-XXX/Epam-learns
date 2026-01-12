// TypeScript Basics - Functions
// Practice different ways to type functions in TypeScript

// Basic function with types
function add(a: number, b: number): number {
  return a + b;
}

console.log("5 + 3 =", add(5, 3));

// Optional parameters
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));

// Default parameters
function createUser(name: string, age: number = 18, role: string = "user"): object {
  return { name, age, role };
}

console.log(createUser("Charlie"));
console.log(createUser("Dave", 25));
console.log(createUser("Eve", 30, "admin"));

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));

// Arrow functions
const multiply = (a: number, b: number): number => a * b;
const square = (n: number): number => n * n;

console.log("4 * 7 =", multiply(4, 7));
console.log("5 squared =", square(5));

// Function types
type MathOperation = (a: number, b: number) => number;

const divide: MathOperation = (a, b) => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};

const subtract: MathOperation = (a, b) => a - b;

console.log("10 / 2 =", divide(10, 2));
console.log("10 - 3 =", subtract(10, 3));

// Void return type
function logMessage(message: string): void {
  console.log("LOG:", message);
}

logMessage("This is a log message");

// Never return type (for functions that never return)
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // Infinite loop
  }
}

// Function overloading
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Invalid arguments");
}

console.log("Combine strings:", combine("Hello", " World"));
console.log("Combine numbers:", combine(10, 20));

// Generic functions
function identity<T>(arg: T): T {
  return arg;
}

function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

console.log(identity<string>("TypeScript"));
console.log(identity<number>(42));
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));

// Generic with constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): T {
  console.log("Length:", arg.length);
  return arg;
}

logLength("Hello");
logLength([1, 2, 3, 4]);
logLength({ length: 10, value: "test" });

// Callback types
type Callback = (result: string) => void;

function fetchData(url: string, callback: Callback): void {
  setTimeout(() => {
    callback(`Data from ${url}`);
  }, 1000);
}

fetchData("https://api.example.com", (result) => {
  console.log("Fetched:", result);
});

// Promise return types
async function getData(id: number): Promise<{ id: number; name: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: `User ${id}` });
    }, 500);
  });
}

getData(1).then((user) => console.log("User:", user));

// Function as parameter type
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
  return operation(a, b);
}

console.log("Apply add:", applyOperation(5, 3, (x, y) => x + y));
console.log("Apply multiply:", applyOperation(5, 3, (x, y) => x * y));

// This parameter type
interface User {
  name: string;
  greet(this: User): void;
}

const user: User = {
  name: "Alice",
  greet(this: User) {
    console.log(`Hello, I'm ${this.name}`);
  }
};

user.greet();

// Higher-order functions
function createMultiplier(multiplier: number): (n: number) => number {
  return (n: number) => n * multiplier;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

// Function with union types
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

console.log(formatValue("hello"));
console.log(formatValue(3.14159));

// Async function
async function fetchUsers(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Alice", "Bob", "Charlie"]);
    }, 1000);
  });
}

async function displayUsers() {
  const users = await fetchUsers();
  console.log("Users:", users);
}

displayUsers();
