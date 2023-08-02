<template>
  <span style="display: inline-block;">
    TodoList
  </span>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () {
    const params = {
      a: 1,
      b: 2
    }
    this.$api('/todoList/demo', params).then(res => { })
  },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
</style>
