#!/usr/bin/env  node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PROJECT_NAME = process.argv[2];

if (!PROJECT_NAME) {
  console.log("Usage: npx nuwancat-vue <project-name>");
  console.log("Example: npx nuwancat-vue my-app");
  process.exit(1);
}

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

function write(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
}

console.log("");
console.log(`  Setting up: ${PROJECT_NAME}`);
console.log("  Stack: Vue 3 + TypeScript + Tailwind CSS v4 + Router");
console.log("");

console.log("[1/5] Creating Vite project...");
execSync(`npm create vite@latest ${PROJECT_NAME} -- --template vue-ts`, {
  stdio: ["pipe", "inherit", "inherit"],
  input: "yes\n",
});

process.chdir(PROJECT_NAME);

console.log("");
console.log("[2/5] Installing Tailwind CSS v4...");
run("npm install -D tailwindcss @tailwindcss/vite");

console.log("");
console.log("[3/5] Installing Vue Router...");
run("npm install vue-router@4");

console.log("");
console.log("[4/5] Configuring Vite plugin...");

write(
  "vite.config.ts",
  `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite"
 
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
`,
);

console.log("");
console.log("[5/5] Setting up CSS, main.ts, Router, and folder structure...");

write("src/style.css", `@import "tailwindcss";\n`);

write(
  "src/main.ts",
  `import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
 
createApp(App).use(router).mount('#app')
`,
);

const folders = [
  "src/router",
  "src/views",
  "src/components",
  "src/composables",
  "src/types",
  "src/lib",
];
folders.forEach((f) => fs.mkdirSync(f, { recursive: true }));

write(
  "src/router/index.ts",
  `import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
  ],
})
 
export default router
`,
);

write(
  "src/views/HomeView.vue",
  `<script setup lang="ts">
 
</script>
 
<template>
  <!-- ↓ delete everything in this file and start here -->
  <main class="min-h-screen flex flex-col items-center justify-center bg-gray-950 px-4">
    <section class="flex flex-col items-center text-center gap-6">
      <img
        src="https://i.imgur.com/bcckeY0.jpeg"
        alt="nuwancat"
        class="w-24 h-24 rounded-3xl ring-2 ring-white/10 shadow-xl"
      />
      <div class="space-y-2">
        <h1 class="text-5xl font-bold tracking-tight text-white">
          Ready to build.
        </h1>
        <p class="text-gray-500 text-base">
          Vue 3 · TypeScript · Tailwind v4 · Router
        </p>
      </div>
      <p class="max-w-sm text-sm text-gray-600 leading-relaxed">
        Built at 2 AM so you can skip the Vite config headache.
        <br />
        Buy a coffee = You're welcome.
      </p>
      <a
        href="https://ko-fi.com/nuwancat"
        target="_blank"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium transition-all duration-200"
      >
        <span class="w-6 h-6 mt-1">
          <img src="https://i.imgur.com/Uv4psyP.png" alt="ko-fi logo" />
        </span>
        Buy me a coffee
      </a>
    </section>
  </main>
</template>
`,
);

write(
  "src/App.vue",
  `<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
 
<template>
  <RouterView />
</template>
`,
);

try {
  fs.rmSync("src/components/HelloWorld.vue", { force: true });
} catch {}

run("curl -s -o public/favicon.png https://i.imgur.com/10iwW9g.png");

let html = fs.readFileSync("index.html", "utf8");
html = html.replace(
  '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />',
  '<link rel="icon" type="image/png" href="/favicon.png" />',
);
fs.writeFileSync("index.html", html);

write("public/_redirects", "/* /index.html 200\n");

write(
  ".gitignore",
  `node_modules/
dist/
.env
.env.local
.env.*.local
.DS_Store
`,
);

fs.writeFileSync(".env", "");

console.log("");
console.log("================================================");
console.log("  Done! Project ready.");
console.log("================================================");
console.log("");
console.log("  Next steps:");
console.log("");
console.log(`    cd ${PROJECT_NAME}`);
console.log("    npm run dev");
console.log("");
console.log("  Open: http://localhost:5173");
console.log("");