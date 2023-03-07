<template>
  <div>
    <tableZen ref="tableZenRef"></tableZen>
  </div>
</template>
<script>
const columns = [
  { title: '姓名', key: 'name', },
  { title: '年龄', key: 'age', }
]
const tableData = [
  { name: '张三', age: '18岁' },
  { name: '李四', age: '28岁' },
]
export default {
  methods: {
    setTableData (ctx, next) { // 这里不能进行二次ac，有逻辑放再外层平级关系
      ctx.tableData = tableData
      ctx.total = 2
      next()
    },
  },
  mounted () {
    this.$refs.tableZenRef.search({
      columns: columns,
      setTableData: this.setTableData
    })
  },
}
</script>
