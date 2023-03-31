## 创建layout页面
```
<template>
  <div>
    <Row>
      <Col span="7">
      <slot name="r1c1"></slot>
      </Col>
      <Col span="7">
      <slot name="r1c2"></slot>
      </Col>
      <Col span="7">
      <slot name="r1c3"></slot>
      </Col>
      <Col span="3">
      </Col>
    </Row>
    <Row>
      <Col span="8" style="padding: 0 10px" >
      <slot name="r2c1"></slot>
      </Col>
      <Col span="8" style="padding: 0 10px">
      <slot name="r2c2"></slot>
      </Col>
      <Col span="8" style="padding: 0 10px">
      <slot name="r2c3"></slot>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
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

<style scoped>
</style>
```

## 外部页面使用
```
<layout>
    <template slot="r1c1">
      yourCode
    </template>
</layout>
```