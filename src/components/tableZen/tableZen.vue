<template>
  <div>
    <Table border
           :columns="columns"
           :data="tableData">
      <template v-for="uniSlot in slotArr"
                slot-scope="{ row, index }"
                :slot="uniSlot">
        <slot :name="uniSlot"
              :row="row"
              :index="index"></slot>
      </template>
    </Table>
    <div style="margin-top: 10px; text-align: right;">
      <Page :total="total"
            :current="page"
            :page-size="rows"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
            :disabled="currentParams === null"
            size="small"
            show-total
            show-elevator
            show-sizer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'tableZen',
  props: {
    // columns: {
    //   type: Array,
    //   default () {
    //     return []
    //   }
    // },
  },
  components: {},
  data () {
    return {
      columns: [],
      slotArr: [],
      page: 1,
      total: 0,
      rows: 10,
      loading: false,
      useCurrentParams: true, // 使用外部的参数
      tempParams: null,
      currentParams: null,
      outNext_: null, // 外部的next
      setTableData_: null,
      selectionItems: [],
      tableData: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 分页相关方法
    changePage (page) {
      this.page = page
      this.useCurrentParams = false
      this.setTableDataCore()
    },
    changePageSize (rows) {
      this.rows = rows
      this.useCurrentParams = false
      this.setTableDataCore()
    },
    getParams (currentParams) { // 接口传参的时候一定要用这个函数过滤
      if (this.useCurrentParams) {
        this.tempParams = { ...currentParams }
        return currentParams
      } else {
        return this.currentParams
      }
    },
    getSlot () {
      this.slotArr = []
      this.columns.forEach(item => {
        if (item.slot) {
          this.slotArr.push(item.slot)
        }
      })
    },
    search ({
      columns = [],
      setTableData = null,
      outNext = null
    }) {
      this.columns = columns
      this.getSlot()
      this.outNext_ = outNext
      this.setTableData_ = setTableData
      this.useCurrentParams = true
      this.page = 1
      this.setTableDataCore()
    },
    setTableDataCore () {
      this.loading = true
      this.selectClear()
      const ctx = this
      this.setTableData_ && this.setTableData_(ctx, this.setTableData_callback)
      // this.$emit('getTableData', ctx, this.getTableData_callback)
    },
    setTableData_callback () {
      this.loading = false
      if (this.useCurrentParams) {
        this.currentParams = { ...this.tempParams }
      }
      this.outNext_ && this.outNext_()
    },
    selectClear () {
      this.selectionItems = []
    },
  },
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style>
</style>
