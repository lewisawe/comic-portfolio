# Comic Portfolio

A comic book-themed portfolio site built with React, TypeScript, and deployed on Google Cloud Run.

**Live Site:** https://comic-portfolio-610288702971.us-central1.run.app

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Cloud Run

```bash
gcloud run deploy comic-portfolio \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --labels dev-tutorial=devnewyear2026
```

Or use the deploy script:

```bash
./deploy.sh
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- Recharts
- Docker + Nginx
- Google Cloud Run
