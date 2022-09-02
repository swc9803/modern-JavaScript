import { createRouter, createWebHistory } from 'vue-router'
import section1 from '../pages/section1.vue'
import section2 from '../pages/section2.vue'

const routes = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/s1',
    name: 's1',
    component: section1
  },
  {
    path: '/s2',
    name: 's2',
    component: section2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
