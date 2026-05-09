/**
 * Linear interpolation between two values.
 * lerp(0, 100, 0.5) => 50
 */
function lerp(a, b, t) { return a + (b - a) * t; }

/**
 * Map a value from one numeric range to another.
 * mapRange(5, 0, 10, 0, 100) => 50
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}

/**
 * Normalize a value to 0-1 within a range.
 */
function normalize(value, min, max) { return (value - min) / (max - min); }

module.exports = { lerp, mapRange, normalize };
