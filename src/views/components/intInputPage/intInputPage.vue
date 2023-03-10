<template>
  <div>
    <compLayout>
      <h1>整数输入框</h1>
      <h2 id="GS">概述</h2>
      <p>输入框只能输入整数</p>
      <h2 id="JCSL">基础示例</h2>
      <div style="height: 20px;"></div>
      <playground filePath="src/views/components/intInputPage/intInputPage_demo.vue"
                  title="InputNumberZen">
        只能输入整数
      </playground>
      <h2 id="YDM">源代码</h2>
      <h3>src/components/InputNumberZen/InputNumberZen.vue</h3>
      <codeIn>
        <codeZen url="src/components/InputNumberZen/InputNumberZen.vue"
                 codeClass="language-xml"></codeZen>
      </codeIn>
    </compLayout>
  </div>
</template>

<script>
import InputNumberZen from '@/components/InputNumberZen/InputNumberZen.vue'
export default {
  name: 'intInputPage',
  props: {},
  components: {
    InputNumberZen
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

<style lang="less">
</style>
