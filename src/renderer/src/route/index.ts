import { createRouter, createWebHistory } from 'vue-router'
import Clock from '@renderer/views/Clock.vue'

const routes = [
  {
    path: '/',
    name: 'clock',
    component: Clock
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
