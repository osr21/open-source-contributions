/**
 * Check whether a number is prime.
 */
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
  return true;
}

/**
 * Return all primes up to n using the Sieve of Eratosthenes.
 */
function sieve(n) {
  const composite = new Uint8Array(n + 1);
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (!composite[i]) {
      primes.push(i);
      for (let j = i * i; j <= n; j += i) composite[j] = 1;
    }
  }
  return primes;
}

module.exports = { isPrime, sieve };
