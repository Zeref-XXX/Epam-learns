// TypeScript Advanced - Decorators
// Practice using decorators for metaprogramming (requires experimentalDecorators)

// Note: To use decorators, add "experimentalDecorators": true to tsconfig.json

// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with args:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Result:`, result);
    return result;
  };

  return descriptor;
}

// Property decorator
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

// Parameter decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex} of ${propertyKey} is required`);
}

// Usage example
@sealed
class Calculator {
  @readonly
  version: string = "1.0.0";

  @log
  add(a: number, b: number): number {
    return a + b;
  }

  @log
  multiply(@required a: number, @required b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(calc.multiply(4, 7));

// Factory decorator
function logExecution(showArgs: boolean = true) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (showArgs) {
        console.log(`Executing ${propertyKey} with:`, args);
      } else {
        console.log(`Executing ${propertyKey}`);
      }
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

class Service {
  @logExecution(true)
  process(data: string): string {
    return data.toUpperCase();
  }

  @logExecution(false)
  save(data: string): void {
    console.log("Saving:", data);
  }
}

const service = new Service();
service.process("hello");
service.save("world");

// Multiple decorators
function first() {
  console.log("First decorator factory");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("First decorator called");
  };
}

function second() {
  console.log("Second decorator factory");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Second decorator called");
  };
}

class Example {
  @first()
  @second()
  method() {
    console.log("Method called");
  }
}
