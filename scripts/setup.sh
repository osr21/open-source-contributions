#!/bin/bash
set -e

echo "Setting up project..."

if ! command -v node &> /dev/null; then
  echo "Node.js is required. Please install it from https://nodejs.org"
  exit 1
fi

echo "Installing dependencies..."
npm install

echo "Setup complete! Run 'npm run dev' to start."
