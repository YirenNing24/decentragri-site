# Use Bun's official base image
FROM oven/bun:latest

# Create a non-root user and group
RUN addgroup -S nonroot && adduser -S nonroot -G nonroot

# Set working directory
WORKDIR /app

# Set permissions for non-root user
RUN chown -R nonroot:nonroot /app

# Switch to non-root user
USER nonroot

# Copy package manifests and lockfile
COPY --chown=nonroot:nonroot package.json package-lock.json ./

# Install dependencies
RUN bun install

# Copy the rest of your app
COPY --chown=nonroot:nonroot . .

# Build your Next.js app
RUN bun run build


# Prepare the app for production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"

# Expose the default Next.js port
EXPOSE 3000

# Start the app using Bun
CMD ["bun", "start"]
