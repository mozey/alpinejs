# alpinejs-validation

AlpineJS and TypeScript starter project with validation directive example.

Styling is done with [w3.css](https://www.w3schools.com/w3css) because it's similar to Bootstrap and easier to use.

Similar to [angularjs-validation](https://github.com/mozey/angularjs-validation) but simpler


## Demo

Build
```bash
# Static analysis of TypeScript source with tsc, don't bundle
tsc -noEmit 
# Bundle app Javascript and CSS with esbuild.
# Sourcemap enables viewing and debugging TypeScript source in Dev Console
# https://esbuild.github.io/api/#sourcemap
esbuild src/app.ts --sourcemap --bundle --outfile=www/dist/app.js
```

Use a static file server like [Caddy](https://caddy.community/),
re-build and reload the page for changes
```bash
caddy file-server -browse -listen localhost:8080 -root ./www
```

Open [localhost:8080](http://localhost:8080)

TODO Watcher script for live-reload?


## Project Layout

Inspired by [Getting started with AlpineJS and TypeScript](https://archive.ph/3uBQM).

However, [vite does not use esbuild yet?](https://vitejs.dev/guide/why.html#why-not-bundle-with-esbuild)

Keep the `node_modules` dir lean!
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


