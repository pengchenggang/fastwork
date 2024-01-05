<template>
  <div>
    <compLayout>
      <h1>Modal模板</h1>
      <h2 id="GS">概述</h2>
      <p>概述描述</p>
      <markdown :mFile="mFile"></markdown>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'modal-pagePage',
  props: {},
  components: {
  },
  data () {
    return {
      mFile: 'src/views/components/modal-pagePage/modal-pagePage.md'
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
