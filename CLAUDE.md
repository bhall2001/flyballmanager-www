# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for Flyball Manager, a flyball tournament management desktop application. The site is built with Docusaurus 3 and hosted on Netlify.

**Key characteristics:**
- Static site generator using React and MDX
- Automatic deployment to Netlify on commits to main branch
- Package manager: pnpm (see pnpm-lock.yaml)
- Node version: 16.14+ (specified in .nvmrc and package.json)

## Development Commands

### Installation
```bash
pnpm install
```

### Local Development
```bash
npm start
```
Starts dev server at http://localhost:3000 with hot reload enabled for most changes.

### Build
```bash
pnpm build
```
Generates static content into the `build` directory. Note: Docusaurus validates links during build - `onBrokenLinks: 'throw'` in config means builds will fail on broken links.

### Other Available Commands
```bash
npm run serve            # Serve production build locally
npm run clear            # Clear Docusaurus cache
npm run swizzle          # Customize Docusaurus theme components
```

## Architecture

### Site Structure

**Homepage** ([src/pages/index.js](src/pages/index.js))
- Composed of modular homepage sections in `src/components/Homepage*` directories
- Each section is self-contained with its own JSX component and styles
- Sections rendered in order: Benefits → ScheduleEnhance → Features → Pricing → Download → Attribution
- Each component follows pattern: `index.js` (exports component) + Component JSX + `styles.module.css`

**Documentation** ([docs/](docs/))
- Two separate sidebars defined in [sidebars.js](sidebars.js):
  - `docsSidebar`: Main documentation (tournament features, scoring, brackets, settings, FAQ)
  - `tutorialSidebar`: Step-by-step tutorial for new users
- Sidebar configuration in [sidebars.js](sidebars.js) controls doc organization and navigation
- Documentation is organized by feature area (tournament, brackets, online features)

**Blog** ([blog/](blog/))
- Standard Docusaurus blog with post frontmatter
- Posts include release notes and feature announcements
- Authors defined in [blog/authors.yml](blog/authors.yml)

### Configuration

**[docusaurus.config.js](docusaurus.config.js)**
- Site metadata (title, tagline, URL)
- Navbar structure with Docs, Tutorial, and Blog links
- Theme configuration (Prism themes: GitHub for light, Dracula for dark)
- Currently using classic preset with docs, blog, and theme

**Key settings:**
- `onBrokenLinks: 'throw'` - Builds fail on broken links (strict validation)
- `onBrokenMarkdownLinks: 'warn'` - Broken markdown links only warn
- Custom CSS: [src/css/custom.css](src/css/custom.css)

### Component Patterns

**Docusaurus Aliases**
- `@site/` - Root directory alias for imports
- `@theme/` - Theme component imports (Layout, Link, etc.)
- `@docusaurus/` - Core Docusaurus utilities (Link, useDocusaurusContext, etc.)

**Documentation Pages**
- Use MDX format (Markdown + JSX)
- Frontmatter required: `id`, `title`, `sidebar_label`
- Tutorial pages use `slug` to define custom URLs
- Rich content possible via MDX (React components in markdown)

**Static Assets**
- `/static/img/` - Images and SVGs used in docs and homepage
- `/static/extra/` - Additional static files
- Assets referenced as `/img/path` in markdown (no "static" prefix needed)

## Deployment

**Netlify Integration**
- Auto-deploys on push to main branch
- Build command: `pnpm build`
- Publish directory: `build/`
- Configuration: [netlify.toml](netlify.toml)
- URL: thunderous-rolypoly-7aaf6e.netlify.app

## MCP Servers

This repository uses the **Serena MCP server** for enhanced semantic code understanding and editing capabilities.

**Configuration**: [.mcp.json](.mcp.json) | **Auto-enabled**: Yes ([.claude/settings.local.json](.claude/settings.local.json))

**Quick Start**:
- Restart Claude Code - Serena auto-starts (uv already installed)
- Dashboard: http://localhost:24282/dashboard/index.html
- See [SERENA.md](SERENA.md) for quick reference or [.claude/serena-onboarding.md](.claude/serena-onboarding.md) for full guide

**What it provides**:
- Semantic search and code navigation (LSP-powered)
- Context-aware code editing
- Natural language codebase queries
- Project-specific context: `ide-assistant` mode

## Common Tasks

### Adding New Documentation Page
1. Create markdown file in `docs/` directory
2. Add frontmatter with `id`, `title`, `sidebar_label`
3. Add the doc ID to appropriate sidebar in [sidebars.js](sidebars.js)
4. Build locally to verify links work (`pnpm build`)

### Modifying Homepage
- Edit section components in `src/components/Homepage*/`
- Reorder sections by changing component order in [src/pages/index.js](src/pages/index.js)
- Styles are scoped via CSS Modules (`.module.css` files)

### Updating Navigation
- Main navbar: Edit `themeConfig.navbar` in [docusaurus.config.js](docusaurus.config.js)
- Sidebar navigation: Edit [sidebars.js](sidebars.js)
- Footer: Edit `themeConfig.footer` in [docusaurus.config.js](docusaurus.config.js)

### Working with Blog
- Create `.md` file in `blog/` with date prefix: `YYYY-MM-DD-slug.md`
- Include frontmatter: title, author, tags
- Authors defined in [blog/authors.yml](blog/authors.yml)