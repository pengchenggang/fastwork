<template>
  <div>
    <compLayout>
      <div slot="anchor">
        <anchorZen :links="['概述,GS',
        '安装方法,AZFF',
        '使用方法,SYFF',
        'API,API']" />
      </div>
      <div slot="content">
        <h1>getAc 异步执行函数队列</h1>
        <h2 id="GS">概述</h2>
        <p>解决同步代码与异步代码的回调问题。顺序执行 this.$api</p>
        <h2 id="AZFF">安装方法</h2>
        <ul>
          <li>将 asyncTool.js 放入到 /src/libs/asyncTool.js</li>
        </ul>

        <pre v-highlight="getCode1()"><code></code></pre>
        <h2 id="SYFF">使用方法</h2>
        <p>解决同步代码与异步代码的回调问题。</p>
        <h2 id="API">API</h2>
        <p>解决同步代码与异步代码的回调问题。</p>
        <h2>开发小计</h2>
        <ul>
          <li>highlightjs demo => A 11 Y Dark</li>
          <li><a href="https://highlightjs.org/static/demo/"
               target="_blank">https://highlightjs.org/static/demo/</a></li>
        </ul>
      </div>
    </compLayout>
  </div>
</template>

<script>
export default {
  name: 'getAc',
  props: {},
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    getCode1 () {
      const code = `
<h1 title="kk">
kkk
</h1>
`
      return code.trim()
    },
  },
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style>
</style>
