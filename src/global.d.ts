import { Alpine as AlpineType } from 'alpinejs'
import { sprintf as SprintfType } from "sprintf-js";

declare global {
  var alpine: AlpineType
  // TODO Remove this after solving issue with dynamic import runtime error,
  // see comments in main.ts. Global below doesn't help with type hints?
  var sprintf: SprintfType
}