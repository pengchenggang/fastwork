import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import mainHome from '@/views/mainHome/mainHome.vue'

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
        redirect: '/components/getAc',
        component: () => import('@/views/components/components.vue'),
        children: [
          {
            path: 'getAc',
            name: 'getAc',
            component: () => import('@/views/components/getAc/getAc.vue'),
          },
          {
            path: 'tableZen',
            name: 'tableZen',
            component: () => import('@/views/components/tableZen/tableZen.vue'),
          }
        ]
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
  routes
})

export default router
