# alpinejs-validation

Validation service for use with AlpineJS.

Repo can also be used as a starter for AlpineJS and TypeScript projects

Styling is done with [w3.css](https://www.w3schools.com/w3css)

Also see [angularjs-validation](https://github.com/mozey/angularjs-validation)


## Demo

Build
```bash
# Static analysis of TypeScript source with tsc, don't bundle
tsc -noEmit 
# Bundle app Javascript and CSS with esbuild
# https://esbuild.github.io/api/#sourcemap
esbuild src/main.ts --sourcemap --bundle --outfile=dist/app.js
```

Use a static file server like [Caddy](https://caddy.community/),
re-build and reload the page for changes
```bash
caddy file-server -browse -listen localhost:8080 -root ./
```

Open [localhost:8080](http://localhost:8080)

TODO Watcher script for live-reload?


## Project Layout

Inspired by [Getting started with AlpineJS and TypeScript](https://archive.ph/3uBQM).

However, [vite does not use esbuild yet?](https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild)

Keep the `node_modules` dir lean. Only the AlpineJS source code is required. For JS dependencies only install the type definitions
```bash
npm install -S alpinejs
npm install -D @types/alpinejs
npm install -S sprintf-js
npm install -D @types/sprintf-js
npm install -S w3-css
du -sh ./node_modules
# 1.5M
```

Bundling is done with `esbuild`. Install globally (like `tsc`) instead of adding binaries to node_modules
```bash
brew install esbuild
```


