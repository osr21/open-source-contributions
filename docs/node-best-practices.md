# Node.js Production Best Practices

## Project Structure

```
src/
  routes/       # Express routers
  services/     # Business logic
  models/       # DB schemas
  middleware/   # Express middleware
  lib/          # Shared utilities
  config/       # App configuration
```

## Environment & Config

- Store all secrets in environment variables — never in code
- Use a `.env` file locally; inject vars in production via your platform
- Validate required env vars at startup and fail fast if missing
- Use `NODE_ENV=production` to disable development helpers

## Error Handling

```js
// Always handle promise rejections
process.on('unhandledRejection', (err) => {
  logger.error(err);
  process.exit(1);
});

// Use a central error handler in Express
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(err.status || 500).json({ error: err.message });
});
```

## Logging

- Use a structured logger (pino, winston) — not `console.log`
- Log at the right level: `debug`, `info`, `warn`, `error`
- Never log sensitive data (passwords, tokens, PII)
- Use request IDs to trace logs across a request lifecycle

## Security

- Keep dependencies up to date (`npm audit`)
- Set security headers with `helmet`
- Rate-limit APIs with `express-rate-limit`
- Validate and sanitize all user input
- Use parameterized queries — never concatenate SQL
- Disable `x-powered-by` header

## Performance

- Avoid blocking the event loop — offload CPU work to worker threads
- Use connection pooling for databases
- Enable gzip/brotli compression
- Cache expensive responses (Redis, in-memory)
- Stream large files instead of loading them into memory

## Process Management

- Use a process manager (PM2, systemd) to restart on crashes
- Handle `SIGTERM` gracefully — drain in-flight requests before exit
- Set `--max-old-space-size` if running in memory-constrained environments
- Use cluster mode or run multiple instances behind a load balancer
