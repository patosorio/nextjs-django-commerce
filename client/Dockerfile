FROM node:20-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=development

# Install dependencies and Next.js globally
RUN npm install
RUN npm install -g next

# Copy project files
COPY . .

# Expose port 3000
ENV PORT=3000

# Build and start the application
CMD ["npx", "next", "dev"] 