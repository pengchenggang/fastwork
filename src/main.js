import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
// import { Button, Table, Menu, MenuItem, Layout, Anchor, AnchorLink, Affix, Row, Col, Card, Divider, Icon, Page, Input, Form, FormItem, Message } from 'view-design'
import 'view-design/dist/styles/iview.css'
import './main.less'
import compLayout from '@/views/components/compLayout.vue'
import anchorZen from '@/components/anchorZen/anchorZen.vue'
import anchorZenByFile from '@/components/anchorZen/anchorZenByFile.vue'
import Highlight from './directive/highlight' // 这里是你项目highlight.js所在路径
import playground from '@/components/playground/playground.vue'
import codeZen from '@/components/playground/codeZen.vue'
import codeIn from '@/components/playground/codeIn.vue'
import AsyncTool from '@/libs/asyncTool'
import tableZen from '@/components/tableZen/tableZen.vue'
import codePink from '@/components/codePink/codePink.vue'
import markdown from '@/components/markdown/markdown.vue'
import { api } from '@/libs/api.js'

Vue.prototype.$api = api
Vue.prototype.$getAc = () => {
  return new AsyncTool()
}
Vue.use(Highlight)

Vue.component('c', codePink)
Vue.component('compLayout', compLayout)
Vue.component('markdown', markdown)

Vue.use(ViewUI)

// Vue.component('Button', Button)
// Vue.component('Input', Input)
// Vue.component('Table', Table)
// Vue.component('Menu', Menu)
// Vue.component('MenuItem', MenuItem)
// Vue.component('Layout', Layout)
// Vue.component('Anchor', Anchor)
// Vue.component('AnchorLink', AnchorLink)
// Vue.component('Affix', Affix)
// Vue.component('Row', Row)
// Vue.component('Col', Col)
// Vue.component('Card', Card)
// Vue.component('Divider', Divider)
// Vue.component('Icon', Icon)
// Vue.component('Page', Page)
// Vue.component('Form', Form)
// Vue.component('FormItem', FormItem)

Vue.component('anchorZen', anchorZen)
Vue.component('anchorZenByFile', anchorZenByFile)
Vue.component('playground', playground)
Vue.component('codeZen', codeZen)
Vue.component('tableZen', tableZen)
Vue.component('codeIn', codeIn)

// Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
