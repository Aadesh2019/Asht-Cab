import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _26d18c23 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7c9d8d47 = () => interopDefault(import('..\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))
const _2c2435df = () => interopDefault(import('..\\pages\\_slug\\_slug2\\index.vue' /* webpackChunkName: "pages/_slug/_slug2/index" */))
const _22532854 = () => interopDefault(import('..\\pages\\_slug\\_slug2\\_slug3\\index.vue' /* webpackChunkName: "pages/_slug/_slug2/_slug3/index" */))
const _203c602c = () => interopDefault(import('..\\pages\\_slug\\_slug2\\_slug3\\_slug4\\index.vue' /* webpackChunkName: "pages/_slug/_slug2/_slug3/_slug4/index" */))
const _2d1d43e1 = () => interopDefault(import('..\\pages\\_slug\\_slug2\\_slug3\\_slug4\\_slug5\\index.vue' /* webpackChunkName: "pages/_slug/_slug2/_slug3/_slug4/_slug5/index" */))
const _37017016 = () => interopDefault(import('..\\pages\\_slug\\_slug2\\_slug3\\_slug4\\_slug5\\_slug6\\index.vue' /* webpackChunkName: "pages/_slug/_slug2/_slug3/_slug4/_slug5/_slug6/index" */))
const _6eb0c530 = () => interopDefault(import('..\\pages\\_slug\\_slug2\\_slug3\\_slug4\\_slug5\\_slug6\\_slug7\\index.vue' /* webpackChunkName: "pages/_slug/_slug2/_slug3/_slug4/_slug5/_slug6/_slug7/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _26d18c23,
    name: "index"
  }, {
    path: "/:slug",
    component: _7c9d8d47,
    name: "slug"
  }, {
    path: "/:slug/:slug2",
    component: _2c2435df,
    name: "slug-slug2"
  }, {
    path: "/:slug/:slug2/:slug3",
    component: _22532854,
    name: "slug-slug2-slug3"
  }, {
    path: "/:slug/:slug2/:slug3/:slug4",
    component: _203c602c,
    name: "slug-slug2-slug3-slug4"
  }, {
    path: "/:slug/:slug2/:slug3/:slug4/:slug5",
    component: _2d1d43e1,
    name: "slug-slug2-slug3-slug4-slug5"
  }, {
    path: "/:slug/:slug2/:slug3/:slug4/:slug5/:slug6",
    component: _37017016,
    name: "slug-slug2-slug3-slug4-slug5-slug6"
  }, {
    path: "/:slug/:slug2/:slug3/:slug4/:slug5/:slug6/:slug7",
    component: _6eb0c530,
    name: "slug-slug2-slug3-slug4-slug5-slug6-slug7"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
