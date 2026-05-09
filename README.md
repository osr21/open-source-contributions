# Open Source Contributions

A production-ready JavaScript utility library and open source resource hub.
All utilities are zero-dependency, fully tested with [Vitest](https://vitest.dev/), and ready to use in any Node.js project.

## Quick Start

```bash
git clone https://github.com/osr21/open-source-contributions
cd open-source-contributions
npm install
npm test
```

---

## Utilities

### Array Utilities

| Utility | File | Description |
|---------|------|-------------|
| `chunkArray` | [utils/chunk-array.js](utils/chunk-array.js) | Split an array into chunks of a given size |
| `flatten` / `deepFlatten` | [utils/flatten.js](utils/flatten.js) | Flatten nested arrays to a given depth |
| `unique` / `uniqueBy` | [utils/unique.js](utils/unique.js) | Remove duplicate values from an array |
| `groupBy` | [utils/group-by.js](utils/group-by.js) | Group an array of objects by a key or function |
| `countBy` | [utils/count-by.js](utils/count-by.js) | Count array items by group |
| `sortBy` | [utils/sort-by.js](utils/sort-by.js) | Sort objects by one or more keys (supports `-key` for desc) |
| `intersection` | [utils/intersection.js](utils/intersection.js) | Set operations: intersection, difference, union |
| `compact` | [utils/compact.js](utils/compact.js) | Remove falsy values from an array |
| `zip` / `unzip` | [utils/zip.js](utils/zip.js) | Combine or split paired arrays |
| `range` | [utils/range.js](utils/range.js) | Generate a numeric range array |
| `sum` / `average` / `median` | [utils/sum.js](utils/sum.js) | Math aggregates for arrays of numbers |
| `binarySearch` | [utils/binary-search.js](utils/binary-search.js) | Binary search on a sorted array |
| `clampArray` | [utils/clamp-array.js](utils/clamp-array.js) | Clamp all numeric values in an array to a [min, max] range |
| `first` / `last` | [utils/first-last.js](utils/first-last.js) | Get the first or last N items of an array |
| `frequency` | [utils/frequency.js](utils/frequency.js) | Build a frequency map counting occurrences of each item |
| `swap` | [utils/swap.js](utils/swap.js) | Swap two elements by index (returns new array) |

### Object Utilities

| Utility | File | Description |
|---------|------|-------------|
| `pick` / `omit` | [utils/pick.js](utils/pick.js) | Select or exclude keys from an object |
| `pickBy` / `omitBy` | [utils/omit-by.js](utils/omit-by.js) | Filter object keys by a predicate function |
| `objectMap` / `objectMapKeys` | [utils/object-map.js](utils/object-map.js) | Transform object values or keys |
| `mergeDeep` | [utils/merge-deep.js](utils/merge-deep.js) | Deep merge two objects |
| `deepEqual` | [utils/deep-equal.js](utils/deep-equal.js) | Recursive equality comparison |
| `deepFreeze` | [utils/deep-freeze.js](utils/deep-freeze.js) | Recursively freeze an object (immutable) |
| `deepClone` | [utils/deep-clone.js](utils/deep-clone.js) | Deep clone any value |
| `flattenObject` | [utils/flatten-object.js](utils/flatten-object.js) | Flatten nested object to dot-notation keys |
| `diff` | [utils/diff.js](utils/diff.js) | Shallow diff: find added, removed, changed keys |
| `mapToObject` / `objectToMap` | [utils/map-convert.js](utils/map-convert.js) | Convert between Map and plain object |
| `compactObject` | [utils/compact.js](utils/compact.js) | Remove falsy-valued keys from an object |
| `objectSize` | [utils/object-size.js](utils/object-size.js) | Estimate serialized size of an object in bytes |
| `invert` | [utils/invert.js](utils/invert.js) | Swap keys and values of an object |
| `getNestedValue` | [utils/get-nested.js](utils/get-nested.js) | Safely read a deeply nested value using a dot-path string |
| `setNestedValue` | [utils/set-nested.js](utils/set-nested.js) | Immutably set a deeply nested value using a dot-path string |

### String Utilities

| Utility | File | Description |
|---------|------|-------------|
| `slugify` | [utils/slugify.js](utils/slugify.js) | Convert a string to a URL-friendly slug |
| `capitalize` / `titleCase` / `truncate` | [utils/capitalize.js](utils/capitalize.js) | String formatting helpers |
| `toCamelCase` / `toSnakeCase` / `toKebabCase` | [utils/camel-case.js](utils/camel-case.js) | Convert between naming conventions |
| `wordCount` / `charCount` / `readingTime` | [utils/word-count.js](utils/word-count.js) | Text analysis utilities |
| `escapeHtml` / `unescapeHtml` | [utils/escape-html.js](utils/escape-html.js) | Escape and unescape HTML entities |
| `interpolate` | [utils/interpolate.js](utils/interpolate.js) | Replace `{placeholder}` vars in a template string |
| `pluralize` | [utils/pluralize.js](utils/pluralize.js) | Pluralize English words based on count |
| `padStart` / `padEnd` / `zeroPad` | [utils/pad.js](utils/pad.js) | Pad strings to a minimum length |
| `chunkString` / `splitLines` / `wordWrap` | [utils/chunk-string.js](utils/chunk-string.js) | Split and wrap string content |
| `byteSize` | [utils/string-bytes.js](utils/string-bytes.js) | Get the UTF-8 byte size of a string |
| `stripHtml` | [utils/strip-html.js](utils/strip-html.js) | Remove all HTML tags from a string |
| `stringSimilarity` | [utils/string-similarity.js](utils/string-similarity.js) | Dice coefficient similarity score between two strings (0–1) |
| `levenshtein` | [utils/levenshtein.js](utils/levenshtein.js) | Levenshtein edit distance between two strings |
| `regexEscape` | [utils/regex-escape.js](utils/regex-escape.js) | Escape special regex characters so a string can be used in a RegExp |
| `countOccurrences` | [utils/count-occurrences.js](utils/count-occurrences.js) | Count how many times a substring appears in a string |

### Number & Math Utilities

| Utility | File | Description |
|---------|------|-------------|
| `clamp` | [utils/clamp.js](utils/clamp.js) | Clamp a number between min and max |
| `round` / `floor` / `ceil` | [utils/round.js](utils/round.js) | Rounding with decimal precision control |
| `randomInt` / `randomItem` / `shuffle` | [utils/random.js](utils/random.js) | Random number, item, and array shuffle |
| `formatNumber` / `formatPercent` / `formatCompact` | [utils/format-number.js](utils/format-number.js) | Number display formatting |
| `formatBytes` | [utils/format-bytes.js](utils/format-bytes.js) | Human-readable file size (KB, MB, GB…) |
| `formatCurrency` | [utils/currency.js](utils/currency.js) | Format a number as currency |
| `formatDate` / `timeAgo` | [utils/format-date.js](utils/format-date.js) | Date display and relative time |
| `hash` | [utils/hash.js](utils/hash.js) | Fast djb2 non-cryptographic string hash |
| `factorial` | [utils/factorial.js](utils/factorial.js) | Compute the factorial of n (iterative, safe for large n) |
| `fibonacci` | [utils/fibonacci.js](utils/fibonacci.js) | Return the nth Fibonacci number (0-indexed, iterative) |
| `gcd` / `lcm` | [utils/gcd-lcm.js](utils/gcd-lcm.js) | Greatest common divisor and least common multiple |
| `isPrime` | [utils/is-prime.js](utils/is-prime.js) | Check whether a number is prime |
| `lerp` | [utils/lerp.js](utils/lerp.js) | Linear interpolation and numeric range mapping |
| `movingAverage` | [utils/moving-average.js](utils/moving-average.js) | Simple moving average over a sliding window |
| `toRoman` / `fromRoman` | [utils/roman-numerals.js](utils/roman-numerals.js) | Convert integers (1–3999) to/from Roman numeral strings |
| `numberToWords` | [utils/number-to-words.js](utils/number-to-words.js) | Convert a non-negative integer to English words |

### Function Utilities

| Utility | File | Description |
|---------|------|-------------|
| `debounce` | [utils/debounce.js](utils/debounce.js) | Delay a function until calls stop |
| `throttle` | [utils/throttle.js](utils/throttle.js) | Limit a function to once per interval |
| `memoize` | [utils/memoize.js](utils/memoize.js) | Cache function results by arguments |
| `once` | [utils/once.js](utils/once.js) | Ensure a function is called only once |
| `retry` | [utils/retry.js](utils/retry.js) | Retry an async function with exponential backoff |
| `sleep` | [utils/sleep.js](utils/sleep.js) | Pause execution for a given number of ms |
| `withTimeout` | [utils/timeout.js](utils/timeout.js) | Race a promise against a timeout |
| `pipe` / `compose` | [utils/pipe.js](utils/pipe.js) | Functional composition helpers |
| `noop` / `identity` | [utils/noop.js](utils/noop.js) | No-op and identity function utilities |
| `batch` | [utils/batch.js](utils/batch.js) | Process items in parallel batches |
| `asyncMap` / `asyncFilter` | [utils/async-map.js](utils/async-map.js) | Async versions of map and filter |
| `asyncReduce` | [utils/async-reduce.js](utils/async-reduce.js) | Sequential async reduce |
| `allSettledSplit` | [utils/promise-split.js](utils/promise-split.js) | Split fulfilled vs rejected promises |
| `composeMiddleware` | [utils/middleware.js](utils/middleware.js) | Compose a chain of middleware functions (koa/express style) |

### Data Structures

| Utility | File | Description |
|---------|------|-------------|
| `Queue` | [utils/queue.js](utils/queue.js) | FIFO queue |
| `Stack` | [utils/stack.js](utils/stack.js) | LIFO stack |
| `LinkedList` | [utils/linked-list.js](utils/linked-list.js) | Singly linked list |
| `LRUCache` | [utils/lru-cache.js](utils/lru-cache.js) | Least Recently Used cache |
| `PriorityQueue` | [utils/priority-queue.js](utils/priority-queue.js) | Min-heap priority queue with custom comparator |
| `Trie` | [utils/trie.js](utils/trie.js) | Prefix tree for fast string prefix lookup and autocomplete |
| `TTLCache` | [utils/ttl-cache.js](utils/ttl-cache.js) | Cache where entries automatically expire after a TTL |
| `FSM` | [utils/fsm.js](utils/fsm.js) | Lightweight finite state machine |
| `EventEmitter` | [utils/event-emitter.js](utils/event-emitter.js) | Pub/sub event emitter |
| `PubSub` | [utils/pub-sub.js](utils/pub-sub.js) | Standalone publish-subscribe event bus |
| `Observable` | [utils/observable.js](utils/observable.js) | Reactive observable value |
| `RateLimiter` | [utils/rate-limiter.js](utils/rate-limiter.js) | Token bucket rate limiter |

### Validation & Type Utilities

| Utility | File | Description |
|---------|------|-------------|
| `isValidEmail` / `isValidUrl` | [utils/validate-email.js](utils/validate-email.js) | Email and URL validation |
| `isEmpty` | [utils/is-empty.js](utils/is-empty.js) | Check if a value is empty (null, [], {}, '') |
| `toBoolean` | [utils/to-boolean.js](utils/to-boolean.js) | Coerce strings/numbers to boolean |
| `isBrowser` / `isNode` / `prefersDark` | [utils/is-browser.js](utils/is-browser.js) | Runtime environment detection |
| `safeJsonParse` / `safeJsonStringify` | [utils/safe-json.js](utils/safe-json.js) | JSON with safe error handling |

### Other Utilities

| Utility | File | Description |
|---------|------|-------------|
| `uuid` | [utils/uuid.js](utils/uuid.js) | Generate a UUID v4 string |
| `compareSemver` / `satisfies` | [utils/semver.js](utils/semver.js) | Semantic version comparison |
| `parseCsv` / `toCsv` | [utils/parse-csv.js](utils/parse-csv.js) | Lightweight CSV parser and serializer |
| `parseUrl` / `buildUrl` / `getParam` | [utils/parse-url.js](utils/parse-url.js) | URL parsing and query string building |
| `parseQueryString` / `toQueryString` | [utils/parse-query-string.js](utils/parse-query-string.js) | Query string parse and serialize |
| `hexToRgb` / `rgbToHex` | [utils/color.js](utils/color.js) | Color format conversion |
| `deepFreeze` | [utils/deep-freeze.js](utils/deep-freeze.js) | Make an object recursively immutable |
| `encodeBase64` / `decodeBase64` | [utils/base64.js](utils/base64.js) | Base64 encode/decode (works in Node.js and browsers) |
| `formatDuration` / `parseDuration` | [utils/parse-duration.js](utils/parse-duration.js) | Format milliseconds to a human-readable string and parse duration strings |
| `storage` | [utils/storage.js](utils/storage.js) | Safe localStorage wrapper with JSON serialization and fallback |

---

## Docs & Guides

| Guide | Description |
|-------|-------------|
| [Contributing](CONTRIBUTING.md) | How to contribute to this project |
| [Code of Conduct](CODE_OF_CONDUCT.md) | Community standards |
| [Getting Started](docs/getting-started.md) | Setup and first steps |
| [Style Guide](docs/style-guide.md) | Coding conventions |
| [Git Workflow](docs/git-workflow.md) | Branching and commit standards |
| [Open Source Guide](docs/open-source-guide.md) | Beginner's guide to contributing to open source |
| [API Design](docs/api-design.md) | REST API design best practices |
| [Security Checklist](docs/security-checklist.md) | Web security checklist |
| [Performance Tips](docs/performance-tips.md) | Frontend performance optimization |
| [Testing Guide](docs/testing-guide.md) | Unit, integration, and E2E testing |
| [Accessibility](docs/accessibility.md) | Web accessibility (a11y) guide |
| [Deployment](docs/deployment.md) | Deploying Node.js applications |
| [TypeScript Tips](docs/typescript-tips.md) | Utility types and patterns |
| [React Patterns](docs/react-patterns.md) | Common React patterns |
| [Node.js Best Practices](docs/node-best-practices.md) | Node.js production tips |
| [Docker Basics](docs/docker-basics.md) | Docker quick reference |
| [SQL Cheat Sheet](docs/sql-cheatsheet.md) | SQL quick reference |
| [Regex Guide](docs/regex-guide.md) | Common regex patterns |
| [HTTP Status Codes](docs/http-status-codes.md) | HTTP status code reference |
| [CLI Tools](docs/cli-tools.md) | Useful CLI tools for developers |
| [Algorithms](docs/algorithms.md) | Algorithm complexity cheat sheet |
| [Data Structures](docs/data-structures.md) | Data structures reference |
| [Design Patterns](docs/design-patterns.md) | Common software design patterns |

---

## Running Tests

```bash
npm install
npm test              # run all tests once
npm run test:watch    # watch mode
npm run test:coverage # with coverage report
```

---

## License

[MIT](LICENSE) © osr21
