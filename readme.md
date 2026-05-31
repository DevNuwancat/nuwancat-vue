![nuwancat-vue](https://i.imgur.com/psmnKDY.png)

# Nuwancat-Vue

> Scaffold a **Vue 3 + TypeScript + Tailwind CSS v4 + Vue Router** project in one command.

## What you get

- ⚡ Vue 3 — Composition API
- 🔷 TypeScript — Fully typed
- 🎨 Tailwind CSS v4 — No config file needed
- 🔀 Vue Router — SPA ready
- 📁 Clean folder structure
- 🔧 Netlify _redirects — SPA routing fix

 
## The Problem This Solves
 
Setting up a modern Vue 3 project from scratch is painful. You have to:
 
- Run `npm create vite@latest` and answer prompts
- Manually install Tailwind CSS v4 (different from v3 — no config file!)
- Manually configure `@tailwindcss/vite` plugin in `vite.config.ts`
- Install and wire up Vue Router
- Set up `main.ts` to connect everything
- Create folder structure (`components/`, `views/`, `composables/`, etc.)
- Add `.env`, `.gitignore`, Netlify `_redirects` for deployment
- Delete Vite's default junk files (`HelloWorld.vue`, etc.)
**That's 8+ steps just to start writing your actual app.**
 
`nuwancat-vue` does all of it in one command.
 
---
 
## Usage
 
```bash
npx nuwancat-vue my-project
cd my-project
npm run dev
```
  
---
 
## What Happens Inside
 
When you run `npx nuwancat-vue my-project`, here's exactly what happens step by step:
 
### [1/5] Creates the Vite base project
```bash
npm create vite@latest my-project -- --template vue-ts
```
Starts with the **official Vite Vue TypeScript template** — not a custom hack. This gives you a solid, maintained foundation.
 
### [2/5] Installs Tailwind CSS v4
```bash
npm install -D tailwindcss @tailwindcss/vite
```
Installs **Tailwind v4** — the latest version. Unlike v3, Tailwind v4 requires **no `tailwind.config.js` file**. It uses a Vite plugin instead, which is faster and simpler.
 
### [3/5] Installs Vue Router
```bash
npm install vue-router@4
```
Installs the official Vue Router for SPA (Single Page App) navigation.
 
### [4/5] Configures Vite
Automatically rewrites `vite.config.ts` to wire in both Vue and Tailwind v4:
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"
 
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
```
No manual editing needed.
 
### [5/5] Sets up everything else
All of the following is created automatically:
 
| File / Folder | What it does |
|---|---|
| `src/style.css` | Imports Tailwind v4 with one line |
| `src/main.ts` | Connects Vue app + Router + styles |
| `src/router/index.ts` | Sets up Vue Router with home route |
| `src/views/HomeView.vue` | Clean starter page (delete and build!) |
| `src/App.vue` | Root component with `<RouterView />` |
| `src/components/` | For your reusable UI components |
| `src/composables/` | For your reusable logic (hooks) |
| `src/types/` | For your TypeScript type definitions |
| `src/lib/` | For utility/helper functions |
| `public/_redirects` | Fixes SPA routing on Netlify deployment |
| `.env` | Empty env file ready for your secrets |
| `.gitignore` | Ignores `node_modules`, `dist`, `.env` |
 
Also cleans up Vite's default `HelloWorld.vue` and replaces the favicon.
 
---
 
## What You Get
 
```
my-project/
├── public/
│   ├── favicon.png
│   └── _redirects         ← Netlify SPA fix
├── src/
│   ├── assets/
│   ├── components/        ← Your UI components
│   ├── composables/       ← Your reusable logic
│   ├── lib/               ← Utility functions
│   ├── router/
│   │   └── index.ts       ← Vue Router config
│   ├── types/             ← TypeScript types
│   ├── views/
│   │   └── HomeView.vue   ← Your first page
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── .env
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```
 
---
 
## Stack
 
| Tool | Version | Why |
|---|---|---|
| Vue | 3.x | Composition API, fast, modern |
| TypeScript | Latest | Type safety out of the box |
| Tailwind CSS | **v4** | No config file, Vite-native |
| Vue Router | 4.x | Official SPA routing |
| Vite | Latest | Fastest dev server available |
 
---
 
## Why Tailwind v4?
 
Most scaffolders are still on Tailwind v3. Tailwind v4 is a complete rewrite:
 
- ✅ No `tailwind.config.js` needed
- ✅ Faster builds (Rust-based engine)
- ✅ Just one CSS import: `@import "tailwindcss"`
- ✅ Works natively as a Vite plugin
`nuwancat-vue` is configured for v4 from the start — no migration needed later.
 
---
 
## Deploy to Netlify
 
The `public/_redirects` file is already included. Just connect your repo to Netlify and deploy. Vue Router's history mode will work correctly — no 404 on page refresh.
 
---
 
## Support
 
Built at 2 AM so you can skip the Vite config headache. ☕
 
If it helped you ship faster → [ko-fi.com/nuwancat](https://ko-fi.com/nuwancat)
 
---
 
## License
 
MIT · Made in Sri Lanka 🇱🇰



## Support

Built at 2 AM so you can skip the Vite config headache. ☕

If it helped you ship faster → [ko-fi.com/nuwancat](https://ko-fi.com/nuwancat)

## License

MIT · Made in Sri Lanka 🇱🇰
