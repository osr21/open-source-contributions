/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate a URL.
 * @param {string} url
 * @returns {boolean}
 */
function isValidUrl(url) {
  try { new URL(url); return true; } catch { return false; }
}

module.exports = { isValidEmail, isValidUrl };
