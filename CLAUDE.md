# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for Flyball Manager, a tournament scoring application for flyball dog sports. The site is built using Docusaurus 2 and hosted on Netlify.

## Development Commands

### Installation
```bash
pnpm install
```

### Local Development
```bash
npm start
# or
pnpm start
```
Starts local development server with live reload.

### Build
```bash
pnpm build
```
Generates static content into the `build` directory.

### Other Available Commands
```bash
pnpm run serve           # Serve built site locally
pnpm run clear           # Clear Docusaurus cache
pnpm run swizzle         # Customize Docusaurus components
pnpm run deploy          # Deploy to hosting
```

## Architecture

### Docusaurus Structure
- **docs/**: Markdown documentation files organized by feature
- **blog/**: Blog posts for release notes and announcements
- **src/**: React components and custom code
  - `src/components/`: Custom React components for homepage
  - `src/css/`: Custom CSS styling
- **static/**: Static assets (images, favicons, etc.)
- **sidebars.js**: Navigation structure configuration
- **docusaurus.config.js**: Main configuration file

### Documentation Organization
The site has two main documentation sections:
1. **Main Docs** (`docsSidebar`): Complete feature documentation including tournament management, scoring, brackets, settings
2. **Tutorial** (`tutorialSidebar`): Step-by-step getting started guide

### Content Structure
- Documentation follows standard Docusaurus markdown format with frontmatter
- Sidebar navigation is manually configured in `sidebars.js`
- Homepage features custom React components showcasing application features

## Deployment

- **Hosting**: Netlify
- **Domain**: thunderous-rolypoly-7aaf6e.netlify.app
- **CI/CD**: Automatic builds triggered by commits to main branch
- **Build Command**: `pnpm build` (configured in Netlify)

## Package Management

- Uses **pnpm** for package management
- Node.js version: >= 16.14 (see `.nvmrc` for specific version)
- TypeScript support is configured but most components use JSX

## Key Configuration

- **Title**: "Flyball Manager"
- **Tagline**: "Planning, Scoring and Reporting"
- **Prism themes**: GitHub (light) and Dracula (dark)
- **Navbar**: Includes Docs, Tutorial, and Blog sections