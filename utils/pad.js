function padStart(val, len, char = ' ') { return String(val).padStart(len, char); }
function padEnd(val, len, char = ' ') { return String(val).padEnd(len, char); }
function zeroPad(num, len = 2) { return String(num).padStart(len, '0'); }
module.exports = { padStart, padEnd, zeroPad };
