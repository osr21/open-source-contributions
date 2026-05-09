# Testing Guide

## Test Types
- **Unit**: Test individual functions in isolation
- **Integration**: Test modules working together
- **E2E**: Test full user flows in a real browser

## Naming Convention
```
describe('moduleName', () => {
  it('should do X when Y', () => { ... });
});
```

## Coverage Goals
- Utilities: 90%+
- Business logic: 80%+
- UI components: 70%+

## Tools
- Unit/Integration: Vitest or Jest
- E2E: Playwright or Cypress
- Coverage: c8 or Istanbul
