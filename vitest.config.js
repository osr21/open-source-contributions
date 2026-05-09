import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['utils/**/*.js'],
      exclude: ['utils/storage.js', 'utils/is-browser.js']
    }
  }
});
