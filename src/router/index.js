import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '../pages/home.vue')
  },
  {
    path: '/section1',
    name: 'section1',
    component: () =>
      import(/* webpackChunkName: "section1" */ '../pages/section1.vue')
  },
  {
    path: '/section2',
    name: 'section2',
    component: () =>
      import(/* webpackChunkName: "section2" */ '../pages/section2.vue')
  },
  {
    path: '/section3',
    name: 'section3',
    component: () =>
      import(/* webpackChunkName: "section3" */ '../pages/section3.vue')
  },
  {
    path: '/section4',
    name: 'section4',
    component: () =>
      import(/* webpackChunkName: "section4" */ '../pages/section4.vue')
  },
  {
    path: '/section5',
    name: 'section5',
    component: () =>
      import(/* webpackChunkName: "section5" */ '../pages/section5.vue')
  },
  {
    path: '/section6',
    name: 'section6',
    component: () =>
      import(/* webpackChunkName: "section6" */ '../pages/section6.vue')
  },
  {
    path: '/section7',
    name: 'section7',
    component: () =>
      import(/* webpackChunkName: "section7" */ '../pages/section7.vue')
  },
  {
    path: '/section8',
    name: 'section8',
    component: () =>
      import(/* webpackChunkName: "section8" */ '../pages/section8.vue')
  },
  {
    path: '/section9',
    name: 'section9',
    component: () =>
      import(/* webpackChunkName: "section9" */ '../pages/section9.vue')
  },
  {
    path: '/section10',
    name: 'section10',
    component: () =>
      import(/* webpackChunkName: "section10" */ '../pages/section10.vue')
  },
  {
    path: '/section11',
    name: 'section11',
    component: () =>
      import(/* webpackChunkName: "section11" */ '../pages/section11.vue')
  },
  {
    path: '/section12',
    name: 'section12',
    component: () =>
      import(/* webpackChunkName: "section12" */ '../pages/section12.vue')
  },
  {
    path: '/section13',
    name: 'section13',
    component: () =>
      import(/* webpackChunkName: "section13" */ '../pages/section13.vue')
  },
  {
    path: '/section14',
    name: 'section14',
    component: () =>
      import(/* webpackChunkName: "section14" */ '../pages/section14.vue')
  },
  {
    path: '/section15',
    name: 'section15',
    component: () =>
      import(/* webpackChunkName: "section15" */ '../pages/section15.vue')
  },
  {
    path: '/section16',
    name: 'section16',
    component: () =>
      import(/* webpackChunkName: "section16" */ '../pages/section16.vue')
  },
  {
    path: '/section17',
    name: 'section17',
    component: () =>
      import(/* webpackChunkName: "section17" */ '../pages/section17.vue')
  },
  {
    path: '/section18',
    name: 'section18',
    component: () =>
      import(/* webpackChunkName: "section18" */ '../pages/section18.vue')
  },
  {
    path: '/section19',
    name: 'section19',
    component: () =>
      import(/* webpackChunkName: "section19" */ '../pages/section19.vue')
  },
  {
    path: '/section20',
    name: 'section20',
    component: () =>
      import(/* webpackChunkName: "section20" */ '../pages/section20.vue')
  },
  {
    path: '/section21',
    name: 'section21',
    component: () =>
      import(/* webpackChunkName: "section21" */ '../pages/section21.vue')
  },
  {
    path: '/section22',
    name: 'section22',
    component: () =>
      import(/* webpackChunkName: "section22" */ '../pages/section22.vue')
  },
  {
    path: '/section23',
    name: 'section23',
    component: () =>
      import(/* webpackChunkName: "section23" */ '../pages/section23.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
