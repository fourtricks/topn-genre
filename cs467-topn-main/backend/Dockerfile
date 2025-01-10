# Base image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy the requirements and install dependencies
COPY requirements.txt .

# Install dependencies with optimizations
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libsndfile1 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install CPU-only version of PyTorch and dependencies
RUN pip install --no-cache-dir --find-links https://download.pytorch.org/whl/cpu torch==2.0.1+cpu \
    && pip install --no-cache-dir -r requirements.txt

# Copy the rest of your app
COPY . .

# Expose the port Flask will run on
EXPOSE 8000

# Start the app with gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers=2", "--timeout=120", "app:app"]
