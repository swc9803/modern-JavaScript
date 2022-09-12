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
import section10 from '../pages/section10.vue'
import section11 from '../pages/section11.vue'
import section12 from '../pages/section12.vue'
import section13 from '../pages/section13.vue'
import section14 from '../pages/section14.vue'
import section15 from '../pages/section15.vue'
import section16 from '../pages/section16.vue'
import section17 from '../pages/section17.vue'
import section18 from '../pages/section18.vue'
import section19 from '../pages/section19.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/section1',
    name: 'section1',
    component: section1
  },
  {
    path: '/section2',
    name: 'section2',
    component: section2
  },
  {
    path: '/section3',
    name: 'section3',
    component: section3
  },
  {
    path: '/section4',
    name: 'section4',
    component: section4
  },
  {
    path: '/section5',
    name: 'section5',
    component: section5
  },
  {
    path: '/section6',
    name: 'section6',
    component: section6
  },
  {
    path: '/section7',
    name: 'section7',
    component: section7
  },
  {
    path: '/section8',
    name: 'section8',
    component: section8
  },
  {
    path: '/section9',
    name: 'section9',
    component: section9
  },
  {
    path: '/section10',
    name: 'section10',
    component: section10
  },
  {
    path: '/section11',
    name: 'section11',
    component: section11
  },
  {
    path: '/section12',
    name: 'section12',
    component: section12
  },
  {
    path: '/section13',
    name: 'section13',
    component: section13
  },
  {
    path: '/section14',
    name: 'section14',
    component: section14
  },
  {
    path: '/section15',
    name: 'section15',
    component: section15
  },
  {
    path: '/section16',
    name: 'section16',
    component: section16
  },
  {
    path: '/section17',
    name: 'section17',
    component: section17
  },
  {
    path: '/section18',
    name: 'section18',
    component: section18
  },
  {
    path: '/section19',
    name: 'section19',
    component: section19
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
