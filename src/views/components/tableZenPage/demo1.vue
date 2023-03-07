<template>
  <div>
    <tableZen ref="tableZenRef"></tableZen>
  </div>
</template>

<script>
const columns = [
  {
    title: '姓名',
    key: 'name'
  }
]
const tableData = [
  {
    name: '张三'
  }
]
export default {
  props: {},
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    getTableData (ctx, next) { // 这里不能进行二次ac，有逻辑放再外层平级关系
      ctx.tableData = tableData
      ctx.total = 1
      next()
    },
  },
  created () { },
  activated () { },
  mounted () {
    this.$refs.tableZenRef.search({
      columns: columns,
      tableData: tableData,
      getTableData: this.getTableData
    })
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
