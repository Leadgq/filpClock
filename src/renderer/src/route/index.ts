import { createRouter, createWebHistory } from 'vue-router'
import Clock from '@renderer/views/Clock.vue'
import Config from '@renderer/views/Config.vue'
const routes = [
  {
    path: '/',
    name: 'clock',
    component: Clock
  },
  {
    path: '/config',
    name: 'config',
    component: Config
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
