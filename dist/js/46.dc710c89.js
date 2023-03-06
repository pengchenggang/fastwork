"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[46],{6046:function(n,e,r){r.r(e),e["default"]="<template>\r\n  <div>\r\n    <component v-if=\"dynamicComponent\"\r\n               :is=\"dynamicComponent\"></component>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nconst loadView = (view) => { // 路由懒加载\r\n  return () => Promise.resolve(require(`${view}`).default)\r\n}\r\nexport default {\r\n  name: 'playground',\r\n  props: {\r\n    filePath: {\r\n      type: String,\r\n      default: ''\r\n    },\r\n  },\r\n  components: {\r\n  },\r\n  data () {\r\n    return {\r\n      // dynamicComponent: null,\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {\r\n    dynamicComponent () {\r\n      console.info('dynamicComponent this.filePath', this.filePath)\r\n      // const asset = 'views/components/getAc/test.vue'\r\n      // const asset = 'views/components/tableZen/demo.vue'\r\n      if (this.filePath) {\r\n        const codeUrl = this.filePath.replace('src/', '')\r\n        return () => import(`../../${codeUrl}`) // import 里面必须跟着最少一个目录路径\r\n      } else {\r\n        return ''\r\n      }\r\n    },\r\n    // loader () {\r\n    //   // const require2 = require('require-fool-webpack')\r\n    //   // const asset = '@/views/components/getAc/test.vue'\r\n    //   // return () => require2(`${asset}`)\r\n    // }\r\n    // dynamicComponent () {\r\n    //   // let view = '@/views/components/getAc/test.vue'\r\n    //   // return () => Promise.resolve(require(view).default)\r\n    //   const asset = '@/views/components/getAc/test.vue'\r\n    //   return () => import(`${asset}`)\r\n    // },\r\n  },\r\n  methods: {\r\n  },\r\n  created () {\r\n    // let filename = '@/views/components/getAc/test.vue'\r\n    // if (filename) {\r\n    //   this.dynamicComponent = () => loadView(filename)\r\n    // } else {\r\n    //   return null\r\n    // }\r\n  },\r\n  activated () { },\r\n  mounted () {\r\n    // this.dynamicComponent = require2('@/views/components/getAc/test.vue')\r\n    // this.dynamicComponent = () => {\r\n    //   const require2 = require('require-fool-webpack')\r\n    //   const asset = '@/views/components/getAc/test.vue'\r\n    //   console.info('111', require2(`${asset}`))\r\n    //   return () => require2(`${asset}`)\r\n    // }\r\n    // this.loader()\r\n    //   .then(() => {\r\n    //     this.dynamicComponent = () => this.loader()\r\n    //   })\r\n    // .catch(() => {\r\n    //   this.dynamicComponent = () =>\r\n    //     import('@components/demo/demoTemplates/defaultDemo')\r\n    // })\r\n  },\r\n  beforeDestroy () { }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n</style>\r\n"}}]);