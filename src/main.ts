import Alpine from 'alpinejs'

// Make alpine available on window for better DX
window.alpine = Alpine

Alpine.store("data", {
  foo: "bar",
  colors: ["green", "red", "yellow"],
})

Alpine.start()

