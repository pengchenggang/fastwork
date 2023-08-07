"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[3332],{3332:function(n,r,e){e.r(r),r["default"]='<template>\r\n  <span style="display: inline-block;">\r\n    <div style="padding: 30px;">\r\n      <Button type="primary"\r\n            @click="insertHandle">新建</Button>\r\n      <Table :columns="columns1"\r\n             style="width: 300px;"\r\n             :data="list">\r\n        <template slot="operation"\r\n                  slot-scope="{row, index}">\r\n          <Button type="text"\r\n                  @click="editHandle(row, index)"\r\n                  style="padding:6px 4px;">编辑\r\n          </Button>\r\n          <span style="color:#999">|</span>\r\n          <Button type="text"\r\n                  @click="deleteHandle(row, index)"\r\n                  style="padding:6px 4px;">删除\r\n          </Button>\r\n        </template>\r\n      </Table>\r\n      <Modal v-model="editModal"\r\n             title="编辑"\r\n             @on-ok="editOkHandle"\r\n             @on-cancel="editCancelHandle">\r\n        <Input v-model="currRow.name"></Input>\r\n      </Modal>\r\n      <Modal v-model="insertModal"\r\n             title="新建"\r\n             @on-ok="insertOkHandle"\r\n             @on-cancel="insertCancelHandle">\r\n        <Input v-model="currRow.name"></Input>\r\n      </Modal>\r\n    </div>\r\n  </span>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  components: {},\r\n  props: {},\r\n  data () {\r\n    return {\r\n      currRow: { name: \'\' },\r\n      editModal: false,\r\n      list: [],\r\n      columns1: [\r\n        {\r\n          title: \'Name\',\r\n          key: \'name\'\r\n        },\r\n        {\r\n          title: \'操作\',\r\n          slot: \'operation\'\r\n        },\r\n      ],\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {},\r\n  methods: {\r\n    insertOkHandle () {\r\n      const params = {\r\n        name: this.currRow.name\r\n      }\r\n      this.$api(\'/todoList/insert\', params).then(res => {\r\n        if (res && res.status === 20) {\r\n          this.searchTable()\r\n        }\r\n      })\r\n    },\r\n    insertHandle () {\r\n      this.currRow = { name: \'\' }\r\n      this.insertModal = true\r\n    },\r\n    editHandle (row, index) {\r\n      this.currRow = { ...row }\r\n      this.editModal = true\r\n    },\r\n    editOkHandle () {\r\n      const params = {\r\n        ...this.currRow\r\n      }\r\n      this.$api(\'/todoList/update\', params).then(res => {\r\n        if (res && res.status === 20) {\r\n          this.searchTable()\r\n        }\r\n      })\r\n    },\r\n    editCancelHandle () {\r\n      this.editModal = false\r\n    },\r\n    searchTable () {\r\n      this.$api(\'/todoList/list\').then(res => {\r\n        if (res && res.status === 20) {\r\n          this.list = res.data\r\n        }\r\n      })\r\n    },\r\n    deleteHandle (row, index) {\r\n      const params = {\r\n        deleteId: row.id\r\n      }\r\n      this.$api(\'/todoList/delete\', params).then(res => {\r\n        if (res && res.status === 20) {\r\n          this.searchTable()\r\n        }\r\n      })\r\n    },\r\n  },\r\n  created () { },\r\n  activated () { },\r\n  mounted () {\r\n    this.searchTable()\r\n  },\r\n  beforeDestroy () { }\r\n}\r\n<\/script>\r\n\r\n<style lang="less" scoped>\r\n</style>\r\n'}}]);