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
        <Divider orientation="left">{{ title }}</Divider>
        <div style="padding: 0 16px 16px 16px; font-size: 16px;">
          <slot name="left2"></slot>
        </div>
        </Col>
        <Col span="12"
             style="padding: 16px; position: relative;">
        <div style="position: absolute; text-align: center; bottom: 0; width: 100%; z-index: 10;">
          <Button type="text"
                  style="width: 20%"
                  @click="expandCollapseHandle">
            <Icon type="ios-arrow-up" />
            <Icon type="ios-arrow-down" />
          </Button>
        </div>
        <!-- <div class="example-code-more"></div> -->
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
    init () {
      console.info('this.$refs.leftRef.$el.offsetHeight ', this.$refs.leftRef.$el.offsetHeight)
      this.initLeftHeight = this.$refs.leftRef.$el.offsetHeight - 30
      this.cardHeight = this.initLeftHeight
    },
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
    setTimeout(this.init, 200)
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
.playground_layout_class {
  .ivu-card-body {
    padding: 0;
  }
  .example-code-more:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    box-shadow: inset 0 -15px 30px #fff;
  }
}
</style>
