#!/bin/bash

# Configuration
PROJECT_ID="gen-lang-client-0953533999"
SERVICE_NAME="comic-portfolio"
REGION="us-central1"

# Build and deploy
gcloud run deploy $SERVICE_NAME \
  --source . \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --labels dev-tutorial=devnewyear2026 \
  --project $PROJECT_ID
