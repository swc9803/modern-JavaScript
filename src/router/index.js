import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import section1 from '../pages/section1.vue'
import section2 from '../pages/section2.vue'
import section3 from '../pages/section3.vue'
import section4 from '../pages/section4.vue'
import section5 from '../pages/section5.vue'
import section6 from '../pages/section6.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
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
  },
  {
    path: '/s3',
    name: 's3',
    component: section3
  },
  {
    path: '/s4',
    name: 's4',
    component: section4
  },
  {
    path: '/s5',
    name: 's5',
    component: section5
  },
  {
    path: '/s6',
    name: 's6',
    component: section6
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
