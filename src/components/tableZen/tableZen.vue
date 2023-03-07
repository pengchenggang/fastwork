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
      <Page :total="40"
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
      next_: null, // 外部的next
      getTableData_: null,
      selectionItems: [],
      tableData: []
    }
  },
  watch: {},
  computed: {},
  methods: {
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
      getTableData = null,
      next = null
    }) {
      this.columns = columns
      this.getSlot()
      this.next_ = next
      this.getTableData_ = getTableData
      this.useCurrentParams = true
      this.page = 1
      this.getTableDataCore()
    },
    getTableDataCore () {
      this.loading = true
      this.selectClear()
      const ctx = this
      this.getTableData_ && this.getTableData_(ctx, this.getTableData_callback)
      // this.$emit('getTableData', ctx, this.getTableData_callback)
    },
    getTableData_callback () {
      this.loading = false
      if (this.useCurrentParams) {
        this.currentParams = { ...this.tempParams }
      }
      this.next_ && this.next_()
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
