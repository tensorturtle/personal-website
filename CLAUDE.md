# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Jason Sohn's personal website built with Astro, featuring a blog and portfolio. The site is deployed using Docker with a Caddy server.

## Development Commands

### Core Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site with type checking
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run astro check` - Type-check Astro components (runs automatically with build)

## Architecture

### Technology Stack
- **Framework**: Astro with MDX support
- **Styling**: Tailwind CSS with Typography plugin
- **TypeScript**: Strict mode enabled with path aliases (@* → ./src/*)
- **Deployment**: Docker container with Caddy server

### Project Structure
- `/src/pages/` - Astro pages (routes)
- `/src/content/` - Content collections for blog and portfolio posts
- `/src/components/` - Reusable Astro components
- `/src/layouts/` - Page layouts
- `/src/styles/` - Global styles
- `/src/lib/` - Utility functions
- `/public/` - Static assets

### Key Configuration Files
- `astro.config.mjs` - Astro configuration with integrations (MDX, Sitemap, Tailwind, Starlight)
- `tailwind.config.mjs` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration with strict mode and path aliases

### Content Management
- Blog posts: `/src/content/blog/`
  - Frontmatter requires: `title`, `description`, `date` (ISO format: YYYY-MM-DD), optional `draft`
  - IMPORTANT: Always get the current date using `date +%Y-%m-%d` command before creating a blog post
- Portfolio items: `/src/content/portfolio/`
  - Frontmatter requires: `company`, `role`, `dateStart`, `dateEnd`
- Site metadata: `/src/consts.ts`

## Deployment

Production deployment uses Docker:

### Building for AMD64 (Linux servers)
**Important:** Due to an Astro build issue with Docker BuildKit on ARM64 Macs, use the legacy builder:
```bash
DOCKER_BUILDKIT=0 docker build --platform linux/amd64 -t tensorturtle/personal-website-astro .
```

### Push to Docker Hub
```bash
docker push tensorturtle/personal-website-astro
```

### Deploy on server
```bash
docker compose pull && docker compose up -d
```