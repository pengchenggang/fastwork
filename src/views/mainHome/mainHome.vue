<template>
  <div>
    <Menu mode="horizontal"
          theme="dark"
          style="position: fixed; width: 100%;"
          :active-name="activeName">
      <layout>
        <div slot="left">
          <div style="color: white;">FastWork</div>
        </div>
        <div slot="content">
          <MenuItem class="mainHomeMenuItemClass"
                    v-for="item in naviData"
                    :key="item.name"
                    :name="item.name"
                    :to="item.to"> {{ item.title }} </MenuItem>
        </div>
        <div slot="right">
          <div style="color: white;">更快速的开发</div>
        </div>
      </layout>
    </Menu>
    <div>
      <div style="height: 60px;"></div>
      <router-view />
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
  },
  beforeDestroy () { },
}
</script>

<style>
.mainHomeMenuItemClass {
  display: inline-block;
}
</style>
