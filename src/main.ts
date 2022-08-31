import Alpine from 'alpinejs'
import {sprintf} from "sprintf-js";
import {Validation} from "./validation"
import 'w3-css/w3.css';

// Make alpine available on window for better DX
window.alpine = Alpine

Alpine.store("data", {
  foo: sprintf("=> %s!", Date()),
  colors: ["green", "red", "yellow"],
})

// TODO Create x-validate directive for use with <form> nodes
// https://alpinejs.dev/advanced/extending
Alpine.directive("uppercase", (el: Node) => {
  var v = new Validation()
  if (el.textContent !== null) {
      el.textContent = v.uppercase(el.textContent)
  }
})

// "Extensions must have been registered IN BETWEEN when the Alpine
// global object is imported and when Alpine is initialized with
// the Alpine.start() call"
Alpine.start()

