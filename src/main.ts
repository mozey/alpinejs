import Alpine from 'alpinejs'
// TODO Passing the `--external:sprintf-js` flag to esbuild 
// results in dynamic import runtime error. How to bundle pre-built deps?
// import {sprintf} from "sprintf-js";

// Make alpine available on window for better DX
window.alpine = Alpine

Alpine.store("data", {
  foo: sprintf("=> %s!", Date()),
  colors: ["green", "red", "yellow"],
})

Alpine.start()

