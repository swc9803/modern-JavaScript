import { createRouter, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import section1 from '../pages/section1.vue'
import section2 from '../pages/section2.vue'
import section3 from '../pages/section3.vue'
import section4 from '../pages/section4.vue'
import section5 from '../pages/section5.vue'
import section6 from '../pages/section6.vue'
import section7 from '../pages/section7.vue'
import section8 from '../pages/section8.vue'
import section9 from '../pages/section9.vue'

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
  },
  {
    path: '/s7',
    name: 's7',
    component: section7
  },
  {
    path: '/s8',
    name: 's8',
    component: section8
  },
  {
    path: '/s9',
    name: 's9',
    component: section9
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
