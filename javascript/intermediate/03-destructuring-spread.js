// JavaScript Intermediate - Destructuring and Spread/Rest Operators
// Practice modern ES6+ syntax for working with data

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

// Skipping elements
const [a, , c] = [10, 20, 30];
console.log("a:", a, "c:", c);

// Default values in destructuring
const [x = 0, y = 0, z = 0] = [1, 2];
console.log("x:", x, "y:", y, "z:", z);

// Object destructuring
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30
};

const { name, email } = user;
console.log("Name:", name);
console.log("Email:", email);

// Renaming during destructuring
const { name: userName, age: userAge } = user;
console.log("User name:", userName);
console.log("User age:", userAge);

// Default values in object destructuring
const { role = "user", status = "active" } = user;
console.log("Role:", role);
console.log("Status:", status);

// Nested destructuring
const person = {
  name: "Bob",
  address: {
    city: "New York",
    country: "USA",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

const {
  name: personName,
  address: {
    city,
    coordinates: { lat, lng }
  }
} = person;

console.log("Person:", personName);
console.log("City:", city);
console.log("Coordinates:", lat, lng);

// Function parameter destructuring
function displayUser({ name, email, age = "Unknown" }) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}

displayUser({ name: "Charlie", email: "charlie@example.com", age: 25 });
displayUser({ name: "Dave", email: "dave@example.com" });

// Array spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined);

// Adding elements with spread
const newArray = [0, ...arr1, 3.5, ...arr2, 7];
console.log("New array:", newArray);

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("Original:", original);
console.log("Copy:", copy);

// Object spread operator
const defaults = {
  theme: "light",
  fontSize: 14,
  language: "en"
};

const userPrefs = {
  theme: "dark",
  notifications: true
};

const settings = { ...defaults, ...userPrefs };
console.log("Settings:", settings);

// Spread with object updates
const product = {
  id: 1,
  name: "Laptop",
  price: 999
};

const updatedProduct = {
  ...product,
  price: 899,
  inStock: true
};

console.log("Updated product:", updatedProduct);

// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5));
console.log("Sum of 10,20:", sum(10, 20));

// Rest with other parameters
function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log("Multiply by 3:", multiply(3, 1, 2, 3, 4));

// Combining multiple objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const merged = { ...obj1, ...obj2, ...obj3 };
console.log("Merged objects:", merged);

// Spreading strings
const str = "Hello";
const chars = [...str];
console.log("Characters:", chars);

// Practical example: Immutable array operations
const todos = [
  { id: 1, text: "Learn JavaScript", done: false },
  { id: 2, text: "Learn TypeScript", done: false }
];

// Add new todo
const newTodos = [...todos, { id: 3, text: "Build a project", done: false }];
console.log("New todos:", newTodos);

// Update a todo
const updatedTodos = todos.map(todo =>
  todo.id === 1 ? { ...todo, done: true } : todo
);
console.log("Updated todos:", updatedTodos);

// Remove a todo
const filteredTodos = todos.filter(todo => todo.id !== 2);
console.log("Filtered todos:", filteredTodos);

// Practical example: Immutable object updates
const state = {
  user: {
    name: "Alice",
    settings: {
      theme: "dark",
      notifications: true
    }
  },
  isLoggedIn: true
};

// Update nested property immutably
const newState = {
  ...state,
  user: {
    ...state.user,
    settings: {
      ...state.user.settings,
      theme: "light"
    }
  }
};

console.log("Original state:", state.user.settings.theme);
console.log("New state:", newState.user.settings.theme);
