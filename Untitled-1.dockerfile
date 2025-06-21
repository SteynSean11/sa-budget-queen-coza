# --- Stage 1: Build the React frontend ---
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the application
# This runs the "build" script from your package.json
RUN npm run build

# --- Stage 2: Setup the production environment ---
FROM node:18-alpine

WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules
# Copy the built distributable files from the builder stage
COPY --from=builder /app/dist ./dist
# Copy the server, public files, and package.json
COPY server.js .
COPY index.html .
COPY package.json .

# Expose the port the app runs on
EXPOSE 8080

# The command to run the application
CMD ["npm", "start"]

<script type="module" src="src/index.tsx"></script>