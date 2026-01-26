// JavaScript Basics - Variables and Data Types
// Practice various ways to declare variables and work with data types

// Variable declarations
let myName = "John";
const PI = 3.14159;
var oldStyleVariable = "deprecated";

// Data types
let string = "Hello World";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let array = [1, 2, 3, 4, 5];
let object = {
  name: "JavaScript",
  type: "Programming Language",
  year: 1995
};

// Type checking
console.log("Type of string:", typeof string); // Type of string: string
console.log("Type of number:", typeof number); // Type of number: number
console.log("Type of boolean:", typeof boolean); // Type of boolean: boolean
console.log("Type of array:", typeof array); // Note: returns 'object' => Type of array: object
console.log("Is array?:", Array.isArray(array)); // Is array?: true

// Basic operations
console.log("String concatenation:", "Hello" + " " + "World"); // String concatenation: Hello World
console.log("Number addition:", 10 + 20); // Number addition: 30
console.log("Boolean logic:", true && false); // Boolean logic: false

// Template literals
const templateString = `Hello, my name is ${myName}`;
console.log(templateString); // Hello, my name is John
