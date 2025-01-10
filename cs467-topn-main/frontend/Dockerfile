# Base image for Node.js
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Install a lightweight static file server to serve the build files
RUN npm install -g serve

# Serve the app
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 internally
EXPOSE 3000
