"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[9221],{9221:function(n,o,e){e.r(o),o["default"]="import Vue from 'vue'\r\nimport App from './App.vue'\r\nimport router from './router'\r\n// import ViewUI from 'view-design'\r\nimport { Button, Table, Menu, MenuItem, Layout, Anchor, AnchorLink, Affix, Row, Col, Card, Divider, Icon, Page, Input } from 'view-design'\r\nimport 'view-design/dist/styles/iview.css'\r\nimport './main.less'\r\nimport compLayout from '@/views/components/compLayout.vue'\r\nimport anchorZen from '@/components/anchorZen/anchorZen.vue'\r\nimport anchorZenByFile from '@/components/anchorZen/anchorZenByFile.vue'\r\nimport Highlight from './directive/highlight' // 这里是你项目highlight.js所在路径\r\nimport playground from '@/components/playground/playground.vue'\r\nimport codeZen from '@/components/playground/codeZen.vue'\r\nimport codeIn from '@/components/playground/codeIn.vue'\r\nimport AsyncTool from '@/libs/asyncTool'\r\nimport tableZen from '@/components/tableZen/tableZen.vue'\r\nimport codePink from '@/components/codePink/codePink.vue'\r\nimport markdown from '@/components/markdown/markdown.vue'\r\n\r\nVue.prototype.$getAc = () => {\r\n  return new AsyncTool()\r\n}\r\nVue.use(Highlight)\r\n\r\nVue.component('c', codePink)\r\nVue.component('compLayout', compLayout)\r\nVue.component('markdown', markdown)\r\nVue.component('Button', Button)\r\nVue.component('Input', Input)\r\nVue.component('Table', Table)\r\nVue.component('Menu', Menu)\r\nVue.component('MenuItem', MenuItem)\r\nVue.component('Layout', Layout)\r\nVue.component('Anchor', Anchor)\r\nVue.component('AnchorLink', AnchorLink)\r\nVue.component('Affix', Affix)\r\nVue.component('anchorZen', anchorZen)\r\nVue.component('anchorZenByFile', anchorZenByFile)\r\nVue.component('Row', Row)\r\nVue.component('Col', Col)\r\nVue.component('Card', Card)\r\nVue.component('Divider', Divider)\r\nVue.component('Icon', Icon)\r\nVue.component('Page', Page)\r\n\r\nVue.component('playground', playground)\r\nVue.component('codeZen', codeZen)\r\nVue.component('tableZen', tableZen)\r\nVue.component('codeIn', codeIn)\r\n\r\n// Vue.use(ViewUI)\r\n\r\nVue.config.productionTip = false\r\n\r\nnew Vue({\r\n  router,\r\n  render: h => h(App)\r\n}).$mount('#app')\r\n"}}]);