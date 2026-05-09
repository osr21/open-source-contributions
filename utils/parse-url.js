/**
 * Parse a URL string into its components.
 * @param {string} url
 * @returns {URL}
 */
function parseUrl(url) {
  return new URL(url);
}

/**
 * Build a URL from a base and query params.
 * @param {string} base
 * @param {Object} params
 * @returns {string}
 */
function buildUrl(base, params = {}) {
  const url = new URL(base);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return url.toString();
}

/**
 * Get a specific query param from a URL string.
 * @param {string} url
 * @param {string} key
 * @returns {string|null}
 */
function getParam(url, key) {
  return new URL(url).searchParams.get(key);
}

module.exports = { parseUrl, buildUrl, getParam };
