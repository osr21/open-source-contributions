# Deployment Guide

## Pre-deployment Checklist
- [ ] All tests pass
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Build artifacts generated

## Environment Variables
Never commit secrets. Use:
- `.env.local` for local development
- Platform secrets (Vercel, Railway, Fly.io) for production

## Common Platforms
- **Vercel**: zero-config for Next.js
- **Railway**: simple Node.js/Postgres deployments
- **Fly.io**: Docker-based, good for full-stack
- **Render**: free tier with auto-deploy

## Health Checks
Always expose a `/health` endpoint returning `200 OK`.
