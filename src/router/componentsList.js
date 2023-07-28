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
  {
    path: 'inputExamplePage',
    name: 'inputExamplePage',
    naviName: 'Input例子',
    component: () => import('@/views/components/inputExamplePage/inputExamplePage.vue'),
  },
  {
    path: 'layoutPage',
    name: 'layoutPage',
    naviName: 'layout页面',
    component: () => import('@/views/components/layoutPage/layoutPage.vue'),
  },
  {
    path: 'initPage',
    name: 'initPage',
    naviName: '页面初始化',
    component: () => import('@/views/components/initPage/initPage.vue'),
  },
  {
    path: 'validatorPage',
    name: 'validatorPage',
    naviName: '表单自定义验证',
    component: () => import('@/views/components/validatorPage/validatorPage.vue'),
  },
  // ---ROUTER_IMPORT---
]
