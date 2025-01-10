# Base image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy the requirements and install dependencies
COPY requirements.txt .

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libsndfile1 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install CPU-optimized version of PyTorch from PyPI directly (no '+cpu' needed)
RUN pip install --no-cache-dir torch==2.0.1 --index-url https://download.pytorch.org/whl/cpu \
    && pip install --no-cache-dir -r requirements.txt

# Copy the rest of your app
COPY . .

# Expose the port Flask will run on
EXPOSE 8000

# Start the app with gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "--workers=2", "--timeout=120", "app:app"]
