import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e0aa017 = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages_gallery" */))
const _3fb0681c = () => interopDefault(import('..\\pages\\generic.vue' /* webpackChunkName: "pages_generic" */))
const _6d8078d7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/gallery",
    component: _7e0aa017,
    name: "gallery"
  }, {
    path: "/generic",
    component: _3fb0681c,
    name: "generic"
  }, {
    path: "/",
    component: _6d8078d7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
