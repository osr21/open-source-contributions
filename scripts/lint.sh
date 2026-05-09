#!/bin/bash
echo "Running linter..."
npx eslint . --ext .js,.ts,.jsx,.tsx
echo "Lint complete."
