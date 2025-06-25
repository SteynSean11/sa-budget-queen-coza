# --- Stage 1: Build the React frontend ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and lock file (if it exists) and install all dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application
RUN npm run build

# --- Stage 2: Setup the production environment ---
FROM node:18-alpine

WORKDIR /app

# Copy package files and install only production dependencies
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
# Copy the built application and the production server
COPY --from=builder /app/dist ./dist
COPY server.js .

# Expose the port the app runs on
EXPOSE 8080

# The command to run the application
CMD ["node", "server.js"]
