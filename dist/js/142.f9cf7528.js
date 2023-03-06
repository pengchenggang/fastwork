"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[142],{3142:function(r,n,t){t.r(n),n["default"]='<template>\r\n  <div>\r\n    <Table border\r\n           :columns="columns"\r\n           :data="tableData">\r\n      <template v-for="uniSlot in slotArr"\r\n                slot-scope="{ row, index }"\r\n                :slot="uniSlot">\r\n        <slot :name="uniSlot"\r\n              :row="row"\r\n              :index="index"></slot>\r\n      </template>\r\n    </Table>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: \'tableZen\',\r\n  props: {\r\n    // columns: {\r\n    //   type: Array,\r\n    //   default () {\r\n    //     return []\r\n    //   }\r\n    // },\r\n  },\r\n  components: {},\r\n  data () {\r\n    return {\r\n      columns: [],\r\n      slotArr: [],\r\n      page: 1,\r\n      total: 0,\r\n      rows: 10,\r\n      loading: false,\r\n      useCurrentParams: true, // 使用外部的参数\r\n      tempParams: null,\r\n      next_: null, // 外部的next\r\n      getTableData_: null,\r\n      selectionItems: [],\r\n      tableData: []\r\n    }\r\n  },\r\n  watch: {},\r\n  computed: {},\r\n  methods: {\r\n    getSlot () {\r\n      this.slotArr = []\r\n      this.columns.forEach(item => {\r\n        if (item.slot) {\r\n          this.slotArr.push(item.slot)\r\n        }\r\n      })\r\n    },\r\n    search ({\r\n      columns = [],\r\n      getTableData = null,\r\n      next = null\r\n    }) {\r\n      this.columns = columns\r\n      this.getSlot()\r\n      this.next_ = next\r\n      this.getTableData_ = getTableData\r\n      this.useCurrentParams = true\r\n      this.page = 1\r\n      this.getTableDataCore()\r\n    },\r\n    getTableDataCore () {\r\n      this.loading = true\r\n      this.selectClear()\r\n      const ctx = this\r\n      this.getTableData_(ctx, this.getTableData_callback)\r\n      // this.$emit(\'getTableData\', ctx, this.getTableData_callback)\r\n    },\r\n    getTableData_callback () {\r\n      this.loading = false\r\n      if (this.useCurrentParams) {\r\n        this.currentParams = { ...this.tempParams }\r\n      }\r\n      this.next_ && this.next_()\r\n    },\r\n    selectClear () {\r\n      this.selectionItems = []\r\n    },\r\n  },\r\n  created () { },\r\n  activated () { },\r\n  mounted () { },\r\n  beforeDestroy () { }\r\n}\r\n<\/script>\r\n\r\n<style>\r\n</style>\r\n'}}]);