async function asyncMap(arr, fn) { return Promise.all(arr.map(fn)); }
async function asyncFilter(arr, pred) {
  const flags = await Promise.all(arr.map(pred));
  return arr.filter((_, i) => flags[i]);
}
module.exports = { asyncMap, asyncFilter };
