<template>
  <div>
    <Anchor show-ink
            :scroll-offset="70"
            :offset-top="100">
      <AnchorLink v-for="item in links"
                  :href="'#'+item.split(',')[1]"
                  :key="item"
                  :title="item.split(',')[0]" />
      <!-- <AnchorLink href="#GS"
                  title="概述" />
      <AnchorLink href="#SYFF"
                  title="使用方法" />
      <AnchorLink href="#API"
                  title="API" /> -->
    </Anchor>
  </div>
</template>

<script>
export default {
  name: 'anchorZen',
  props: {
    links: {
      type: Array,
      default () {
        return [] // [ '中文,ZW']
      }
    },
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
</style>
