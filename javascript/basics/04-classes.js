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
animal.speak();
console.log(animal.describe());

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog"); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks: Woof!`);
  }

  fetch() {
    console.log(`${this.name} is fetching the ball`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.speak();
dog.fetch();
console.log(dog.describe());

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

console.log("Circle area:", MathHelper.circleArea(5));
console.log("Rectangle area:", MathHelper.rectangleArea(10, 20));
console.log("PI:", MathHelper.PI);

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
console.log("Rectangle area:", rect.area);
console.log("Rectangle perimeter:", rect.perimeter);

rect.dimensions = { width: 20, height: 10 };
console.log("New area:", rect.area);

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
account.deposit(500);
account.withdraw(200);
console.log("Current balance:", account.getBalance());
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
console.log(car.getInfo());
car.start();
car.honk();

// Instance checking
console.log("car instanceof Car:", car instanceof Car); // true
console.log("car instanceof Vehicle:", car instanceof Vehicle); // true
console.log("dog instanceof Dog:", dog instanceof Dog); // true
console.log("dog instanceof Animal:", dog instanceof Animal); // true
