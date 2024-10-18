import { createWebHistory, createRouter, createWebHashHistory } from 'vue-router'
import { staticRoueter } from './modules/staticRouter';

const mode = import.meta.env.VITE_ROUTER_MODE;

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory()
}

const router = createRouter({
  history: routerMode[mode](),
  routes: [...staticRoueter],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router