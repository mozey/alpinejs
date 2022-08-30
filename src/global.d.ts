import { Alpine as AlpineType } from 'alpinejs'

declare global {
  var alpine: AlpineType
  // TODO Remove this after solving issue with dynamic import runtime error
  var sprintf: any
}