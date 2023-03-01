import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ViewUI from 'view-design'
import { Button, Table, Menu, MenuItem, Layout, Anchor, AnchorLink, Affix } from 'view-design'
import 'view-design/dist/styles/iview.css'
import './main.less'
import compLayout from '@/views/components/compLayout.vue'

Vue.component('compLayout', compLayout)
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Layout', Layout)
Vue.component('Anchor', Anchor)
Vue.component('AnchorLink', AnchorLink)
Vue.component('Affix', Affix)
// Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
