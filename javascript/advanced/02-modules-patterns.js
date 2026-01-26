// JavaScript Advanced - Module Patterns and Design Patterns
// Practice common design patterns and module systems

// IIFE (Immediately Invoked Function Expression) - Module Pattern
const counterModule = (function() {
  // Private variable
  let count = 0;

  // Private function
  function logCount() {
    console.log(`Current count: ${count}`);
  }

  // Public API
  return {
    increment: function() {
      count++;
      logCount();
      return count;
    },
    decrement: function() {
      count--;
      logCount();
      return count;
    },
    getCount: function() {
      return count;
    },
    reset: function() {
      count = 0;
      console.log("Count reset");
    }
  };
})();

console.log("=== Counter Module ==="); // OUTPUT: === Counter Module ===
counterModule.increment(); // OUTPUT: Current count: 1
counterModule.increment(); // OUTPUT: Current count: 2
counterModule.decrement(); // OUTPUT: Current count: 1
console.log("Final count:", counterModule.getCount()); // OUTPUT: Final count: 1
// console.log(counterModule.count); // undefined - private

// Revealing Module Pattern
const calculatorModule = (function() {
  // Private members
  const history = [];

  function add(a, b) {
    const result = a + b;
    recordHistory("add", a, b, result);
    return result;
  }

  function subtract(a, b) {
    const result = a - b;
    recordHistory("subtract", a, b, result);
    return result;
  }

  function multiply(a, b) {
    const result = a * b;
    recordHistory("multiply", a, b, result);
    return result;
  }

  function divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    const result = a / b;
    recordHistory("divide", a, b, result);
    return result;
  }

  function recordHistory(operation, a, b, result) {
    history.push({ operation, a, b, result });
  }

  function getHistory() {
    return [...history]; // Return copy
  }

  function clearHistory() {
    history.length = 0;
  }

  // Reveal public interface
  return {
    add,
    subtract,
    multiply,
    divide,
    getHistory,
    clearHistory
  };
})();

console.log("\n=== Calculator Module ==="); // OUTPUT: === Calculator Module ===
console.log("5 + 3 =", calculatorModule.add(5, 3)); // OUTPUT: 5 + 3 = 8
console.log("10 - 4 =", calculatorModule.subtract(10, 4)); // OUTPUT: 10 - 4 = 6
console.log("6 * 7 =", calculatorModule.multiply(6, 7)); // OUTPUT: 6 * 7 = 42
console.log("History:", calculatorModule.getHistory()); // OUTPUT: History: [ { operation: 'add', a: 5, b: 3, result: 8 }, ... ]

// Singleton Pattern
const DatabaseConnection = (function() {
  let instance;

  function createInstance() {
    return {
      host: "localhost",
      port: 5432,
      database: "myapp",
      connect: function() {
        console.log(`Connected to ${this.database} at ${this.host}:${this.port}`);
      },
      disconnect: function() {
        console.log("Disconnected from database");
      }
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

console.log("\n=== Singleton Pattern ==="); // OUTPUT: === Singleton Pattern ===
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log("Same instance?", db1 === db2); // OUTPUT: Same instance? true
db1.connect(); // OUTPUT: Connected to myapp at localhost:5432

// Factory Pattern
function createUser(type, name, email) {
  const user = {
    name,
    email,
    type
  };

  if (type === "admin") {
    user.permissions = ["read", "write", "delete"];
    user.canManageUsers = true;
  } else if (type === "editor") {
    user.permissions = ["read", "write"];
    user.canManageUsers = false;
  } else {
    user.permissions = ["read"];
    user.canManageUsers = false;
  }

  user.describe = function() {
    return `${this.type}: ${this.name} (${this.email})`;
  };

  return user;
}

console.log("\n=== Factory Pattern ==="); // OUTPUT: === Factory Pattern ===
const admin = createUser("admin", "Alice", "alice@example.com");
const editor = createUser("editor", "Bob", "bob@example.com");
const viewer = createUser("viewer", "Charlie", "charlie@example.com");

console.log(admin.describe(), admin.permissions); // OUTPUT: admin: Alice (alice@example.com) [ 'read', 'write', 'delete' ]
console.log(editor.describe(), editor.permissions); // OUTPUT: editor: Bob (bob@example.com) [ 'read', 'write' ]
console.log(viewer.describe(), viewer.permissions); // OUTPUT: viewer: Charlie (charlie@example.com) [ 'read' ]

// Observer Pattern (Pub/Sub)
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(...args));
    }
  }

  off(event, listenerToRemove) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(
        listener => listener !== listenerToRemove
      );
    }
  }
}

console.log("\n=== Observer Pattern ==="); // OUTPUT: === Observer Pattern ===
const emitter = new EventEmitter();

function onUserLogin(username) {
  console.log(`User logged in: ${username}`); // OUTPUT: User logged in: Alice
}

function sendWelcomeEmail(username) {
  console.log(`Sending welcome email to ${username}`); // OUTPUT: Sending welcome email to Alice
}

emitter.on("user:login", onUserLogin);
emitter.on("user:login", sendWelcomeEmail);

emitter.emit("user:login", "Alice");

// Strategy Pattern
const paymentStrategies = {
  creditCard: {
    pay: (amount) => {
      console.log(`Paid $${amount} using Credit Card`); // OUTPUT: Paid $100 using Credit Card
      return { success: true, method: "creditCard" };
    }
  },
  paypal: {
    pay: (amount) => {
      console.log(`Paid $${amount} using PayPal`); // OUTPUT: Paid $50 using PayPal
      return { success: true, method: "paypal" };
    }
  },
  crypto: {
    pay: (amount) => {
      console.log(`Paid $${amount} using Cryptocurrency`); // OUTPUT: Paid $200 using Cryptocurrency
      return { success: true, method: "crypto" };
    }
  }
};

class PaymentProcessor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  processPayment(amount) {
    return this.strategy.pay(amount);
  }
}

console.log("\n=== Strategy Pattern ==="); // OUTPUT: === Strategy Pattern ===
const processor = new PaymentProcessor(paymentStrategies.creditCard);
processor.processPayment(100);

processor.setStrategy(paymentStrategies.paypal);
processor.processPayment(50);

processor.setStrategy(paymentStrategies.crypto);
processor.processPayment(200);

// Namespace Pattern
const MyApp = MyApp || {};

MyApp.utils = {
  formatDate: (date) => date.toISOString(),
  generateId: () => Math.random().toString(36).substr(2, 9)
};

MyApp.api = {
  baseUrl: "https://api.example.com",
  get: (endpoint) => console.log(`GET ${MyApp.api.baseUrl}${endpoint}`),
  post: (endpoint, data) => console.log(`POST ${MyApp.api.baseUrl}${endpoint}`, data)
};

console.log("\n=== Namespace Pattern ==="); // OUTPUT: === Namespace Pattern ===
console.log("Generated ID:", MyApp.utils.generateId()); // OUTPUT: Generated ID: abc123xyz
MyApp.api.get("/users"); // OUTPUT: GET https://api.example.com/users
MyApp.api.post("/users", { name: "Alice" }); // OUTPUT: POST https://api.example.com/users { name: 'Alice' }

```
