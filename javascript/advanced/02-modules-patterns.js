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

console.log("=== Counter Module ===");
counterModule.increment();
counterModule.increment();
counterModule.decrement();
console.log("Final count:", counterModule.getCount());
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

console.log("\n=== Calculator Module ===");
console.log("5 + 3 =", calculatorModule.add(5, 3));
console.log("10 - 4 =", calculatorModule.subtract(10, 4));
console.log("6 * 7 =", calculatorModule.multiply(6, 7));
console.log("History:", calculatorModule.getHistory());

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

console.log("\n=== Singleton Pattern ===");
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log("Same instance?", db1 === db2); // true
db1.connect();

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

console.log("\n=== Factory Pattern ===");
const admin = createUser("admin", "Alice", "alice@example.com");
const editor = createUser("editor", "Bob", "bob@example.com");
const viewer = createUser("viewer", "Charlie", "charlie@example.com");

console.log(admin.describe(), admin.permissions);
console.log(editor.describe(), editor.permissions);
console.log(viewer.describe(), viewer.permissions);

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

console.log("\n=== Observer Pattern ===");
const emitter = new EventEmitter();

function onUserLogin(username) {
  console.log(`User logged in: ${username}`);
}

function sendWelcomeEmail(username) {
  console.log(`Sending welcome email to ${username}`);
}

emitter.on("user:login", onUserLogin);
emitter.on("user:login", sendWelcomeEmail);

emitter.emit("user:login", "Alice");

// Strategy Pattern
const paymentStrategies = {
  creditCard: {
    pay: (amount) => {
      console.log(`Paid $${amount} using Credit Card`);
      return { success: true, method: "creditCard" };
    }
  },
  paypal: {
    pay: (amount) => {
      console.log(`Paid $${amount} using PayPal`);
      return { success: true, method: "paypal" };
    }
  },
  crypto: {
    pay: (amount) => {
      console.log(`Paid $${amount} using Cryptocurrency`);
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

console.log("\n=== Strategy Pattern ===");
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

console.log("\n=== Namespace Pattern ===");
console.log("Generated ID:", MyApp.utils.generateId());
MyApp.api.get("/users");
MyApp.api.post("/users", { name: "Alice" });
