/**
 * Return the nth Fibonacci number (0-indexed).
 * fibonacci(10) => 55
 */
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

/**
 * Return the first n Fibonacci numbers as an array.
 */
function fibonacciSequence(n) {
  const seq = [];
  for (let i = 0; i < n; i++) seq.push(fibonacci(i));
  return seq;
}

/**
 * Check if a number is in the Fibonacci sequence.
 */
function isFibonacci(n) {
  const isPerfectSquare = x => Math.sqrt(x) % 1 === 0;
  return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

module.exports = { fibonacci, fibonacciSequence, isFibonacci };
