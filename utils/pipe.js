/**
 * Pipe functions left to right.
 * pipe(f, g, h)(x) === h(g(f(x)))
 */
function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x);
}

/**
 * Compose functions right to left.
 * compose(f, g, h)(x) === f(g(h(x)))
 */
function compose(...fns) {
  return (x) => fns.reduceRight((v, f) => f(v), x);
}

module.exports = { pipe, compose };
