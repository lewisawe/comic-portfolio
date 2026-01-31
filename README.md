# Comic Portfolio

A comic book-themed portfolio site that turns the usual boring developer portfolio into something more interesting. Built with React, TypeScript, and deployed on Google Cloud Run.

**Live Site:** https://comic-portfolio-610288702971.us-central1.run.app

## What This Is

Instead of the standard minimal portfolio everyone makes, this one uses a comic book theme as a storytelling framework. Skills become "Superpowers," projects are "Missions," and challenges I've solved are presented as a "Villain Gallery." It's a bit ridiculous but it works.

The site shows real work—AWS and cloud certifications, actual projects with measurable results, and problems I've solved in production environments. The comic book aesthetic just makes it more memorable.

## Features

- Interactive easter eggs (Konami Code, click combos)
- Floating particle effects
- Responsive design that works on mobile
- Custom comic book styling with Tailwind
- Skill visualization with power meters
- Real project showcases with tech stacks
- Accessible with semantic HTML and ARIA labels

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Tech Stack

Built with React 19 and TypeScript for type safety. Vite handles the build process because it's fast and doesn't need much configuration. Tailwind CSS with a custom theme provides the comic book styling—yellows, reds, blues, rotated text, and bold borders. Recharts visualizes skill levels as power meters.

The whole thing runs in a Docker container with a multi-stage build. Node compiles everything, then Nginx serves the static files. Final image is around 50MB. Deployed on Google Cloud Run with auto-scaling and automatic HTTPS.

Used Google AI Studio and Gemini to help with content generation and keeping the comic book voice consistent without going overboard.

## Project Structure

- `App.tsx` - Main application component
- `constants.tsx` - Portfolio data and custom icons
- `types.ts` - TypeScript type definitions
- `components/` - Individual React components for each section
- `Dockerfile` - Multi-stage build configuration
- `nginx.conf` - Nginx configuration for SPA routing

## Submission

This portfolio was built for the DEV.to "New Year, New You" Portfolio Challenge presented by Google AI. The goal was to create something that shows technical skills while also showing personality. If you're looking at this and thinking "this person knows their stuff but seems like they'd be decent to work with," then it did its job.
