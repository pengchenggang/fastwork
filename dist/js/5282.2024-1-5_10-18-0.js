"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[5282],{15282:function(n,e,o){o.r(e),e["default"]="import Vue from 'vue'\nimport VueRouter from 'vue-router'\n// import HomeView from '../views/HomeView.vue'\nimport mainHome from '@/views/mainHome/mainHome.vue'\nimport { componentsList } from './componentsList.js'\nVue.use(VueRouter)\n\nconst routes = [\n  {\n    path: '/',\n    name: 'mainHome',\n    redirect: '/home',\n    component: mainHome,\n    children: [\n      {\n        path: '/home',\n        name: 'home',\n        component: () => import('@/views/HomeView.vue')\n      },\n      {\n        path: '/components',\n        name: 'components',\n        redirect: '/components/getAcPage',\n        component: () => import('@/views/components/components.vue'),\n        children: componentsList\n      },\n      {\n        path: '/about',\n        name: 'about',\n        component: () => import('@/views/AboutView.vue')\n      },\n      {\n        path: '/todoList',\n        name: 'todoList',\n        component: () => import('@/views/TodoList/TodoList.vue')\n      }\n    ]\n  },\n]\n\nconst router = new VueRouter({\n  routes,\n  base: '/fastwork/',\n  // mode: 'history'\n  mode: 'hash'\n})\n\nexport default router\n"}}]);