/**
 * Capitalize the first letter of a string.
 */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Title-case a string.
 */
function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

/**
 * Truncate a string to a max length with ellipsis.
 */
function truncate(str, max = 50) {
  return str.length > max ? str.slice(0, max - 3) + '...' : str;
}

module.exports = { capitalize, titleCase, truncate };
