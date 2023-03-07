<template>
  <div class="codeInClass">
    <!-- <Card> -->
    <slot></slot>
    <!-- </Card> -->
  </div>
</template>

<script>
export default {
  name: 'codeIn',
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

<style lang="less">
.codeInClass {
  margin-top: 20px;
  pre {
    margin: 0;
  }
  pre code.hljs {
    background: #f8f8f8;
    font-size: 18px;
    padding: 16px;
  }
}
</style>
