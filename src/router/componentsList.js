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
  },
  {
    path: 'loadMarkdownPage',
    name: 'loadMarkdownPage',
    naviName: 'Markdown加载组件',
    component: () => import('@/views/components/loadMarkdownPage/loadMarkdownPage.vue'),
  },
  {
    path: 'intInputPage',
    name: 'intInputPage',
    naviName: '整数输入框',
    component: () => import('@/views/components/intInputPage/intInputPage.vue'),
  },
  // ---ROUTER_IMPORT---
]
