<template>
  <div>
    <Menu theme="light"
          :active-name="activeName"
          @on-select="selectHandle"
          style="position: absolute">
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
    </Menu>
    <div style="margin-left: 240px; padding: 20px;">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'components',
  props: {},
  components: {},
  data () {
    return {
      activeName: 'getAc'
    }
  },
  watch: {},
  computed: {},
  methods: {
    getActiveName () {
      this.activeName = this.$router.history.current.name
    },
    selectHandle (name) {
      console.info('selectHandle name', name)
      this.$router.push({
        name
      })
    },
  },
  created () { },
  activated () { },
  mounted () {
    this.getActiveName()
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
