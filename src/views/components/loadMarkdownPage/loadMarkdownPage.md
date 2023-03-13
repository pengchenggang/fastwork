## 缺点
* 本想在这个markdown组件里面兼容vue组件
* 但是经过分析，虽然vitePress等支持了，这里实现起来有些本末倒置了。
* 有三方组件可以实现，但是也许还有坑，我这里也够用了。

## markdown 组件使用

```
<markdown :mFile="mFile"></markdown>
```
* 变量数据
```
data () {
    return {
      mFile: 'src/views/components/loadMarkdownPage/loadMarkdownPage.md'
    }
  },
```

## markdown 组件开发完成
* 源码如下
```xml
<template>
  <div>
    <div v-html="html"></div>
  </div>
</template>

<script>
export default {
  name: 'markdown',
  props: {
    mFile: {
      type: String,
      default: ''
    },
  },
  components: {},
  data () {
    return {
      html: '',
    }
  },
  watch: {},
  computed: {},
  methods: { },
  created () { },
  activated () { },
  mounted () {
    if (this.mFile) {
      const hljs = require('highlight.js')
      const MarkdownIt = require('markdown-it')
      const md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<div class="codeInClass"><pre><code class="hljs">' +
                hljs.highlight(lang, str, true).value +
                '</code></pre></div>'
            } catch (__) { }
          }
          console.info('md.utils.escapeHtml(str)', md)
          return '<div class="codeInClass"><pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre></div>'
        }
      })
      const codeUrl = this.mFile.replace('src/', '')
      import(`../../${codeUrl}`).then(module => {
        const t = md.render(module.default)
        this.html = md.render(module.default).replace(/\<h2>(.*?)<\/h2>/g, function (itemA, a1) {
          console.info('itemA', itemA, a1)
          return `<h2 id='${escape(a1)}'>${a1}</h2>`
        })
      })
    }
  },
  beforeDestroy () { }
}
</script>

<style>
</style>

```
