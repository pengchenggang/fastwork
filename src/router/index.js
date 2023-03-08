import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import mainHome from '@/views/mainHome/mainHome.vue'

Vue.use(VueRouter)

export const componentsList = [
  {
    path: 'getAcPage',
    name: 'getAcPage',
    naviName: 'getAc',
    component: () => import('@/views/components/getAcPage/getAcPage.vue'),
  },
  {
    path: 'tableZenPage',
    name: 'tableZenPage',
    naviName: 'tableZen',
    component: () => import('@/views/components/tableZenPage/tableZenPage.vue'),
  },
  {
    path: 'autoHeightPage',
    name: 'autoHeightPage',
    naviName: 'autoHeight',
    component: () => import('@/views/components/autoHeightPage/autoHeightPage.vue'),
  },
  {
    path: 'plopjsPage',
    name: 'plopjsPage',
    naviName: 'plopjs',
    component: () => import('@/views/components/plopjsPage/plopjsPage.vue'),
  }
]
const routes = [
  {
    path: '/',
    name: 'mainHome',
    redirect: '/home',
    component: mainHome,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/components',
        name: 'components',
        redirect: '/components/getAcPage',
        component: () => import('@/views/components/components.vue'),
        children: componentsList
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  base: '/fastwork/',
  mode: 'history'
  // mode: 'hash'
})

export default router
