async function asyncReduce(arr, fn, initial) {
  let acc = initial;
  for (const item of arr) acc = await fn(acc, item);
  return acc;
}
module.exports = { asyncReduce };
