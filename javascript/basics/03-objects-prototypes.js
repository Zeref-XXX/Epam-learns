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

console.log("Person:", person); // OUTPUT: { firstName: 'John', lastName: 'Doe', age: 30, fullName: [Function: fullName] }
console.log("Full name:", person.fullName()); // OUTPUT: John Doe

// Object methods
const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

user.greet(); // OUTPUT: Hello, I'm Alice

// Object.keys, values, entries
const product = {
  name: "Laptop",
  price: 999,
  brand: "TechCorp"
};

console.log("Keys:", Object.keys(product)); // OUTPUT: [ 'name', 'price', 'brand' ]
console.log("Values:", Object.values(product)); // OUTPUT: [ 'Laptop', 999, 'TechCorp' ]
console.log("Entries:", Object.entries(product)); // OUTPUT: [ [ 'name', 'Laptop' ], [ 'price', 999 ], [ 'brand', 'TechCorp' ] ]

// Object destructuring
const { name, price } = product;
console.log("Destructured:", name, price); // OUTPUT: Laptop 999

// Spread operator with objects
const baseConfig = { theme: "dark", language: "en" };
const userConfig = { ...baseConfig, language: "es", notifications: true };
console.log("Merged config:", userConfig); // OUTPUT: { theme: 'dark', language: 'es', notifications: true }

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
console.log(john.greet()); // OUTPUT: Hello, I'm John Smith
console.log("Birth year:", john.getBirthYear()); // OUTPUT: 1989

// Prototype chain
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks"); // OUTPUT: Animal walks
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log("Rabbit eats:", rabbit.eats); // OUTPUT: true (inherited)
console.log("Rabbit jumps:", rabbit.jumps); // OUTPUT: true (own property)
rabbit.walk(); // OUTPUT: Animal walks (inherited method)

// hasOwnProperty vs in operator
console.log("Has own 'jumps':", rabbit.hasOwnProperty("jumps")); // OUTPUT: true
console.log("Has own 'eats':", rabbit.hasOwnProperty("eats")); // OUTPUT: false
console.log("'eats' in rabbit:", "eats" in rabbit); // OUTPUT: true

// Object property descriptors
const obj = {};
Object.defineProperty(obj, "name", {
  value: "MyObject",
  writable: false,
  enumerable: true,
  configurable: false
});

console.log("Object name:", obj.name); // OUTPUT: MyObject
// obj.name = "NewName"; // Won't work - not writable

// Object.assign
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);
console.log("Assigned result:", result); // OUTPUT: { a: 1, b: 3, c: 5, d: 6 }

// Object.freeze and Object.seal
const frozen = Object.freeze({ value: 42 });
// frozen.value = 100; // Won't work
console.log("Frozen:", frozen); // OUTPUT: { value: 42 }

const sealed = Object.seal({ count: 0 });
sealed.count = 10; // Works - can modify existing properties
// sealed.newProp = 5; // Won't work - can't add new properties
console.log("Sealed:", sealed); // OUTPUT: { count: 10 }

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

/* OUTPUT:
Person: { firstName: 'John', lastName: 'Doe', age: 30, fullName: [Function: fullName] }
Full name: John Doe
Hello, I'm Alice
Keys: [ 'name', 'price', 'brand' ]
Values: [ 'Laptop', 999, 'TechCorp' ]
Entries: [ [ 'name', 'Laptop' ], [ 'price', 999 ], [ 'brand', 'TechCorp' ] ]
Destructured: Laptop 999
Merged config: { theme: 'es', language: 'es', notifications: true }
Hello, I'm John Smith
Birth year: 1989
Rabbit eats: true
Rabbit jumps: true
Animal walks
Has own 'jumps': true
Has own 'eats': false
'eats' in rabbit: true
Object name: MyObject
Assigned result: { a: 1, b: 3, c: 5, d: 6 }
Frozen: { value: 42 }
Sealed: { count: 10 }
Circle area: 78.53981633974483
Circle circumference: 31.41592653589793
New radius: 10
*/
