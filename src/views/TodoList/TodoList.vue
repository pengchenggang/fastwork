<template>
  <span style="display: inline-block;">
    <div>显示接口data {{ list }}</div>
  </span>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      list: null,
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () {
    this.$api('/todoList/list').then(res => {
      if (res && res.status === 20) {
        this.list = res.data
      }
    })
    const params = {
      name: 'abc'
    }
    this.$api('/todoList/insert', params).then(res => {})
  },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
</style>
