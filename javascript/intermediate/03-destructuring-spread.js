// JavaScript Intermediate - Destructuring and Spread/Rest Operators
// Practice modern ES6+ syntax for working with data

// Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log("First:", first); // OUTPUT: 1
console.log("Second:", second); // OUTPUT: 2
console.log("Rest:", rest); // OUTPUT: [ 3, 4, 5 ]

// Skipping elements
const [a, , c] = [10, 20, 30];
console.log("a:", a, "c:", c); // OUTPUT: a: 10 c: 30

// Default values in destructuring
const [x = 0, y = 0, z = 0] = [1, 2];
console.log("x:", x, "y:", y, "z:", z); // OUTPUT: x: 1 y: 2 z: 0

// Object destructuring
const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  age: 30
};

const { name, email } = user;
console.log("Name:", name); // OUTPUT: Alice
console.log("Email:", email); // OUTPUT: alice@example.com

// Renaming during destructuring
const { name: userName, age: userAge } = user;
console.log("User name:", userName); // OUTPUT: Alice
console.log("User age:", userAge); // OUTPUT: 30

// Default values in object destructuring
const { role = "user", status = "active" } = user;
console.log("Role:", role); // OUTPUT: user
console.log("Status:", status); // OUTPUT: active

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

console.log("Person:", personName); // OUTPUT: Bob
console.log("City:", city); // OUTPUT: New York
console.log("Coordinates:", lat, lng); // OUTPUT: 40.7128 -74.006

// Function parameter destructuring
function displayUser({ name, email, age = "Unknown" }) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}

displayUser({ name: "Charlie", email: "charlie@example.com", age: 25 }); // OUTPUT: Name: Charlie, Email: charlie@example.com, Age: 25
displayUser({ name: "Dave", email: "dave@example.com" }); // OUTPUT: Name: Dave, Email: dave@example.com, Age: Unknown

// Array spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined array:", combined); // OUTPUT: [ 1, 2, 3, 4, 5, 6 ]

// Adding elements with spread
const newArray = [0, ...arr1, 3.5, ...arr2, 7];
console.log("New array:", newArray); // OUTPUT: [ 0, 1, 2, 3, 3.5, 4, 5, 6, 7 ]

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log("Original:", original); // OUTPUT: [ 1, 2, 3 ]
console.log("Copy:", copy); // OUTPUT: [ 1, 2, 3, 4 ]

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
console.log("Settings:", settings); // OUTPUT: { theme: 'dark', fontSize: 14, language: 'en', notifications: true }

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

console.log("Updated product:", updatedProduct); // OUTPUT: { id: 1, name: 'Laptop', price: 899, inStock: true }

// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5)); // OUTPUT: 15
console.log("Sum of 10,20:", sum(10, 20)); // OUTPUT: 30

// Rest with other parameters
function multiply(multiplier, ...numbers) {
  return numbers.map(num => num * multiplier);
}

console.log("Multiply by 3:", multiply(3, 1, 2, 3, 4)); // OUTPUT: [ 3, 6, 9, 12 ]

// Combining multiple objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

const merged = { ...obj1, ...obj2, ...obj3 };
console.log("Merged objects:", merged); // OUTPUT: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

// Spreading strings
const str = "Hello";
const chars = [...str];
console.log("Characters:", chars); // OUTPUT: [ 'H', 'e', 'l', 'l', 'o' ]

// Practical example: Immutable array operations
const todos = [
  { id: 1, text: "Learn JavaScript", done: false },
  { id: 2, text: "Learn TypeScript", done: false }
];

// Add new todo
const newTodos = [...todos, { id: 3, text: "Build a project", done: false }];
console.log("New todos:", newTodos); // OUTPUT: [ { id: 1, done: false }, { id: 2, done: false }, { id: 3, done: false } ]

// Update a todo
const updatedTodos = todos.map(todo =>
  todo.id === 1 ? { ...todo, done: true } : todo
);
console.log("Updated todos:", updatedTodos); // OUTPUT: [ { id: 1, done: true }, { id: 2, done: false } ]

// Remove a todo
const filteredTodos = todos.filter(todo => todo.id !== 2);
console.log("Filtered todos:", filteredTodos); // OUTPUT: [ { id: 1, done: false } ]

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

console.log("Original state:", state.user.settings.theme); // OUTPUT: dark
console.log("New state:", newState.user.settings.theme); // OUTPUT: light

```
