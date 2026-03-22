# ✦ Nan Portfolio (Astro-Light)

A lightning-fast, high-performance static portfolio built with Astro 6 and Tailwind CSS. Designed to be lightweight and accessible.

## 🚀 Quick Start

1. **Install dependencies:**
   \\\sh
   npm install
   \\\
2. **Start the local server:**
   \\\sh
   npm run dev
   \\\
3. **Open in your browser:**
   Navigate to [http://localhost:4321/nansite/](http://localhost:4321/nansite/)

---

## 📖 The Manual Book (Project Architecture)

Here is a quick tour of your new website's architecture so you know exactly where to go to make changes or add new things!

### 1. Which one is the Main (Home) Page?
The home page of your website is located at \src/pages/index.astro\. 
If you want to change the main headline, the introduction text, or the layout of the home page dashboard, this is the file you need to modify.

### 2. The Main "Shell" (Header & Footer)
The main layout wrapper for your entire site is \src/layouts/MainLayout.astro\. 
- Any changes you make to the \<nav>\ (like adding or modifying menu links) will automatically update across the entire site.
- Any changes to the \<footer>\ will also apply everywhere.

### 3. Modifying Specific Sections
Your site is divided into three main sections. If you want to change the visual layout, grid styles, or text on the main pages of these sections, edit their respective index files:
- **Lab (Projects):** \src/pages/lab/index.astro\
- **Classroom (Teaching):** \src/pages/classroom/index.astro\
- **Feed (Updates):** \src/pages/feed/index.astro\

*(Need to change how individual blog/project pages look? Those are the \[slug].astro\ files located next to each index!)*

---

## 📝 How to add NEW Projects, Lessons, or Feed Updates

Because this site uses **Astro Content Collections**, you do **not** need to code a new \.astro\ page for every new post! 
To add content to your site, you just create a simple Markdown (\.md\) file inside the \src/content/\ folder:

- Drop a \.md\ file in \src/content/updates/\ to create a new **Feed post**.
- Drop a \.md\ file in \src/content/projects/\ to add a new **Lab project**.
- Drop a \.md\ file in \src/content/teaching/\ to add a new **Classroom module**.

Whenever you add a Markdown file here, your site will automatically generate a page for it and add it to your grids! Make sure to include the required "frontmatter" (the \---\ block at the top of the markdown file) so the site knows its title, date, etc.

---

## 📄 How to add an entirely NEW Page

If you want to create a brand new custom page (like \yoursite.com/nansite/about\), follow these 3 simple steps:

1. **Create the file:** Make a new file called \bout.astro\ inside the \src/pages/\ folder.
2. **Add the layout:** Paste this code inside it to wrap it in your site's theme:
   \\\stro
   ---
   import MainLayout from '../layouts/MainLayout.astro';
   ---

   <MainLayout>
     <div class="max-w-4xl mx-auto px-4 py-20">
       <h1 class="text-4xl text-cyan-400 font-bold">About Me</h1>
       <p class="mt-4 text-slate-300">This is my new about page.</p>
     </div>
   </MainLayout>
   \\\
3. **Link it in the Nav:** Finally, open your \src/layouts/MainLayout.astro\ file and add a new \<li>\ with a link pointing to \/nansite/about\ inside your \<nav>\ menu.

---

## ⚙️ Deployment

This project contains an automated GitHub Actions deployment script (\.github/workflows/deploy.yml\).
Every time you push changes to the \main\ branch, the GitHub Action automatically builds the site using Node 22 and deploys it to GitHub Pages.
