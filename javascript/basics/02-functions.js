// JavaScript Basics - Functions
// Practice different ways to create and use functions

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with multiple statements
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};

// Function with default parameters
function introduce(name, age = 25) {
  return `My name is ${name} and I am ${age} years old`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Examples
console.log(greet("Alice")); // Hello, Alice!
console.log(add(5, 3)); // 8
console.log(multiply(4, 7)); // 28
console.log(divide(10, 2)); // 5
console.log(introduce("Bob")); // My name is Bob and I am 25 years old
console.log(introduce("Charlie", 30)); // My name is Charlie and I am 30 years old
console.log(sum(1, 2, 3, 4, 5)); // 15
