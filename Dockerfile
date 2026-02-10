FROM node:22-slim

# Install basic utilities
RUN apt-get update && apt-get install -y --no-install-recommends git && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Install Playwright browsers and system dependencies
RUN npx playwright install --with-deps

# Copy the rest of the application
COPY . .

# Expose ports for all services
EXPOSE 3000 4400 4200

# Default command (can be overridden by docker-compose)
CMD ["npm", "run", "serve"]
