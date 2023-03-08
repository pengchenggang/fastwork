"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[613],{9494:function(n,r,e){e.r(r),r["default"]='<template>\r\n  <div>\r\n    <Menu theme="light"\r\n          :active-name="activeName"\r\n          @on-select="selectHandle"\r\n          style="position: fixed; height: calc(100% - 60px); top: 60px; overflow: auto;">\r\n      <MenuItem v-for="item in componentsList" :name="item.name" :key="item.name">{{ item.naviName }}</MenuItem>\r\n    </Menu>\r\n    <div style="margin-left: 240px; padding: 10px;">\r\n      \x3c!-- <div style="height: 30px; line-height: 30px;">当前位置: 组件代码 / {{ activeName }}</div> --\x3e\r\n      \x3c!-- 60 + 20 + 30 = 110 --\x3e\r\n      \x3c!-- height: calc(100vh - 110px); overflow: auto; --\x3e\r\n      <div class="fastwork-article"\r\n           style="background-color: white; border: 1px solid #f2f2f2; padding: 20px;">\r\n        <router-view />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { componentsList } from "@/router"\r\nexport default {\r\n  name: \'components\',\r\n  props: {},\r\n  components: {},\r\n  data () {\r\n    return {\r\n      componentsList,\r\n      activeName: \'getAc\'\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {},\r\n  methods: {\r\n    getActiveName () {\r\n      this.activeName = this.$router.history.current.name\r\n    },\r\n    selectHandle (name) {\r\n      console.info(\'selectHandle name\', name)\r\n      this.activeName = name\r\n      this.$router.push({\r\n        name\r\n      })\r\n    },\r\n  },\r\n  created () { },\r\n  activated () { },\r\n  mounted () {\r\n    this.getActiveName()\r\n    console.info(\'componentsList\', componentsList)\r\n    console.info(\'this.$router\', this.$router)\r\n  },\r\n  beforeDestroy () { }\r\n}\r\n<\/script>\r\n\r\n<style lang="less">\r\n.fastwork-article {\r\n  font-size: 16px;\r\n  font-family: 微软雅黑;\r\n\r\n  table.Alita {\r\n    width: 100%;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n    border-top: 1px solid #e8eaec;\r\n    border-left: 1px solid #e8eaec;\r\n    td, th {\r\n      border-right: 1px solid #e8eaec;\r\n      border-bottom: 1px solid #e8eaec;\r\n      padding: 5px 10px;\r\n    }\r\n    th {\r\n      background-color: #f8f8f9;\r\n    }\r\n  }\r\n\r\n  blockquote {\r\n    color: #8c8c8c;\r\n    border-left: 4px solid #2196f3;\r\n    background-color: #f0fdff;\r\n    padding: 1px 20px;\r\n    margin: 22px 0;\r\n    transition: color 0.35s;\r\n    p {\r\n      margin: 10px 0;\r\n    }\r\n  }\r\n  a.ivu-anchor-link-title {\r\n    line-height: 26px;\r\n  }\r\n  .ivu-anchor-link {\r\n    // padding: 8px 0 8px 16px;\r\n    padding: 2px 0 2px 16px;\r\n  }\r\n  ul.list,\r\n  ol.list {\r\n    padding-left: 28px;\r\n    li {\r\n      line-height: 28px;\r\n    }\r\n  }\r\n  // ul {\r\n  //   list-style: none;\r\n  //   // padding-left: 20px;\r\n  //   list-style-type: disc;\r\n  // }\r\n  // li {\r\n  //   list-style: none;\r\n  //   position: relative;\r\n  //   padding: 8px 16px 8px 16px;\r\n  //   border-radius: 4px;\r\n  //   color: #515a6e;\r\n  //   font-size: 14px;\r\n  //   line-height: 16px;\r\n  //   margin-bottom: 10px;\r\n  //   border: 1px solid #abdcff;\r\n  //   background-color: #f0faff;\r\n  //   margin-bottom: 5px;\r\n  // }\r\n  h1 {\r\n    // font-size: 26px;\r\n    // font-weight: 400;\r\n    // margin: 12px 0;\r\n    margin: 0 0 1.667rem;\r\n    font-size: 2.667rem;\r\n    font-weight: 600;\r\n    line-height: 1.31;\r\n    color: #252933;\r\n  }\r\n  h2 {\r\n    font-size: 19px;\r\n    font-weight: 700;\r\n    padding-left: 10px;\r\n    border-left: 5px solid #916dd5;\r\n    margin: 60px 0 20px 0;\r\n  }\r\n  h3 {\r\n    margin-top: 20px;\r\n    display: block;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dashed #666;\r\n  }\r\n}\r\n</style>\r\n'}}]);