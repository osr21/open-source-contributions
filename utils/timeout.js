function withTimeout(promise, ms, msg = 'Operation timed out') {
  const timer = new Promise((_, reject) => setTimeout(() => reject(new Error(msg)), ms));
  return Promise.race([promise, timer]);
}
module.exports = { withTimeout };
