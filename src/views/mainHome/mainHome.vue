<template>
  <div>
    <Menu mode="horizontal"
          theme="dark"
          active-name="1">
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
      naviData
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { },
}
</script>

<style>
.mainHomeMenuItemClass {
  display: inline-block;
}
</style>
