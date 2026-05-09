/**
 * Parse a query string into an object.
 * @param {string} qs - e.g. "?foo=1&bar=2"
 * @returns {Object}
 */
function parseQueryString(qs) {
  return Object.fromEntries(new URLSearchParams(qs));
}

/**
 * Serialize an object into a query string.
 * @param {Object} params
 * @returns {string}
 */
function toQueryString(params) {
  return '?' + new URLSearchParams(params).toString();
}

module.exports = { parseQueryString, toQueryString };
