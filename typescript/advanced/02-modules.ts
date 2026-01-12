// TypeScript Advanced - Modules and Import/Export
// Practice ES6 modules with TypeScript

// Note: This file demonstrates module syntax. In practice, these would be separate files.

// ========== Named Exports ==========

// Export individual declarations
export const PI = 3.14159;
export const E = 2.71828;

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// Export interface
export interface User {
  id: number;
  name: string;
  email: string;
}

// Export type alias
export type UserRole = "admin" | "user" | "guest";

// Export class
export class Calculator {
  private history: string[] = [];

  add(a: number, b: number): number {
    const result = a + b;
    this.history.push(`${a} + ${b} = ${result}`);
    return result;
  }

  multiply(a: number, b: number): number {
    const result = a * b;
    this.history.push(`${a} * ${b} = ${result}`);
    return result;
  }

  getHistory(): string[] {
    return [...this.history];
  }
}

// ========== Export List ==========

const VERSION = "1.0.0";
const APP_NAME = "MyApp";

function formatDate(date: Date): string {
  return date.toISOString();
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export { VERSION, APP_NAME, formatDate, generateId };

// ========== Export with Rename ==========

function internalHelper(): void {
  console.log("Internal helper function");
}

export { internalHelper as helperFunction };

// ========== Default Export ==========

// Only one default export per module
export default class Database {
  private connection: string;

  constructor(connectionString: string) {
    this.connection = connectionString;
  }

  connect(): void {
    console.log(`Connecting to ${this.connection}`);
  }

  disconnect(): void {
    console.log("Disconnecting from database");
  }
}

// ========== Import Examples (as comments since we can't actually import in same file) ==========

/*
// Import named exports
import { add, subtract, User, Calculator } from './modules';

// Import with rename
import { add as sum, subtract as diff } from './modules';

// Import all as namespace
import * as MathUtils from './modules';
// Use as: MathUtils.add(5, 3)

// Import default export
import Database from './modules';
// or with rename:
import DB from './modules';

// Import both default and named
import Database, { User, Calculator } from './modules';

// Import for side effects only (executes module code)
import './modules';

// Import type only (TypeScript 3.8+)
import type { User } from './modules';

// Import types with named imports
import { type User, type UserRole, add } from './modules';
*/

// ========== Re-exporting ==========

/*
// Re-export all
export * from './otherModule';

// Re-export specific
export { User, Calculator } from './otherModule';

// Re-export with rename
export { User as AppUser } from './otherModule';

// Re-export default
export { default } from './otherModule';
export { default as DatabaseConnection } from './otherModule';
*/

// ========== Module Namespaces (Older TypeScript pattern) ==========

namespace Geometry {
  export interface Point {
    x: number;
    y: number;
  }

  export interface Shape {
    area(): number;
    perimeter(): number;
  }

  export class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
      return Math.PI * this.radius ** 2;
    }

    perimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }

  export class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
      return this.width * this.height;
    }

    perimeter(): number {
      return 2 * (this.width + this.height);
    }
  }

  // Internal/non-exported helper
  function calculateDistance(p1: Point, p2: Point): number {
    return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
  }
}

// Usage of namespace
const circle = new Geometry.Circle(5);
console.log("Circle area:", circle.area());

const rect = new Geometry.Rectangle(10, 20);
console.log("Rectangle area:", rect.area());

// ========== Nested Namespaces ==========

namespace App {
  export namespace Utils {
    export function log(message: string): void {
      console.log(`[LOG] ${message}`);
    }

    export function error(message: string): void {
      console.error(`[ERROR] ${message}`);
    }
  }

  export namespace API {
    export const BASE_URL = "https://api.example.com";

    export function get(endpoint: string): void {
      console.log(`GET ${BASE_URL}${endpoint}`);
    }

    export function post(endpoint: string, data: unknown): void {
      console.log(`POST ${BASE_URL}${endpoint}`, data);
    }
  }
}

// Usage
App.Utils.log("Application started");
App.API.get("/users");

// ========== Module Augmentation ==========

// This allows you to extend existing modules

/*
// Augment built-in types
declare global {
  interface Array<T> {
    first(): T | undefined;
    last(): T | undefined;
  }
}

Array.prototype.first = function() {
  return this[0];
};

Array.prototype.last = function() {
  return this[this.length - 1];
};

export {}; // Make this a module
*/

// ========== Dynamic Imports ==========

async function loadModule() {
  try {
    // Dynamic import returns a promise
    const module = await import("./someModule");
    module.someFunction();
  } catch (error) {
    console.error("Failed to load module:", error);
  }
}

// Conditional import
async function conditionalImport(condition: boolean) {
  if (condition) {
    const { heavyFunction } = await import("./heavyModule");
    heavyFunction();
  }
}

// ========== Practical Example Structure ==========

// Example of how modules might be organized:

/*
src/
  models/
    User.ts          -> export interface User, export class UserModel
    Product.ts       -> export interface Product, export class ProductModel
  services/
    userService.ts   -> import { User } from '../models/User'
    apiService.ts    -> export class ApiService
  utils/
    validators.ts    -> export function validateEmail, validatePassword
    formatters.ts    -> export function formatDate, formatCurrency
  config/
    constants.ts     -> export const API_URL, export const VERSION
  index.ts          -> export * from './services', export * from './models'
*/

console.log("\n=== Module Examples ===");
console.log("Calculator:", new Calculator().add(5, 3));
console.log("Constants:", VERSION, APP_NAME);
console.log("Generate ID:", generateId());
