/**
 * Convert a hex color string to RGB.
 * @param {string} hex - e.g. "#ff6600" or "ff6600"
 * @returns {{ r: number, g: number, b: number }|null}
 */
function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  if (clean.length !== 6) return null;
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16)
  };
}

/**
 * Convert RGB to hex.
 */
function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

module.exports = { hexToRgb, rgbToHex };
