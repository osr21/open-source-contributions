/**
 * Greatest Common Divisor (Euclidean algorithm).
 */
function gcd(a, b) { return b === 0 ? Math.abs(a) : gcd(b, a % b); }

/**
 * Least Common Multiple.
 */
function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); }

/**
 * GCD of an array of numbers.
 */
function gcdArray(arr) { return arr.reduce(gcd); }

/**
 * LCM of an array of numbers.
 */
function lcmArray(arr) { return arr.reduce(lcm); }

module.exports = { gcd, lcm, gcdArray, lcmArray };
