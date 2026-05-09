# Functional Programming Concepts

## Core Principles
1. **Pure functions** — same inputs always produce same outputs, no side effects
2. **Immutability** — never mutate data; return new values
3. **Function composition** — build complex behavior from small, focused functions
4. **Declarative style** — describe *what* to do, not *how*

## Key Techniques

### Map, Filter, Reduce
```js
const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(n => n % 2 === 0);         // [2, 4]
const doubled = evens.map(n => n * 2);               // [4, 8]
const total = doubled.reduce((acc, n) => acc + n, 0); // 12
```

### Currying
Transform a multi-argument function into a chain of single-argument functions.
```js
const add = a => b => a + b;
const add5 = add(5);
add5(3); // 8
```

### Pipe & Compose
See [utils/pipe.js](../utils/pipe.js) for implementation.

## Benefits
- Easier to test (pure functions are predictable)
- Easier to reason about (no hidden state)
- Naturally composable
