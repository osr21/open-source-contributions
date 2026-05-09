const { retry } = require('../utils/retry');

async function fetchData() {
  const res = await fetch('https://api.example.com/data');
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

// Retry up to 3 times with 500ms initial delay (doubles each attempt)
retry(fetchData, 3, 500)
  .then(data => console.log('Got data:', data))
  .catch(err => console.error('All retries failed:', err.message));
