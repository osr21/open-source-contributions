function objectSize(obj) { return new Blob([JSON.stringify(obj)]).size; }
module.exports = { objectSize };
