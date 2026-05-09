function pickBy(obj, pred) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => pred(v, k)));
}
function omitBy(obj, pred) {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => !pred(v, k)));
}
module.exports = { pickBy, omitBy };
