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
          // console.info('md.utils.escapeHtml(str)', md)
          return '<div class="codeInClass"><pre><code class="hljs">' + md.utils.escapeHtml(str) + '</code></pre></div>'
        }
      })
      const codeUrl = this.mFile.replace('src/', '')
      import(`../../${codeUrl}`).then(module => {
        const t = md.render(module.default)
        this.html = md.render(module.default).replace(/\<h2>(.*?)<\/h2>/g, function (itemA, a1) {
          // console.info('itemA', itemA, a1)
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
