<template>
  <div>
    <compLayout>
      <div slot="anchor">
        <anchorZen :links="['概述,GS',
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
             <a href="http://v4.iviewui.com/components/page" target="_blank">page</a>
        </p>
        <h2 id="JCSL">基础示例</h2>
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
