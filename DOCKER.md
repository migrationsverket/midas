# Docker Development Setup

This Docker setup provides a consistent development environment for all Midas apps, ensuring everyone has the correct Node.js version (22) and dependencies.

## Prerequisites

- Docker Desktop (or Docker Engine + Docker Compose)
- That's it! No need to install Node.js, npm, or any dependencies locally.

## Quick Start

### Start all services

```bash
docker-compose up
```

This will start:
- **Docs** (Docusaurus) at http://localhost:3000
- **Storybook** at http://localhost:4400
- **Playground** at http://localhost:4200

**Note:** First startup may take a few minutes to install dependencies and compile. Subsequent starts will be much faster thanks to Docker volumes.

### Start a specific service

```bash
# Only start docs
docker-compose up docs

# Only start storybook
docker-compose up storybook

# Only start playground
docker-compose up playground
```

### Run services in the background

```bash
docker-compose up -d
```

### View logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f docs
```

### Stop services

```bash
docker-compose down
```

### Rebuild after dependency changes

If you've updated package.json or added new dependencies:

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up
```

## Running Commands Inside Containers

### Execute Nx commands

```bash
# Build components
docker-compose exec docs npx nx build components

# Run tests
docker-compose exec docs npx nx test components

# Lint
docker-compose exec docs npx nx lint components
```

### Install new dependencies

```bash
docker-compose exec docs npm install <package-name>
```

### Access shell in container

```bash
docker-compose exec docs sh
```

## Troubleshooting

### Port already in use

If you get an error about ports being in use, either:
1. Stop the local process using that port
2. Or modify the port mapping in `docker-compose.yml`:
   ```yaml
   ports:
     - "3001:3000"  # Maps container port 3000 to host port 3001
   ```

### Changes not reflecting

If hot reload isn't working:
1. Make sure your files are being saved
2. Check the logs: `docker-compose logs -f <service-name>`
3. Try restarting the service: `docker-compose restart <service-name>`

### Clean start

To completely reset the Docker environment:

```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

## Performance Tips

- The `node_modules` volume is used to improve performance - dependencies are installed in the container and persisted
- Nx cache is shared via a Docker volume to speed up builds
- On macOS/Windows, consider using `:cached` or `:delegated` volume flags for better performance if needed
