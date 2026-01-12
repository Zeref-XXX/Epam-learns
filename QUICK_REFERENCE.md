# 🔍 Quick Reference Guide

Fast lookup for file contents and key concepts.

---

## 📂 File Structure Overview

```
Epam-learns/
├── LEARNING_GUIDE.md          ← Start here! Complete learning roadmap
├── QUICK_REFERENCE.md         ← This file - Quick lookup
├── README.md                  ← Project information
├── package.json               ← Project dependencies
├── tsconfig.json              ← TypeScript configuration
│
├── javascript/
│   ├── basics/
│   │   ├── 01-variables-and-types.js      ← Variables, data types, typeof
│   │   ├── 02-functions.js                ← Functions, arrow functions, parameters
│   │   ├── 03-objects-prototypes.js       ← Objects, prototypes, constructors
│   │   └── 04-classes.js                  ← ES6 classes, inheritance, private fields
│   │
│   ├── intermediate/
│   │   ├── 01-array-methods.js            ← map, filter, reduce, find, etc.
│   │   ├── 02-promises-async.js           ← Promises, async/await, Promise.all
│   │   └── 03-destructuring-spread.js     ← Destructuring, spread, rest operators
│   │
│   └── advanced/
│       ├── 01-closures-hof.js             ← Closures, currying, composition
│       └── 02-modules-patterns.js         ← Design patterns, module patterns
│
├── typescript/
│   ├── basics/
│   │   ├── 01-types-and-interfaces.ts     ← Basic types, interfaces, type aliases
│   │   ├── 02-classes.ts                  ← Typed classes, access modifiers
│   │   └── 03-functions.ts                ← Function types, overloading, generics
│   │
│   ├── intermediate/
│   │   ├── 01-generics.ts                 ← Generic types, constraints
│   │   ├── 02-advanced-types.ts           ← Union, intersection, mapped types
│   │   └── 03-type-narrowing.ts           ← Type guards, narrowing techniques
│   │
│   └── advanced/
│       ├── 01-decorators.ts               ← Class/method/property decorators
│       ├── 02-modules.ts                  ← Import/export, namespaces
│       └── 03-utility-types.ts            ← Partial, Pick, Omit, Record, etc.
│
└── myy/
    └── docs/
        ├── intro.md                       ← Learning outcomes
        └── modules.md                     ← Topic overview with resources
```

---

## 📋 Study Order (Quick View)

### Week 1: JavaScript Basics
1. Variables & Types → Functions → Objects & Prototypes → Classes

### Week 2: JavaScript Intermediate & Advanced  
2. Array Methods → Promises/Async → Destructuring/Spread
3. Closures/HOF → Module Patterns

### Week 3: TypeScript Basics
4. Types & Interfaces → Classes → Functions

### Week 4: TypeScript Intermediate & Advanced
5. Generics → Advanced Types → Type Narrowing
6. Decorators → Modules → Utility Types

---

## 🎯 Key Concepts by File

### JavaScript Basics

#### 01-variables-and-types.js
- `let`, `const`, `var` differences
- Primitive types: string, number, boolean, null, undefined
- Complex types: object, array
- `typeof` operator
- Template literals: `` `${variable}` ``

#### 02-functions.js
- Function declaration vs expression
- Arrow functions: `() => {}`
- Default parameters: `function(x = 5)`
- Rest parameters: `function(...args)`
- Return values

#### 03-objects-prototypes.js
- Object literals: `{ key: value }`
- Object methods: `keys()`, `values()`, `entries()`
- Constructor functions
- Prototype chain: `__proto__`
- `Object.create()`, `Object.defineProperty()`
- Getters/setters

#### 04-classes.js
- Class syntax: `class Name {}`
- Constructor: `constructor() {}`
- Inheritance: `extends`, `super()`
- Static methods: `static method() {}`
- Private fields: `#privateField`
- `instanceof` operator

---

### JavaScript Intermediate

#### 01-array-methods.js
- `map()` - Transform elements
- `filter()` - Keep matching elements
- `reduce()` - Combine to single value
- `find()` - First matching element
- `some()` - At least one matches
- `every()` - All match
- Method chaining

#### 02-promises-async.js
- Promise creation: `new Promise((resolve, reject) => {})`
- `.then()`, `.catch()`, `.finally()`
- `async`/`await` syntax
- `Promise.all()` - Parallel execution
- `Promise.race()` - First to complete
- Error handling with `try`/`catch`

#### 03-destructuring-spread.js
- Array destructuring: `[a, b] = array`
- Object destructuring: `{x, y} = obj`
- Rest operator: `[first, ...rest]`
- Spread operator: `[...arr1, ...arr2]`
- Default values in destructuring
- Immutable updates with spread

---

### JavaScript Advanced

#### 01-closures-hof.js
- Closures: Inner functions accessing outer scope
- Lexical scoping
- Currying: `f(a)(b)(c)`
- Composition: `compose(f, g, h)`
- Pipe: `pipe(f, g, h)`
- Memoization: Caching function results
- Higher-order functions

#### 02-modules-patterns.js
- IIFE: `(function() {})()`
- Module pattern
- Revealing module pattern
- Singleton pattern
- Factory pattern
- Observer pattern (Pub/Sub)
- Strategy pattern
- Namespace pattern

---

### TypeScript Basics

#### 01-types-and-interfaces.ts
- Basic types: `string`, `number`, `boolean`
- Arrays: `number[]`, `Array<string>`
- Tuples: `[string, number]`
- Enums: `enum Color { Red, Green }`
- Union types: `string | number`
- Interfaces: `interface User { name: string }`
- Type aliases: `type ID = string | number`
- Optional properties: `age?: number`
- Readonly: `readonly id: number`

#### 02-classes.ts
- Access modifiers: `public`, `private`, `protected`
- Constructor with properties: `constructor(public name: string)`
- Abstract classes: `abstract class Animal`
- Implementing interfaces: `class X implements Y`
- Inheritance with types

#### 03-functions.ts
- Parameter types: `(name: string) => void`
- Return types: `: number`, `: void`, `: never`
- Optional parameters: `(x?: number)`
- Default parameters: `(x = 5)`
- Rest parameters: `(...nums: number[])`
- Function overloading
- Generic functions: `<T>(arg: T) => T`
- Async return types: `Promise<User>`

---

### TypeScript Intermediate

#### 01-generics.ts
- Generic functions: `function identity<T>(x: T): T`
- Generic interfaces: `interface Box<T>`
- Generic classes: `class Container<T>`
- Constraints: `<T extends HasLength>`
- Multiple type parameters: `<K, V>`
- Generic utility patterns
- Built-in generics: `Array<T>`, `Promise<T>`

#### 02-advanced-types.ts
- Union types: `string | number`
- Intersection types: `A & B`
- Type guards: `typeof`, `instanceof`, `in`
- Discriminated unions with `kind`
- Conditional types: `T extends U ? X : Y`
- Mapped types: `{ [P in keyof T]: T[P] }`
- Template literal types: `` `${string}` ``
- Index signatures: `{ [key: string]: any }`

#### 03-type-narrowing.ts
- `typeof` guards
- `instanceof` guards
- `in` operator narrowing
- Truthiness narrowing
- Equality narrowing
- Custom type predicates: `x is Type`
- Discriminated unions
- Control flow analysis
- Exhaustiveness checking with `never`

---

### TypeScript Advanced

#### 01-decorators.ts
- Enable with: `"experimentalDecorators": true`
- Class decorators: `@sealed`
- Method decorators: `@log`
- Property decorators: `@readonly`
- Parameter decorators: `@required`
- Decorator factories: `@log(options)`
- Decorator composition

#### 02-modules.ts
- Named exports: `export const x`
- Default export: `export default class`
- Named imports: `import { x } from './file'`
- Default import: `import X from './file'`
- Namespace import: `import * as Utils from './file'`
- Re-export: `export * from './file'`
- Type-only imports: `import type { User }`
- Namespaces: `namespace App {}`
- Dynamic imports: `await import('./file')`

#### 03-utility-types.ts
- `Partial<T>` - All properties optional
- `Required<T>` - All properties required
- `Readonly<T>` - All properties readonly
- `Pick<T, K>` - Select specific properties
- `Omit<T, K>` - Exclude specific properties
- `Record<K, T>` - Object type with keys K
- `Exclude<T, U>` - Remove types from union
- `Extract<T, U>` - Extract types from union
- `NonNullable<T>` - Remove null/undefined
- `ReturnType<T>` - Get function return type
- `Parameters<T>` - Get function parameters
- `Awaited<T>` - Unwrap Promise type

---

## ⌨️ Common Commands

### Run JavaScript
```bash
node javascript/basics/01-variables-and-types.js
```

### Run TypeScript (after compilation)
```bash
# Compile TypeScript
npx tsc

# Run compiled JavaScript
node dist/typescript/basics/01-types-and-interfaces.js
```

### TypeScript Watch Mode
```bash
npx tsc --watch
```

### Run TypeScript directly (with ts-node)
```bash
npx ts-node typescript/basics/01-types-and-interfaces.ts
```

---

## 🔗 Quick Links

- **Main Guide**: [LEARNING_GUIDE.md](LEARNING_GUIDE.md)
- **Curriculum**: [myy/docs/intro.md](myy/docs/intro.md) & [myy/docs/modules.md](myy/docs/modules.md)
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/handbook/
- **MDN JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## 💾 Save Your Progress

Update this section as you complete files:

```
✅ = Completed and understood
🔄 = In progress
⏸️ = Paused/need to review
❌ = Not started

JavaScript Basics:
❌ 01-variables-and-types.js
❌ 02-functions.js
❌ 03-objects-prototypes.js
❌ 04-classes.js

JavaScript Intermediate:
❌ 01-array-methods.js
❌ 02-promises-async.js
❌ 03-destructuring-spread.js

JavaScript Advanced:
❌ 01-closures-hof.js
❌ 02-modules-patterns.js

TypeScript Basics:
❌ 01-types-and-interfaces.ts
❌ 02-classes.ts
❌ 03-functions.ts

TypeScript Intermediate:
❌ 01-generics.ts
❌ 02-advanced-types.ts
❌ 03-type-narrowing.ts

TypeScript Advanced:
❌ 01-decorators.ts
❌ 02-modules.ts
❌ 03-utility-types.ts
```

---

**Pro Tip**: Keep this file open while coding for quick reference! 📖
