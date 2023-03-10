<template>
  <div>
    <compLayout>
      <h1>Markdown加载组件</h1>
      <h2 id="GS">概述</h2>
      <p>我在写加载组件的时候，发现highlight对读取的raw格式支持很好，在vue里面的代码支持不好，所以再写一个支持.md的组件</p>
      <ul class="list">
        <li>选择 markdown-it 这个库</li>
        <li><a href="https://markdown-it.docschina.org/"
             target="_blank">markdown-it 中文文档</a></li>
        <li><a href="https://markdown-it.github.io/"
             target="_blank">markdown-it Demo</a></li>
        <li><a href="https://www.npmjs.com/package/markdown-it"
             target="_blank">markdown-it Npm</a></li>
        <li><a href="https://github.com/markdown-it/markdown-it"
             target="_blank">markdown github</a></li>
      </ul>
      <markdown :mFile="mFile" slotName="main"></markdown>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'loadMarkdownPage',
  props: {},
  components: {
  },
  data () {
    return {
      mFile: 'src/views/components/loadMarkdownPage/loadMarkdownPage.md'
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
