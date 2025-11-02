# # Use Node.js LTS (Linux Alpine for smaller image size)
# FROM node:20-alpine AS base

# # Install dependencies only when needed
# FROM base AS deps
# WORKDIR /app

# # Install dependencies for node-gyp and Prisma
# RUN apk add --no-cache libc6-compat python3 make g++

# # Copy package files
# COPY package.json package-lock.json* ./

# # Install dependencies
# RUN npm ci

# # Rebuild the source code only when needed
# FROM base AS builder
# WORKDIR /app

# # Copy dependencies from deps stage
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# # Generate Prisma Client
# RUN npx prisma generate

# # Build application
# RUN npm run build

# # Production image, copy all the files and run next
# FROM base AS runner
# WORKDIR /app

# ENV NODE_ENV=production

# # Create a non-root user
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 nextjs

# # Copy necessary files from builder
# COPY --from=builder /app/public ./public
# COPY --from=builder /app/.next/standalone ./
# COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/prisma ./prisma

# # Set correct permissions
# RUN chown -R nextjs:nodejs /app

# # Switch to non-root user
# USER nextjs

# # Expose the port the app runs on
# EXPOSE 3000

# ENV PORT 3000
# ENV HOSTNAME "0.0.0.0"

# # Start the application
# CMD ["node", "server.js"]

# Use Node.js LTS (Linux Alpine for smaller image size)

FROM node:20-alpine AS base

WORKDIR  /app

COPY package.json package-lock.json* ./

# Install dependencies reproducibly
RUN npm ci

# Copy Prisma schema early so we can generate the client
COPY prisma ./prisma

# Copy rest of the source
COPY . .

# Generate Prisma client (requires schema in /app/prisma)
RUN npx prisma generate

# Build the Next.js app for production
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

CMD npm run dev