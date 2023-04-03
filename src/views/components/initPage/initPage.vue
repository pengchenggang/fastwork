<template>
  <div>
    <compLayout>
      <h1>页面初始化</h1>
      <h2 id="GS">概述</h2>
      <p>页面初始化代码</p>
      <markdown :mFile="mFile"></markdown>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'initPage',
  props: {},
  components: {
  },
  data () {
    return {
      mFile: 'src/views/components/initPage/initPage.md'
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
