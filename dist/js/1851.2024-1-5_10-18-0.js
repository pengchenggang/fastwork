"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[1851],{11851:function(r,n,e){e.r(n),n["default"]="<template>\r\n  <div>\r\n    <div v-html=\"html\"></div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'markdown',\r\n  props: {\r\n    mFile: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n  },\r\n  components: {},\r\n  data () {\r\n    return {\r\n      html: '',\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {},\r\n  methods: { },\r\n  created () { },\r\n  activated () { },\r\n  mounted () {\r\n    if (this.mFile) {\r\n      const hljs = require('highlight.js')\r\n      const MarkdownIt = require('markdown-it')\r\n      const md = new MarkdownIt({\r\n        highlight: function (str, lang) {\r\n          if (lang && hljs.getLanguage(lang)) {\r\n            try {\r\n              return '<div class=\"codeInClass\"><pre><code class=\"hljs\">' +\r\n                hljs.highlight(lang, str, true).value +\r\n                '</code></pre></div>'\r\n            } catch (__) { }\r\n          }\r\n          // console.info('md.utils.escapeHtml(str)', md)\r\n          return '<div class=\"codeInClass\"><pre><code class=\"hljs\">' + md.utils.escapeHtml(str) + '</code></pre></div>'\r\n        }\r\n      })\r\n      const codeUrl = this.mFile.replace('src/', '')\r\n      import(`../../${codeUrl}`).then(module => {\r\n        const t = md.render(module.default)\r\n        this.html = md.render(module.default).replace(/\\<h2>(.*?)<\\/h2>/g, function (itemA, a1) {\r\n          // console.info('itemA', itemA, a1)\r\n          return `<h2 id='${escape(a1)}'>${a1}</h2>`\r\n        })\r\n      })\r\n    }\r\n  },\r\n  beforeDestroy () { }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n</style>\r\n"}}]);