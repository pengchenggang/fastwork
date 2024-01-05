"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[7250],{17250:function(r,n,a){a.r(n),n["default"]='<template>\r\n  <div>\r\n    <compLayout>\r\n      <h1>Markdown加载组件</h1>\r\n      <h2 id="GS">概述</h2>\r\n      <p>我在写加载组件的时候，发现highlight对读取的raw格式支持很好，在vue里面的代码支持不好，所以再写一个支持.md的组件</p>\r\n      <ul class="list">\r\n        <li>选择 markdown-it 这个库</li>\r\n        <li><a href="https://markdown-it.docschina.org/"\r\n             target="_blank">markdown-it 中文文档</a></li>\r\n        <li><a href="https://markdown-it.github.io/"\r\n             target="_blank">markdown-it Demo</a></li>\r\n        <li><a href="https://www.npmjs.com/package/markdown-it"\r\n             target="_blank">markdown-it Npm</a></li>\r\n        <li><a href="https://github.com/markdown-it/markdown-it"\r\n             target="_blank">markdown github</a></li>\r\n      </ul>\r\n      <markdown :mFile="mFile"></markdown>\r\n    </compLayout>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \'loadMarkdownPage\',\r\n  props: {},\r\n  components: {\r\n  },\r\n  data () {\r\n    return {\r\n      mFile: \'src/views/components/loadMarkdownPage/loadMarkdownPage.md\'\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {},\r\n  methods: {},\r\n  created () { },\r\n  activated () { },\r\n  mounted () { },\r\n  beforeDestroy () { }\r\n}\r\n<\/script>\r\n\r\n<style lang="less">\r\n</style>\r\n'}}]);