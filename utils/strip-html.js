/**
 * Remove all HTML tags from a string.
 * stripHtml('<p>Hello <b>world</b></p>') => 'Hello world'
 */
function stripHtml(str) {
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Extract text content and trim whitespace.
 */
function extractText(html) {
  return stripHtml(html).replace(/s+/g, ' ').trim();
}

module.exports = { stripHtml, extractText };
