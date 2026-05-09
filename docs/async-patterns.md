# Async JavaScript Patterns

## Callbacks (legacy)
```js
fs.readFile('data.txt', (err, data) => { if (err) throw err; console.log(data); });
```

## Promises
```js
fetch('/api/data').then(res => res.json()).then(data => console.log(data)).catch(console.error);
```

## Async/Await
```js
async function loadData() {
  try {
    const res = await fetch('/api/data');
    return await res.json();
  } catch (err) {
    console.error(err);
  }
}
```

## Parallel Execution
```js
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()]);
```

## Patterns in This Library
- [retry](../utils/retry.js) — retry with backoff
- [withTimeout](../utils/timeout.js) — promise timeout
- [batch](../utils/batch.js) — parallel batching
- [asyncMap](../utils/async-map.js) — async array map
- [allSettledSplit](../utils/promise-split.js) — separate fulfilled from rejected
