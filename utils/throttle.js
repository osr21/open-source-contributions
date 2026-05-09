/**
 * Throttle a function to execute at most once per interval.
 * @param {Function} fn
 * @param {number} limit - Interval in ms
 * @returns {Function}
 */
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

module.exports = { throttle };
