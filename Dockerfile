FROM node:22-alpine

# Install basic utilities
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose ports for all services
EXPOSE 3000 4400 4200

# Default command (can be overridden by docker-compose)
CMD ["npm", "run", "serve"]
