# Base image for Node.js
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and lock files to leverage Docker cache
COPY package*.json ./

# Install dependencies with retry and without optional packages
RUN npm install --legacy-peer-deps --prefer-offline --no-audit --progress=false

# Copy the rest of the app files
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight static file server to serve the build files
RUN npm install -g serve

# Serve the app on port 80
CMD ["serve", "-s", "build", "-l", "80"]

# Expose port 80 internally
EXPOSE 80
