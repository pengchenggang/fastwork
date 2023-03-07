<template>
  <div class="playground_layout_class">
    <Card>
      <Row>
        <Col span="12"
             ref="leftRef"
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
             style="padding: 16px; position: relative;">
        <div style="position: absolute; text-align: center; bottom: 0; width: 100%;">
          <Button type="text" @click="expandCollapseHandle">
            <Icon type="ios-arrow-up" />
            <Icon type="ios-arrow-down" />
          </Button>
        </div>
        <div style="overflow: hidden; transition: height .2s ease-in-out;"
             :style="{
      height: cardHeight+'px'
    }">
          <div ref="codeRef">
            <div style="margin: -2em 0;">
              <slot name="right"></slot>
            </div>
          </div>
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
      initLeftHeight: 0,
      cardHeight: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    expandCollapseHandle () {
      console.info('this.cardHeight', this.cardHeight)
      console.info('this.$refs.codeRef.$el.offsetHeight', this.$refs.codeRef.offsetHeight)
      if (this.cardHeight === this.initLeftHeight) {
        this.cardHeight = this.$refs.codeRef.offsetHeight
      } else {
        this.cardHeight = this.initLeftHeight
      }
    },
  },
  created () { },
  activated () { },
  mounted () {
    console.info('this.$refs.leftRef.$el.offsetHeight ', this.$refs.leftRef.$el.offsetHeight)
    this.initLeftHeight = this.$refs.leftRef.$el.offsetHeight + 16
    this.cardHeight = this.initLeftHeight
  },
  beforeDestroy () { }
}
</script>

<style>
.playground_layout_class .ivu-card-body {
  padding: 0;
}
</style>
