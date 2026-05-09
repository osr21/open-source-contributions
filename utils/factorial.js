/**
 * Calculate the factorial of n (iterative, handles BigInt for large n).
 */
function factorial(n) {
  if (n < 0) throw new RangeError('n must be >= 0');
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

/**
 * Number of permutations: P(n, r) = n! / (n-r)!
 */
function permutations(n, r) { return factorial(n) / factorial(n - r); }

/**
 * Number of combinations: C(n, r) = n! / (r! * (n-r)!)
 */
function combinations(n, r) { return factorial(n) / (factorial(r) * factorial(n - r)); }

module.exports = { factorial, permutations, combinations };
