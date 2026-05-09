/**
 * Encode a string to base64.
 * Works in both Node.js and modern browsers.
 */
function encodeBase64(str) {
  if (typeof Buffer !== 'undefined') return Buffer.from(str).toString('base64');
  return btoa(unescape(encodeURIComponent(str)));
}

/**
 * Decode a base64 string.
 */
function decodeBase64(str) {
  if (typeof Buffer !== 'undefined') return Buffer.from(str, 'base64').toString('utf8');
  return decodeURIComponent(escape(atob(str)));
}

module.exports = { encodeBase64, decodeBase64 };
