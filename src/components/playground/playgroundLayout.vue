<template>
  <div class="playground_layout_class">
    <Card>
      <Row>
        <Col span="12"
             style="border-right: 1px dashed #ccc;">
        <div style="padding: 16px;">
          <slot name="left"></slot>
        </div>
        <Divider orientation="left">普通表格</Divider>
        <div style="padding: 0 16px 16px 16px; font-size: 16px;">
          <slot name="left2"></slot>
        </div>
        </Col>
        <Col span="12"
             style="padding: 16px;">
        <div style="margin: -1em 0;">
          <slot name="right"></slot>
        </div>
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'playgroundLayout',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
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
.playground_layout_class .ivu-card-body {
  padding: 0;
}
</style>
