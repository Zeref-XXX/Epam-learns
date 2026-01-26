// JavaScript Intermediate - Array Methods
// Practice working with array methods like map, filter, reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - transform each element
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // OUTPUT: [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// filter - keep only elements that match condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // OUTPUT: [ 2, 4, 6, 8, 10 ]

// reduce - combine all elements into single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // OUTPUT: 55

// find - get first element that matches condition
const firstGreaterThanFive = numbers.find(num => num > 5);
console.log("First > 5:", firstGreaterThanFive); // OUTPUT: 6

// some - check if at least one element matches
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log("Has even number:", hasEvenNumber); // OUTPUT: true

// every - check if all elements match
const allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive); // OUTPUT: true

// Chaining methods
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .reduce((acc, num) => acc + num, 0);
console.log("Chain result:", result); // OUTPUT: 48

// Working with objects
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 35, active: true }
];

const activeUsers = users.filter(user => user.active);
const userNames = users.map(user => user.name);
const totalAge = users.reduce((acc, user) => acc + user.age, 0);

console.log("Active users:", activeUsers); // OUTPUT: [ { name: 'Alice', age: 25, active: true }, { name: 'Charlie', age: 35, active: true } ]
console.log("User names:", userNames); // OUTPUT: [ 'Alice', 'Bob', 'Charlie' ]
console.log("Total age:", totalAge); // OUTPUT: 90

```
