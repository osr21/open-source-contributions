function compact(arr) { return arr.filter(Boolean); }
function compactObject(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => Boolean(v)));
}
module.exports = { compact, compactObject };
