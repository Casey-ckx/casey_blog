/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\admin\\Desktop\\study\\毕业设计前台\\casey_blog\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-59a501ba",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-59a501ba").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-5c920b54",
    path: "/about/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5c920b54").then(next)
    },
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    name: "v-302b0090",
    path: "/algorithm/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-302b0090").then(next)
    },
  },
  {
    path: "/algorithm/index.html",
    redirect: "/algorithm/"
  },
  {
    name: "v-3beebdaa",
    path: "/about/a.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3beebdaa").then(next)
    },
  },
  {
    name: "v-68bcb028",
    path: "/interview/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-68bcb028").then(next)
    },
  },
  {
    path: "/interview/index.html",
    redirect: "/interview/"
  },
  {
    name: "v-5a0b2c28",
    path: "/notes/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5a0b2c28").then(next)
    },
  },
  {
    path: "/notes/index.html",
    redirect: "/notes/"
  },
  {
    name: "v-c2c3fe9c",
    path: "/js.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c2c3fe9c").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]