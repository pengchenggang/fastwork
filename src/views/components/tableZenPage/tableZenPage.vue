<template>
  <div>
    <compLayout>
      <div slot="anchor">
        <anchorZen :links="['概述,GS',
        '组件特点,ZJTD',
        '基础示例,JCSL',
        ]" />
      </div>
      <div slot="content">
        <h1>tableZen 表格封装</h1>
        <h2 id="GS">概述</h2>
        <p>继承组件为 iviewui <a href="http://v4.iviewui.com/components/table"
             target="_blank">Table</a> -
          <a href="http://v4.iviewui.com/components/table#column"
             target="_blank">column</a> -
          <a href="http://v4.iviewui.com/components/page"
             target="_blank">page</a>
        </p>
        <h2 id="ZJTD">组件特点</h2>
        <ul class="list">
          <li>分页点击事件会调取组件内部的参数，只有外部点击，从新加载外部参数进行搜索</li>
          <li>分页未加载数据时候未置灰状态</li>
        </ul>
        <h2 id="JCSL">基础示例</h2>
        <ul class="list">
          <li>columns 表头字段</li>
          <li>tableData 表格数据</li>
          <li>search方法 加载表头和表格数据
            <ul class="list">
              <li>columns参数: 表头数据</li>
              <li>outNext参数: 外部ac的next函数，复杂业务用到</li>
              <li>setTableData方法: 组件内部回调方法，ac类型方法
                <ol class="list">
                  <li>ctx.getParams 函数对搜索的入参进行过滤</li>
                  <li>赋值 ctx.tableData = tableData</li>
                  <li>赋值 ctx.total</li>
                  <li>调用 next()</li>
                </ol>
              </li>
            </ul>
          </li>
        </ul>
        <div style="height: 20px;"></div>
        <playground filePath="src/views/components/tableZenPage/demo1.vue"
                    title="普通表格1">
          普通表格
        </playground>
      </div>
    </compLayout>
  </div>
</template>

<script>
export default {
  name: 'tableZenPage',
  props: {},
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style>
</style>
