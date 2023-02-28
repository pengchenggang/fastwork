<template>
  <div>
    <Menu theme="light" @on-select="selectHandle" style="position: absolute">
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
    </Menu>
    <div style="margin-left: 240px;">
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
    }
  },
  watch: {},
  computed: {},
  methods: {
    selectHandle (name) {
      console.info('selectHandle name', name)
    },
  },
  created () { },
  activated () { },
  mounted () {
    const current = this.$router.history.current
    const name = current.name
    console.info('current', current)
    console.info('name', name)
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
