# Common Regex Patterns

## Syntax Reference

| Pattern | Matches |
|---------|---------|
| `.` | Any character except newline |
| `\d` | Digit `[0-9]` |
| `\D` | Non-digit |
| `\w` | Word char `[a-zA-Z0-9_]` |
| `\W` | Non-word char |
| `\s` | Whitespace |
| `\S` | Non-whitespace |
| `^` | Start of string |
| `$` | End of string |
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 (also makes quantifiers lazy) |
| `{n,m}` | Between n and m times |
| `[abc]` | Character class |
| `[^abc]` | Negated character class |
| `(a\|b)` | Alternation |
| `(?:...)` | Non-capturing group |
| `(?=...)` | Positive lookahead |
| `(?!...)` | Negative lookahead |

## Common Patterns

```js
// Email
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// URL
/^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/

// IPv4 address
/^(\d{1,3}\.){3}\d{1,3}$/

// UUID v4
/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

// Hex color
/^#([0-9a-f]{3}|[0-9a-f]{6})$/i

// Semantic version
/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-[\w.-]+)?(\+[\w.-]+)?$/

// Phone (E.164)
/^\+[1-9]\d{1,14}$/

// Slug
/^[a-z0-9]+(-[a-z0-9]+)*$/

// ISO date (YYYY-MM-DD)
/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/

// Digits only
/^\d+$/

// Alphanumeric
/^[a-zA-Z0-9]+$/

// Strong password (min 8 chars, upper, lower, digit, special)
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/

// Trim whitespace
/^\s+|\s+$/g

// Repeated whitespace
/\s{2,}/g
```

## JavaScript Tips

```js
// Test a pattern
/^\d+$/.test('123')        // true

// Extract matches
'2026-05-09'.match(/\d+/g) // ['2026', '05', '09']

// Replace
'hello world'.replace(/\s/g, '-') // 'hello-world'

// Split
'a,b,,c'.split(/,+/)        // ['a', 'b', 'c']

// Named capture groups
const m = '2026-05-09'.match(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})/);
m.groups // { y: '2026', m: '05', d: '09' }
```

## Flags

| Flag | Meaning |
|------|---------|
| `g` | Global — find all matches |
| `i` | Case-insensitive |
| `m` | Multiline — `^`/`$` match line boundaries |
| `s` | Dotall — `.` matches newlines |
| `u` | Unicode mode |
| `d` | Indices — include match position |
