"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[513],{8513:function(r,n,t){t.r(n),n["default"]='<template>\r\n  <div>\r\n    <Menu mode="horizontal"\r\n          theme="light"\r\n          style="position: fixed; width: 100%;"\r\n          :active-name="activeName">\r\n      <layout>\r\n        <div slot="left">\r\n          <div style="color: grep;">FastWork</div>\r\n        </div>\r\n        <div slot="content">\r\n          <MenuItem class="mainHomeMenuItemClass"\r\n                    v-for="item in naviData"\r\n                    :key="item.name"\r\n                    :name="item.name"\r\n                    :to="item.to"> {{ item.title }} </MenuItem>\r\n        </div>\r\n        <div slot="right">\r\n          <div style="color: grep;">更快速的开发</div>\r\n        </div>\r\n      </layout>\r\n    </Menu>\r\n    <div>\r\n      <div style="height: 60px;"></div>\r\n      <router-view />\r\n      \x3c!-- <div style="margin-left: 240px; background-color: #666; margin-top: 20px;">bottom</div> --\x3e\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport layout from \'./mainHomeLayout.vue\'\r\nimport { naviData } from \'./naviData.js\'\r\nexport default {\r\n  name: \'mainHome\',\r\n  props: {},\r\n  components: {\r\n    layout\r\n  },\r\n  data () {\r\n    return {\r\n      activeName: \'home\',\r\n      naviData\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {},\r\n  methods: {\r\n    getActiveName () {\r\n      console.info(\'router path\', this.$router.history.current.path)\r\n      const pathArr = this.$router.history.current.path.split(\'/\')\r\n      console.info(\'pathArr\', pathArr)\r\n      this.activeName = pathArr[1]\r\n    },\r\n  },\r\n  created () { },\r\n  activated () { },\r\n  mounted () {\r\n    this.getActiveName()\r\n  },\r\n  beforeDestroy () { },\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.mainHomeMenuItemClass {\r\n  display: inline-block;\r\n}\r\n</style>\r\n'}}]);