# HTTP Status Code Reference

## 1xx — Informational

| Code | Name | Meaning |
|------|------|---------|
| 100 | Continue | Server received headers; client should continue |
| 101 | Switching Protocols | Upgrading (e.g. to WebSocket) |

## 2xx — Success

| Code | Name | Meaning |
|------|------|---------|
| 200 | OK | Standard success |
| 201 | Created | Resource created (use after POST) |
| 202 | Accepted | Request received; processing async |
| 204 | No Content | Success with no response body |
| 206 | Partial Content | Range request fulfilled |

## 3xx — Redirection

| Code | Name | Meaning |
|------|------|---------|
| 301 | Moved Permanently | URL changed permanently |
| 302 | Found | Temporary redirect |
| 304 | Not Modified | Cached version is still valid |
| 307 | Temporary Redirect | Preserves request method |
| 308 | Permanent Redirect | Preserves request method |

## 4xx — Client Errors

| Code | Name | Meaning |
|------|------|---------|
| 400 | Bad Request | Malformed request syntax |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Authenticated but not authorized |
| 404 | Not Found | Resource does not exist |
| 405 | Method Not Allowed | HTTP verb not supported |
| 409 | Conflict | State conflict (e.g. duplicate) |
| 410 | Gone | Resource permanently deleted |
| 422 | Unprocessable Entity | Validation failed |
| 429 | Too Many Requests | Rate limit exceeded |

## 5xx — Server Errors

| Code | Name | Meaning |
|------|------|---------|
| 500 | Internal Server Error | Generic server failure |
| 501 | Not Implemented | Feature not supported |
| 502 | Bad Gateway | Upstream server bad response |
| 503 | Service Unavailable | Server temporarily down |
| 504 | Gateway Timeout | Upstream server timed out |

## Quick Decision Guide

```
Success with body?     → 200
Resource created?      → 201
Success, no body?      → 204
Bad input?             → 400
Not logged in?         → 401
Logged in, no access?  → 403
Not found?             → 404
Duplicate/conflict?    → 409
Validation error?      → 422
Rate limited?          → 429
Unexpected error?      → 500
```
