function wordCount(str) { return str.trim().split(/s+/).filter(Boolean).length; }
function charCount(str, spaces = true) { return spaces ? str.length : str.replace(/s/g, '').length; }
function readingTime(str, wpm = 200) { return Math.ceil(wordCount(str) / wpm); }
module.exports = { wordCount, charCount, readingTime };
