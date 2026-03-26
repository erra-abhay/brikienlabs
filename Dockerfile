# Stage 1: Build Frontend and Backend
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY server/package*.json ./server/
RUN cd server && npm ci

COPY . .

RUN npm run build
RUN npm run build:api

# Stage 2: Production Runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Copy built frontend
COPY --from=builder /app/dist ./dist

# Copy built backend
COPY --from=builder /app/server/dist ./server/dist
COPY --from=builder /app/server/package*.json ./server/

# Install only production deps
RUN cd server && npm ci --omit=dev

ENV NODE_ENV=production

# Run as non-root user
USER node

WORKDIR /app/server

CMD ["node", "dist/index.js"]
