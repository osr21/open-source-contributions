# Security Checklist

## Authentication
- [ ] Use strong, hashed passwords (bcrypt/argon2)
- [ ] Implement rate limiting on auth endpoints
- [ ] Use short-lived JWT tokens with refresh tokens

## Input Validation
- [ ] Validate and sanitize all user inputs
- [ ] Use parameterized queries (never string-concat SQL)
- [ ] Validate file uploads (type, size, content)

## HTTP Security Headers
- [ ] Content-Security-Policy
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Strict-Transport-Security

## Dependencies
- [ ] Regularly audit with `npm audit`
- [ ] Keep dependencies updated
- [ ] Use lockfiles
