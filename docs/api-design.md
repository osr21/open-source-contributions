# REST API Design Guidelines

## URL Structure
- Use nouns, not verbs: `/users` not `/getUsers`
- Plural for collections: `/posts`
- Nested for relations: `/users/:id/posts`

## HTTP Methods
| Method | Purpose |
|--------|---------|
| GET | Read |
| POST | Create |
| PUT | Full update |
| PATCH | Partial update |
| DELETE | Delete |

## Status Codes
- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 404 Not Found
- 500 Internal Server Error

## Response Format
Always return JSON with consistent structure:
```json
{ "data": {}, "error": null }
```
