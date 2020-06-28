import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e36a5ee = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _faeb15e4 = () => interopDefault(import('../pages/generic.vue' /* webpackChunkName: "pages/generic" */))
const _c605cb6e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7e36a5ee,
    name: "gallery"
  }, {
    path: "/generic",
    component: _faeb15e4,
    name: "generic"
  }, {
    path: "/",
    component: _c605cb6e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
