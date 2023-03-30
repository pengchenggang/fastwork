<template>
  <div>
    <compLayout>
      <h1>layout页面</h1>
      <h2 id="GS">概述</h2>
      <p>布局页面的帮助文档</p>
      <markdown :mFile="mFile"></markdown>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'layoutPage',
  props: {},
  components: {
  },
  data () {
    return {
      mFile: 'src/views/components/layoutPage/layoutPage.md'
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
