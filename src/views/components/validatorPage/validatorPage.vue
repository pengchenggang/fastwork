<template>
  <div>
    <compLayout>
      <h1>表单自定义验证</h1>
      <h2 id="GS">概述</h2>
      <p>概述描述</p>
      <playground filePath="src/views/components/validatorPage/validatorFormDemo.vue"
                  title="自定义表单验证">
        最大长度50的自定义表单验证，关键字是validator
      </playground>
      <markdown :mFile="mFile"></markdown>
    </compLayout>
  </div>
</template>

<script>

export default {
  name: 'validatorPage',
  props: {},
  components: {
  },
  data () {
    return {
      mFile: 'src/views/components/validatorPage/validatorPage.md'
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
