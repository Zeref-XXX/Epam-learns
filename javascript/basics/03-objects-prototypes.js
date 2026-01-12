// JavaScript Basics - Objects and Prototypes
// Practice working with objects and prototype-based inheritance

// Object literals
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log("Person:", person);
console.log("Full name:", person.fullName());

// Object methods
const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

user.greet();

// Object.keys, values, entries
const product = {
  name: "Laptop",
  price: 999,
  brand: "TechCorp"
};

console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

// Object destructuring
const { name, price } = product;
console.log("Destructured:", name, price);

// Spread operator with objects
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { ...baseConfig, language: "es", notifications: true };
console.log("Merged config:", userConfig);

// Constructor functions
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.greet = function() {
  return `Hello, I'm ${this.firstName} ${this.lastName}`;
};

Person.prototype.getBirthYear = function() {
  return new Date().getFullYear() - this.age;
};

const john = new Person("John", "Smith", 35);
console.log(john.greet());
console.log("Birth year:", john.getBirthYear());

// Prototype chain
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log("Rabbit eats:", rabbit.eats); // inherited
console.log("Rabbit jumps:", rabbit.jumps); // own property
rabbit.walk(); // inherited method

// hasOwnProperty vs in operator
console.log("Has own 'jumps':", rabbit.hasOwnProperty("jumps")); // true
console.log("Has own 'eats':", rabbit.hasOwnProperty("eats")); // false
console.log("'eats' in rabbit:", "eats" in rabbit); // true

// Object property descriptors
const obj = {};
Object.defineProperty(obj, "name", {
  value: "MyObject",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log("Object name:", obj.name);
// obj.name = "NewName"; // Won't work - not writable

// Object.assign
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);
console.log("Assigned result:", result); // { a: 1, b: 3, c: 5, d: 6 }

// Object.freeze and Object.seal
const frozen = Object.freeze({ value: 42 });
// frozen.value = 100; // Won't work
console.log("Frozen:", frozen);

const sealed = Object.seal({ count: 0 });
sealed.count = 10; // Works - can modify existing properties
// sealed.newProp = 5; // Won't work - can't add new properties
console.log("Sealed:", sealed);

// Getters and setters
const circle = {
  radius: 5,
  get area() {
    return Math.PI * this.radius ** 2;
  },
  get circumference() {
    return 2 * Math.PI * this.radius;
  },
  set diameter(value) {
    this.radius = value / 2;
  }
};

console.log("Circle area:", circle.area);
console.log("Circle circumference:", circle.circumference);
circle.diameter = 20;
console.log("New radius:", circle.radius);
