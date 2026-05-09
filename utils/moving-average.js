/**
 * Calculate the simple moving average of an array with a given window size.
 */
function movingAverage(arr, window) {
  const result = [];
  for (let i = window - 1; i < arr.length; i++) {
    const slice = arr.slice(i - window + 1, i + 1);
    result.push(slice.reduce((a, b) => a + b, 0) / window);
  }
  return result;
}

/**
 * Exponential moving average.
 */
function exponentialMovingAverage(arr, alpha = 0.1) {
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    result.push(alpha * arr[i] + (1 - alpha) * result[i - 1]);
  }
  return result;
}

module.exports = { movingAverage, exponentialMovingAverage };
