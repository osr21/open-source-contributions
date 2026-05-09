const { debounce } = require('../utils/debounce');

// Debounce a search input handler
const handleSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);

// Simulate rapid calls — only the last one fires after 300ms
handleSearch('h');
handleSearch('he');
handleSearch('hel');
handleSearch('hell');
handleSearch('hello'); // <-- only this one executes
