import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'

const mode = import.meta.env.VITE_ROUTER_MODE;

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory()
}


import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router