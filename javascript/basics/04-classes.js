// JavaScript Basics - ES6 Classes
// Practice using modern JavaScript class syntax

// Basic class
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  describe() {
    return `${this.name} is a ${this.species}`;
  }
}

const animal = new Animal("Generic", "Unknown");
animal.speak(); // OUTPUT: Generic makes a sound
console.log(animal.describe()); // OUTPUT: Generic is a Unknown

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks: Woof!`); // OUTPUT: Buddy barks: Woof!
  }

  fetch() {
    console.log(`${this.name} is fetching the ball`); // OUTPUT: Buddy is fetching the ball
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
dog.fetch();
console.log(dog.describe()); // OUTPUT: Buddy is a Dog

// Static methods and properties
class MathHelper {
  static PI = 3.14159;

  static circleArea(radius) {
    return this.PI * radius ** 2;
  }

  static rectangleArea(width, height) {
    return width * height;
  }
}

console.log("Circle area:", MathHelper.circleArea(5)); // OUTPUT: 78.53981633974483
console.log("Rectangle area:", MathHelper.rectangleArea(10, 20)); // OUTPUT: 200
console.log("PI:", MathHelper.PI); // OUTPUT: 3.14159

// Getters and setters
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }

  set dimensions({ width, height }) {
    this.width = width;
    this.height = height;
  }
}

const rect = new Rectangle(10, 5);
console.log("Rectangle area:", rect.area); // OUTPUT: 50
console.log("Rectangle perimeter:", rect.perimeter); // OUTPUT: 30

rect.dimensions = { width: 20, height: 10 };
console.log("New area:", rect.area); // OUTPUT: 200

// Private fields (ES2022)
class BankAccount {
  #balance = 0; // Private field

  constructor(accountHolder, initialBalance) {
    this.accountHolder = accountHolder;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500); // OUTPUT: Deposited $500. New balance: $1500
account.withdraw(200); // OUTPUT: Withdrew $200. New balance: $1300
console.log("Current balance:", account.getBalance()); // OUTPUT: 1300
// console.log(account.#balance); // Error: Private field

// Class expressions
const Person = class {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const person = new Person("Bob");
person.greet();

// Inheritance with multiple methods
class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.brand} ${this.model}`;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, numDoors) {
    super(brand, model, year);
    this.numDoors = numDoors;
  }

  honk() {
    console.log("Beep beep!");
  }

  getInfo() {
    return `${super.getInfo()} with ${this.numDoors} doors`;
  }
}

const car = new Car("Toyota", "Camry", 2023, 4);
console.log(car.getInfo()); // OUTPUT: 2023 Toyota Camry with 4 doors
car.start(); // OUTPUT: Toyota Camry is starting...
car.honk(); // OUTPUT: Beep beep!

// Instance checking
console.log("car instanceof Car:", car instanceof Car); // OUTPUT: true
console.log("car instanceof Vehicle:", car instanceof Vehicle); // OUTPUT: true
console.log("dog instanceof Dog:", dog instanceof Dog); // OUTPUT: true
console.log("dog instanceof Animal:", dog instanceof Animal); // OUTPUT: true

/* OUTPUT:
Generic makes a sound
Generic is a Unknown
Buddy barks: Woof!
Buddy is fetching the ball
Buddy is a Dog
Circle area: 78.53981633974483
Rectangle area: 200
PI: 3.14159
Rectangle area: 50
Rectangle perimeter: 30
New area: 200
Deposited $500. New balance: $1500
Withdrew $200. New balance: $1300
Current balance: 1300
Hi, I'm Bob
2023 Toyota Camry with 4 doors
2023 Toyota Camry is starting...
Beep beep!
car instanceof Car: true
car instanceof Vehicle: true
dog instanceof Dog: true
dog instanceof Animal: true
*/
