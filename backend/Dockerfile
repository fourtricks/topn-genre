# Stage 1: Build stage (with necessary build dependencies)
FROM python:3.11-slim AS build

WORKDIR /app

# Install build dependencies (only for this stage)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libsndfile1 \
    ffmpeg \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

# Install dependencies (combine torch, gunicorn, and requirements.txt in one RUN)
RUN pip install --no-cache-dir torch==2.0.1 --index-url https://download.pytorch.org/whl/cpu \
    && pip install --no-cache-dir gunicorn -r requirements.txt

COPY . .

# Stage 2: Minimal production image
FROM python:3.11-slim

WORKDIR /app

# Copy only the built Python environment and application files
COPY --from=build /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages
COPY --from=build /usr/local/bin/gunicorn /usr/local/bin/gunicorn
COPY --from=build /app .

# Install runtime-only dependencies
RUN apt-get update && apt-get install -y --no-install-recommends libsndfile1 ffmpeg \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

EXPOSE 8000

CMD ["python", "-m", "gunicorn", "--bind", "0.0.0.0:8000", "--workers=2", "--timeout=120", "app:app"]
