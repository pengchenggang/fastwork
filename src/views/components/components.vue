<template>
  <div>
    <Menu theme="light"
          :active-name="activeName"
          @on-select="selectHandle"
          style="position: fixed; height: calc(100% - 60px); top: 60px; overflow: auto;">
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
    </Menu>
    <div style="margin-left: 240px; padding: 10px;">
      <div style="background-color: white; border: 1px solid #f2f2f2; padding: 20px;">
        <router-view />
      </div>
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
