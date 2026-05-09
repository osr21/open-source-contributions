/**
 * Split a string into chunks of a given size.
 * @param {string} str
 * @param {number} size
 * @returns {string[]}
 */
function chunkString(str, size) {
  const chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }
  return chunks;
}

/**
 * Split a string into lines.
 * @param {string} str
 * @returns {string[]}
 */
function splitLines(str) {
  return str.split(/?
/);
}

/**
 * Wrap a string at a given column width.
 * @param {string} str
 * @param {number} width
 * @returns {string}
 */
function wordWrap(str, width = 80) {
  const words = str.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    if ((current + word).length > width) { lines.push(current.trim()); current = ''; }
    current += word + ' ';
  }
  if (current.trim()) lines.push(current.trim());
  return lines.join('
');
}

module.exports = { chunkString, splitLines, wordWrap };
