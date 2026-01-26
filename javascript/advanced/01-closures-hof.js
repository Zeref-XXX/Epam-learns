// JavaScript Advanced - Closures and Higher Order Functions
// Practice advanced concepts like closures, currying, and function composition

// Closure example
function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // OUTPUT: 1
console.log(counter.increment()); // OUTPUT: 2
console.log(counter.getCount());  // OUTPUT: 2
console.log(counter.decrement()); // OUTPUT: 1

// Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // OUTPUT: 24
console.log(curriedMultiply(2, 3)(4)); // OUTPUT: 24
console.log(curriedMultiply(2)(3, 4)); // OUTPUT: 24

// Function composition
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const composedFn = compose(square, double, addOne);
const pipedFn = pipe(addOne, double, square);

console.log(composedFn(3)); // OUTPUT: 64 (square(double(addOne(3))) = square(8) = 64)
console.log(pipedFn(3));    // OUTPUT: 64 (square(double(addOne(3))) = square(8) = 64)

// Memoization
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      console.log("Cache hit for:", key);
      return cache.get(key);
    }
    
    console.log("Computing for:", key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Computes // OUTPUT: 55
console.log(fibonacci(10)); // Cache hit // OUTPUT: 55

/* OUTPUT:
1
2
2
1
64
64
Computing for: [10]
55
Cache hit for: [10]
55
*/

```
