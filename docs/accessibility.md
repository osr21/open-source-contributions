# Accessibility Guide

## Core Principles (WCAG)
1. **Perceivable** — content available to all senses
2. **Operable** — all functionality accessible via keyboard
3. **Understandable** — clear language and predictable behavior
4. **Robust** — works with assistive technologies

## Quick Wins
- Use semantic HTML elements (`<nav>`, `<main>`, `<button>`)
- Add alt text to all images
- Ensure 4.5:1 contrast ratio for text
- Keyboard-navigable interactive elements
- Use ARIA labels where needed

## Testing
- Test with keyboard only (Tab, Enter, Escape)
- Use a screen reader (NVDA, VoiceOver)
- Run automated checks with axe-core
