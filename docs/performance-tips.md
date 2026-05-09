# Performance Tips

## Images
- Use modern formats (WebP, AVIF)
- Always specify width and height to avoid layout shift
- Lazy-load below-the-fold images

## JavaScript
- Code-split with dynamic imports
- Avoid blocking the main thread
- Use Web Workers for heavy computation

## CSS
- Avoid large unused CSS — purge in production
- Use CSS custom properties for theming
- Minimize reflows by batching DOM updates

## Caching
- Set proper Cache-Control headers
- Use service workers for offline support
- Cache API responses where appropriate
