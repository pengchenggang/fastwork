<template>
  <div>
    <compLayout>
      <h1>Input例子</h1>
      <h2 id="GS">概述</h2>
      <p>一些输入框的例子</p>
      <h2 id="BNSRHC">不能输入回车Input</h2>
      <playground filePath="src/views/components/inputExamplePage/inputDemoNoEnter.vue"
                  title="不能输入回车Input">
        这里的例子是 textarea，需求是单行的显示渲染自动折行了，如何的单行input为什么没有自动折行，所以换成区域的输入框了。
      </playground>
      <markdown :mFile="mFile"></markdown>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'inputExamplePage',
  props: {},
  components: {
  },
  data () {
    return {
      mFile: 'src/views/components/inputExamplePage/inputExamplePage.md'
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
