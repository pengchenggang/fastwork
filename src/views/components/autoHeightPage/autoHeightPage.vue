<template>
  <div>
    <compLayout>
      <div slot="anchor">
        <anchorZen :links="['概述,GS',
        'API属性,APIPROPS',
        '基础示例,JCSL',
        '源代码,YDM'
        ]" />
      </div>
      <div slot="content">
        <h1>autoHeight 自动高度计算</h1>
        <h2 id="GS">概述</h2>
        <p>主要是为了表格高度自适应用的</p>
        <h2 id="APIPROPS">API属性</h2>
        <table class="Alita">
          <tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr>
          <tr><td>value</td><td>自动返回的高度数据，直接写v-model即可</td><td>Number</td><td>0</td></tr>
          <tr><td>subValue</td><td>浏览器内部高度需要减去的数字</td><td>Number</td><td>0</td></tr>
        </table>
        <h2 id="JCSL">基础示例</h2>
        <div style="height: 20px;"></div>
        <playground filePath="src/views/components/autoHeightPage/autoHeightPageDemo.vue"
                    title="autoHeight">
          autoHeight 自动高度, 一般搭配tableZen使用, 改变浏览器高度的时候, 数据会变化
        </playground>
        <h2 id="YDM">源代码</h2>
        <codeIn>
          <codeZen url="src/components/autoHeight/autoHeight.vue"
                   codeClass="language-xml"></codeZen>
        </codeIn>
      </div>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'autoHeightPage',
  props: {},
  components: {
  },
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
