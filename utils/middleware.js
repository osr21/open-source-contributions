/**
 * Compose a chain of middleware functions (koa/express style).
 * Each middleware receives (ctx, next) and calls next() to continue.
 */
function compose(middlewares) {
  return function (ctx) {
    let index = -1;
    function dispatch(i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'));
      index = i;
      const fn = middlewares[i];
      if (!fn) return Promise.resolve();
      return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
    }
    return dispatch(0);
  };
}

module.exports = { compose };
