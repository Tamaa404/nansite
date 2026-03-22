# Astro-Light: High-Performance Static Portfolio

A lightning-fast personal portfolio built with **Astro 6**, **Tailwind CSS**, and **Content Collections**. Designed to load instantly—even on 3G connections in Buleleng.

## ✨ Features

- **⚡ Zero Runtime JavaScript** - Pure static files, no database required
- **📝 Markdown-Based Content** - Write your updates, projects & lessons in plain Markdown
- **🎨 Developer-Dark Aesthetic** - Clean, modern design with Tailwind CSS
- **📦 Four Distinct Zones**:
  - **Home**: Landing page with recent life updates
  - **Lab**: Showcase your projects (AI, robotics, web development)
  - **Classroom**: Share educational modules (Arduino & Python)
  - **Feed**: Chronological blog of life updates

## 🚀 Quick Start

### Prerequisites
- Node.js 22+ (included in package.json)
- npm or yarn

### Installation

```bash
cd personal-site
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site in real-time.

### Building

```bash
npm run build
npm run preview  # Preview the production build locally
```

Output is generated in the `dist/` folder.

## 📝 Adding Content

### 1. Life Updates (The Feed)

Create a new Markdown file in `src/content/updates/`:

```bash
# File: src/content/updates/my-first-update.md
---
title: My First Update
date: 2026-03-22
category: Personal  # AI, Teaching, Personal, Robotics, Web Dev
description: A brief summary of this update
---

This is the full content of your update. You can use **Markdown** formatting.

## Sections

Add as many sections as you need...
```

### 2. Projects (The Lab)

Create a new Markdown file in `src/content/projects/`:

```bash
# File: src/content/projects/my-awesome-project.md
---
title: My Awesome Project
date: 2026-03-20
description: What this project does
tags: [AI, Python, Computer Vision]
featured: true  # Shows on Lab page prominently
link: https://github.com/yourusername/project-url
---

## Project Overview

Detailed description of your project...
```

### 3. Teaching Modules (The Classroom)

Create a new Markdown file in `src/content/teaching/`:

```bash
# File: src/content/teaching/arduino-lesson-1.md
---
title: Arduino Lesson 1: Getting Started
date: 2026-03-18
subject: Arduino  # Arduino or Python
level: Beginner  # Beginner, Intermediate, Advanced
description: Learn the basics of Arduino programming
---

## Introduction

Start teaching!
```

## 📂 Project Structure

```
personal-site/
├── src/
│   ├── content/
│   │   ├── updates/         # Life updates (Feed)
│   │   ├── projects/        # Your projects (Lab)
│   │   ├── teaching/        # Educational modules (Classroom)
│   │   └── config.ts        # Content schema definitions
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── feed/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro # Individual update page
│   │   ├── lab/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro # Individual project page
│   │   └── classroom/
│   │       ├── index.astro
│   │       └── [slug].astro # Individual lesson page
│   ├── layouts/
│   │   └── MainLayout.astro # Navigation & footer
│   ├── components/          # Reusable Astro components
│   └── styles/
│       └── global.css       # Tailwind directives & global styles
├── public/                  # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions CI/CD
└── astro.config.mjs        # Astro configuration
```

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Update the site URL** in `astro.config.mjs`:
   ```javascript
   site: 'https://yourusername.github.io',
   base: '/personal-site',  // or remove if deploying to yourusername.github.io
   ```

2. **Initialize a Git repository** (if you haven't):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Astro-Light portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/personal-site.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Select "GitHub Actions"
   - The workflow will automatically build and deploy on every push to `main`

### Nginx (On Your Proxmox Server)

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Copy output to your Nginx directory**:
   ```bash
   cp -r dist/* /var/www/html/
   ```

3. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```

## 🎨 Customization

### Update Site Metadata

Edit `src/layouts/MainLayout.astro` to change:
- Navigation links
- Footer text
- Site title & description
- Social media links

### Modify Colors

Edit `tailwind.config.js` to customize the color scheme. Currently using:
- **Dark slate background** (slate-950)
- **Cyan accents** (cyan-400)
- **Orange/Blue for code** (syntax highlighting)

### Change Fonts

Update `src/styles/global.css` to import custom fonts via Google Fonts or local files.

## 📊 Performance

- **HTML-only output** - Minimal file sizes
- **No JavaScript runtime** - Lightning-fast page loads
- **Image optimization** - Astro automatically optimizes all images
- **CSS bundling** - Tailwind purges unused styles
- **Static hosting** - Works on any CDN

### Expected Metrics
- Lighthouse score: 95-100
- First contentful paint: <500ms
- Time to interactive: <1s

## 🛠️ Development

### Adding New Content Collections

1. Create a new folder in `src/content/`
2. Update `src/content.config.ts` with the new collection definition
3. Create corresponding pages in `src/pages/`

### Creating New Pages

Simply create `.astro` files in `src/pages/`. Astro automatically handles routing (e.g., `src/pages/about.astro` → `/about`).

### Using Components

Create reusable components in `src/components/` and import them in your pages:

```astro
---
import MyComponent from '../components/MyComponent.astro';
---

<MyComponent title="Hello" />
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

## 🐛 Troubleshooting

### Build Fails with Tailwind Error

Make sure `tailwind.config.js` includes all your content paths:
```js
content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
```

### Content Not Showing

- Verify file is in the correct folder (`src/content/[collection]/`)
- Check frontmatter (YAML) syntax - make sure it's valid
- Run `npm run build` to rebuild everything

### Images Not Loading

Place images in `src/assets/` and import them, or use `/` prefix for files in `public/`.

## 📄 License

MIT - Feel free to use this as a template for your own portfolio!

## 🎯 The Workflow (For You)

Once set up, adding a life update takes **3 steps**:

1. Create `src/content/updates/my-update.md`
2. Write your update in Markdown
3. Run `git push` → Automatically deployed! 🚀

That's it. No servers, no databases, no manual deployments.

---

**Built with ❤️ using Astro, Tailwind CSS, and Lucide Icons**
