"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[8212],{8212:function(e,n,r){r.r(n),n["default"]="module.exports = function (plop) {\r\n  // controller generator\r\n  plop.setGenerator('create', {\r\n    description: '创建一个组件页面',\r\n    prompts: [\r\n      {\r\n        type: 'input',\r\n        name: 'eName',\r\n        message: '请输入页面英文名字（key):'\r\n      },\r\n      {\r\n        type: 'input',\r\n        name: 'cName',\r\n        message: '请输入页面中文名字:'\r\n      },\r\n    ],\r\n    actions: [\r\n      {\r\n        type: 'add',\r\n        path: 'src/views/components/{{eName}}Page/{{eName}}Page.vue',\r\n        templateFile: 'plop-templates/compTemplate.hbs'\r\n      },\r\n      {\r\n        type: 'modify',\r\n        path: 'src/router/componentsList.js',\r\n        pattern: /\\/\\/ ---ROUTER_IMPORT---/g, // ---ROUTER_IMPORT--- // 这个是查找文件插入位置的标识\r\n        templateFile: 'plop-templates/componentsListTemplate.hbs'\r\n      }\r\n    ]\r\n  })\r\n}\r\n"}}]);