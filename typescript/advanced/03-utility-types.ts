// TypeScript Advanced - Utility Types
// Practice built-in utility types for type transformations

// Base interfaces for examples
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  isActive: boolean;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  inStock: boolean;
}

// ========== Partial<T> ==========
// Makes all properties optional

type PartialUser = Partial<User>;

const updateUser: PartialUser = {
  name: "Alice",
  email: "alice@example.com"
  // Other properties are optional
};

console.log("Partial User:", updateUser);

// ========== Required<T> ==========
// Makes all properties required

interface OptionalConfig {
  host?: string;
  port?: number;
  ssl?: boolean;
}

type RequiredConfig = Required<OptionalConfig>;

const config: RequiredConfig = {
  host: "localhost",
  port: 3000,
  ssl: true
  // All properties are now required
};

console.log("Required Config:", config);

// ========== Readonly<T> ==========
// Makes all properties readonly

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  id: 1,
  name: "Bob",
  email: "bob@example.com",
  password: "secret",
  age: 30,
  isActive: true
};

// user.name = "Charlie"; // Error: Cannot assign to 'name' because it is a read-only property

console.log("Readonly User:", user.name);

// ========== Pick<T, K> ==========
// Creates type by picking specific properties

type UserPreview = Pick<User, "id" | "name" | "email">;

const preview: UserPreview = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
  // password, age, isActive are not included
};

console.log("User Preview:", preview);

// ========== Omit<T, K> ==========
// Creates type by omitting specific properties

type UserWithoutPassword = Omit<User, "password">;

const safeUser: UserWithoutPassword = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
  age: 25,
  isActive: true
  // password is omitted
};

console.log("Safe User:", safeUser);

// ========== Record<K, T> ==========
// Constructs object type with keys K and values T

type UserRole = "admin" | "user" | "guest";

type RolePermissions = Record<UserRole, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

console.log("Permissions:", permissions);

// Record with string keys
type PageInfo = Record<string, { title: string; url: string }>;

const pages: PageInfo = {
  home: { title: "Home", url: "/" },
  about: { title: "About", url: "/about" },
  contact: { title: "Contact", url: "/contact" }
};

console.log("Pages:", pages);

// ========== Exclude<T, U> ==========
// Excludes types from union

type AllStatus = "pending" | "active" | "inactive" | "deleted";
type ActiveStatus = Exclude<AllStatus, "deleted">;

const status: ActiveStatus = "active";
// const deleted: ActiveStatus = "deleted"; // Error

console.log("Active Status:", status);

// ========== Extract<T, U> ==========
// Extracts types from union

type AllTypes = string | number | boolean | null;
type PrimitiveTypes = Extract<AllTypes, string | number>;

const value: PrimitiveTypes = "hello";
// const nullValue: PrimitiveTypes = null; // Error

console.log("Primitive Value:", value);

// ========== NonNullable<T> ==========
// Removes null and undefined from type

type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;

const str: DefiniteString = "Hello";
// const nullStr: DefiniteString = null; // Error

console.log("Definite String:", str);

// ========== ReturnType<T> ==========
// Gets return type of function

function getUser() {
  return {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
  };
}

type UserType = ReturnType<typeof getUser>;

const retrievedUser: UserType = {
  id: 2,
  name: "Bob",
  email: "bob@example.com"
};

console.log("Retrieved User:", retrievedUser);

// ========== Parameters<T> ==========
// Gets parameter types as tuple

function createProduct(id: number, title: string, price: number) {
  return { id, title, price };
}

type CreateProductParams = Parameters<typeof createProduct>;

const params: CreateProductParams = [1, "Laptop", 999];
const product = createProduct(...params);

console.log("Product:", product);

// ========== ConstructorParameters<T> ==========
// Gets constructor parameter types

class Person {
  constructor(public name: string, public age: number) {}
}

type PersonParams = ConstructorParameters<typeof Person>;

const personParams: PersonParams = ["Alice", 30];
const person = new Person(...personParams);

console.log("Person:", person);

// ========== InstanceType<T> ==========
// Gets instance type of constructor

type PersonInstance = InstanceType<typeof Person>;

const instance: PersonInstance = new Person("Bob", 25);

console.log("Instance:", instance);

// ========== Awaited<T> ==========
// Unwraps Promise types

type AsyncUser = Promise<User>;
type UnwrappedUser = Awaited<AsyncUser>;

async function fetchUser(): Promise<User> {
  return {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    password: "secret",
    age: 30,
    isActive: true
  };
}

// ========== Combining Utility Types ==========

// Partial + Pick
type PartialUserUpdate = Partial<Pick<User, "name" | "email" | "age">>;

const userUpdate: PartialUserUpdate = {
  name: "Charlie"
};

// Readonly + Omit
type ReadonlyUserPreview = Readonly<Omit<User, "password">>;

const readonlyPreview: ReadonlyUserPreview = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30,
  isActive: true
};

// Record with Pick
type UserStatusMap = Record<number, Pick<User, "name" | "isActive">>;

const userStatuses: UserStatusMap = {
  1: { name: "Alice", isActive: true },
  2: { name: "Bob", isActive: false }
};

console.log("User Statuses:", userStatuses);

// ========== Custom Utility Types ==========

// Deep Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface Config {
  database: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
  api: {
    baseUrl: string;
    timeout: number;
  };
}

type PartialConfig = DeepPartial<Config>;

const partialConfig: PartialConfig = {
  database: {
    host: "localhost"
    // Other nested properties are optional
  }
};

console.log("Partial Config:", partialConfig);

// Mutable (opposite of Readonly)
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type ReadonlyPerson = {
  readonly name: string;
  readonly age: number;
};

type MutablePerson = Mutable<ReadonlyPerson>;

const mutablePerson: MutablePerson = {
  name: "Alice",
  age: 30
};

mutablePerson.name = "Bob"; // Now mutable
console.log("Mutable Person:", mutablePerson);

// ========== Practical Examples ==========

// API Response type from existing types
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
};

type UserResponse = ApiResponse<Omit<User, "password">>;

const apiResponse: UserResponse = {
  data: {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    age: 30,
    isActive: true
  },
  status: 200,
  message: "Success",
  timestamp: new Date()
};

console.log("API Response:", apiResponse);

// Form state
type FormState<T> = {
  values: Partial<T>;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
};

type UserFormState = FormState<User>;

const formState: UserFormState = {
  values: {
    name: "Alice",
    email: "alice@example.com"
  },
  errors: {
    email: "Invalid email format"
  },
  touched: {
    name: true,
    email: true
  }
};

console.log("Form State:", formState);
