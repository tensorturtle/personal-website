# Stage 1: Build
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the site
RUN npm run build

# Stage 2: Serve
FROM --platform=linux/amd64 caddy:alpine

# Copy built files to Caddy's default web root
COPY --from=build /app/dist /srv

# Expose port 3000
EXPOSE 3000

# Set up a basic Caddyfile
COPY --from=build /app/Caddyfile /etc/caddy/Caddyfile

# Start Caddy server
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]
