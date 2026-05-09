# Docker Quick Reference

## Core Concepts

- **Image** — Read-only template used to create containers
- **Container** — Runnable instance of an image
- **Volume** — Persistent data storage outside containers
- **Network** — Communication layer between containers
- **Registry** — Image storage (Docker Hub, GHCR, ECR)

## Common Commands

### Images
```bash
docker pull nginx                   # Download image
docker images                       # List local images
docker build -t myapp:1.0 .         # Build from Dockerfile
docker rmi myapp:1.0                # Remove image
docker image prune                  # Remove unused images
```

### Containers
```bash
docker run -d -p 3000:3000 myapp    # Run detached, map port
docker run -it ubuntu bash          # Interactive shell
docker ps                           # List running containers
docker ps -a                        # List all containers
docker stop <id>                    # Stop container
docker rm <id>                      # Remove container
docker logs <id>                    # View logs
docker exec -it <id> bash           # Shell into running container
```

### Volumes & Networks
```bash
docker volume create mydata
docker run -v mydata:/app/data myapp
docker network create mynet
docker run --network mynet myapp
```

## Dockerfile Essentials

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
USER node
CMD ["node", "index.js"]
```

## docker-compose.yml Skeleton

```yaml
version: "3.9"
services:
  app:
    build: .
    ports: ["3000:3000"]
    environment:
      NODE_ENV: production
    depends_on: [db]
  db:
    image: postgres:16-alpine
    volumes: [pgdata:/var/lib/postgresql/data]
    environment:
      POSTGRES_PASSWORD: secret
volumes:
  pgdata:
```

## Tips

- Use `.dockerignore` to exclude `node_modules`, `.git`, etc.
- Prefer `COPY` over `ADD` unless extracting archives
- Use multi-stage builds to keep images small
- Run containers as a non-root user
- Pin image tags (e.g. `node:20-alpine`) — never use `latest` in production
