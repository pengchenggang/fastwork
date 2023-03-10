import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import mainHome from '@/views/mainHome/mainHome.vue'
import { componentsList } from './componentsList.js'
Vue.use(VueRouter)

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
