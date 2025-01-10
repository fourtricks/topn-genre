# Stage 1: Build stage (with necessary build dependencies)
FROM python:3.11-slim AS build

# Set working directory inside container
WORKDIR /app

# Install build dependencies (only for this stage)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libsndfile1 \
    ffmpeg \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy the requirements and install dependencies
COPY requirements.txt .

# Install dependencies (no-cache and optimized pip installs)
RUN pip install --no-cache-dir torch==2.0.1 --index-url https://download.pytorch.org/whl/cpu \
    && pip install --no-cache-dir -r requirements.txt

# Copy the application files for the build stage
COPY . .

# Stage 2: Minimal production image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy only the built Python environment and application files from the build stage
COPY --from=build /usr/local/lib/python3.11 /usr/local/lib/python3.11
COPY --from=build /app .

# Install runtime-only dependencies (if necessary)
RUN apt-get update && apt-get install -y --no-install-recommends libsndfile1 ffmpeg \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Expose port 8000
EXPOSE 8000

# Run the app with gunicorn (using two workers for concurrency)
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers=2", "--timeout=120", "app:app"]
