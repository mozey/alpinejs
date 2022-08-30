# alpinejs-validation

Validation service for use with AlpineJS.

Repo can also be used as a starter for AlpineJS and TypeScript projects


## Demo

Build
```bash
# Binaries are not versioned
npm install 
# Static analysis with tsc but don't build
tsc -noEmit 
# Bundle app
./node_modules/.bin/esbuild src/main.ts --bundle --outfile=dist/app.js
```

Use a static file server like [Caddy](https://caddy.community/),
re-build and reload the page for changes
```bash
caddy file-server -browse -listen localhost:8080 -root ./
```

Open [localhost:8080](http://localhost:8080)

TODO watcher script for live-reload?


## Project Layout

Inspired by [Getting started with AlpineJS and TypeScript](https://archive.ph/3uBQM).

However, [vite does not use esbuild yet?](https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild). 

Keep the `node_modules` dir lean. Only the AlpineJS source code is required. For JS dependencies only install the type definitions
```bash
npm install -S alpinejs
npm install -D @types/alpinejs
```

Bundling is done with `esbuild`. Version everything except binaries, see `.gitignore`
```bash
npm install esbuild
du -sh -I esbuild ./node_modules
# 1.3M
```


