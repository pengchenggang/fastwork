"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[3558],{33558:function(n,t,e){e.r(t),t["default"]='<template>\n  <div class="home">\n    <br>\n    <span style="font-size:48px">访问量：{{ counter }}</span>\n    <br>\n    <br>\n    <br>\n    此组件库是在 <a href="http://v4.iviewui.com/components/input" target="_blank">iview</a> 的基础上二次封装\n\n    <br>\n    <a href="https://highlightjs.org/static/demo/" target="_blank">https://highlightjs.org/static/demo/</a>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'HomeView\',\n  components: {\n  },\n  data () {\n    return {\n      counter: \'\',\n    }\n  },\n  mounted () {\n    this.$api(\'https://phprgtyhkz.hk.aircode.run/getCounter\').then(res => {\n      console.info(\'res\', res)\n      this.counter = res.data\n    })\n  }\n}\n<\/script>\n'}}]);