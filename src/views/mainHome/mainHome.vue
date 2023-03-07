<template>
  <div>
    <Menu mode="horizontal"
          theme="light"
          style="position: fixed; width: 100%;"
          :active-name="activeName">
      <layout>
        <div slot="left">
          <div style="color: grep;">FastWork</div>
        </div>
        <div slot="content">
          <MenuItem class="mainHomeMenuItemClass"
                    v-for="item in naviData"
                    :key="item.name"
                    :name="item.name"
                    :to="item.to"> {{ item.title }} </MenuItem>
        </div>
        <div slot="right">
          <div style="color: grep;">更快速的开发</div>
        </div>
      </layout>
    </Menu>
    <div>
      <div style="height: 60px;"></div>
      <router-view />
      <!-- <div style="margin-left: 240px; background-color: #666; margin-top: 20px;">bottom</div> -->
    </div>
  </div>
</template>

<script>
import layout from './mainHomeLayout.vue'
import { naviData } from './naviData.js'
export default {
  name: 'mainHome',
  props: {},
  components: {
    layout
  },
  data () {
    return {
      activeName: 'home',
      naviData
    }
  },
  watch: {},
  computed: {},
  methods: {
    getActiveName () {
      console.info('router path', this.$router.history.current.path)
      const pathArr = this.$router.history.current.path.split('/')
      console.info('pathArr', pathArr)
      this.activeName = pathArr[1]
    },
  },
  created () { },
  activated () { },
  mounted () {
    this.getActiveName()
    // // const resp = "<XML><auth><result>0</result><tokeninfo>AAAmNTw/eG1sIHZlcnNpb249IjEuMCIgZW5jb2Rpbmc9IlVURi</tokeninfo><authstatus>1</authstatus></auth></XML>"
    // const resp1 = `<getauthstatusresp version="1"><result>0</result><errorinfo></errorinfo><authstatus>1</authstatus></getauthstatusresp>`
    // // const resp = resp1.replace(/"/g, '\")')
    // const resp = resp1
    // const parser = new DOMParser()
    // const xmlDoc = parser.parseFromString(resp, "text/xml")
    // console.info('xmlDoc', xmlDoc)
    // const result = xmlDoc.getElementsByTagName("result")
    // const authstatus = xmlDoc.getElementsByTagName("authstatus")
    // console.info('result', result)
    // console.info('authstatus', authstatus)
    // console.info('result[0].textContent', result[0].textContent)
    // console.info('authstatus[0].textContent', authstatus[0].textContent)
    // console.info('result[0].textContent == 0', result[0].textContent === 0)
    // console.info('authstatus[0].textContent == 1', authstatus[0].textContent === 1)
  },
  beforeDestroy () { },
}
</script>

<style>
.mainHomeMenuItemClass {
  display: inline-block;
}
</style>
