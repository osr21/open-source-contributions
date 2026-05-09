async function allSettledSplit(promises) {
  const results = await Promise.allSettled(promises);
  return {
    fulfilled: results.filter(r => r.status === 'fulfilled').map(r => r.value),
    rejected:  results.filter(r => r.status === 'rejected').map(r => r.reason)
  };
}
module.exports = { allSettledSplit };
