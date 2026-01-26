// TypeScript Basics - Classes and Objects
// Practice object-oriented programming in TypeScript

// Basic class
class PersonClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
  }
}

// Class with access modifiers
class Employee {
  private id: number;
  public name: string;
  protected department: string;

  constructor(id: number, name: string, department: string) {
    this.id = id;
    this.name = name;
    this.department = department;
  }

  public getInfo(): string {
    return `Employee: ${this.name}, Department: ${this.department}`;
  }

  private getIdInternal(): number {
    return this.id;
  }
}

// Inheritance
class Manager extends Employee {
  private teamSize: number;

  constructor(id: number, name: string, department: string, teamSize: number) {
    super(id, name, department);
    this.teamSize = teamSize;
  }

  public getManagerInfo(): string {
    return `${this.getInfo()}, Team Size: ${this.teamSize}`;
  }

  // Can access protected members from parent
  public getDepartment(): string {
    return this.department;
  }
}

// Abstract class
abstract class Animal {
  constructor(public name: string) {}

  abstract makeSound(): string;

  move(): string {
    return `${this.name} is moving`;
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof! Woof!";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow!";
  }
}

// Interface implementation
interface Vehicle {
  brand: string;
  model: string;
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  start(): void {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  stop(): void {
    console.log(`${this.brand} ${this.model} is stopping...`);
  }
}

// Usage examples
const personInstance = new PersonClass("Alice", 30);
console.log(personInstance.greet()); // OUTPUT: Hello, my name is Alice and I'm 30 years old

const employee = new Employee(1, "Bob", "Engineering");
console.log(employee.getInfo()); // OUTPUT: Employee: Bob, Department: Engineering

const manager = new Manager(2, "Charlie", "Product", 5);
console.log(manager.getManagerInfo()); // OUTPUT: Manager: Charlie, Department: Product, Team Size: 5

const dog = new Dog("Buddy");
console.log(dog.makeSound()); // OUTPUT: Woof! Woof!
console.log(dog.move()); // OUTPUT: Buddy is moving

const car = new Car("Toyota", "Camry");
car.start(); // OUTPUT: Toyota Camry is starting...
car.stop(); // OUTPUT: Toyota Camry is stopping...

```
