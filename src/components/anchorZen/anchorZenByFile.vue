<template>
  <div>
    <anchorZen :links="links" />
  </div>
</template>

<script>
export default {
  name: "anchorZenByFile",
  props: {},
  components: {},
  data () {
    return {
      links: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    init () {
      // console.info('this.$parent.$el.innerHTML', this.$parent.$el.innerHTML)
      const content = this.$parent.$el.innerHTML
      // console.info('content', content)
      const reg = /<h2 id=\"[\s\S]*?<\/h2>/ig
      const m2 = this.getRegExec(reg, content)
      // console.info('m2', m2)
      this.links = []
      m2.forEach(item => {
        this.links.push(this.getRegObj(item))
      })
    },
    getRegObj (txt) {
      const reg = /<h2 id=\"([\s\S]*?)\">([\s\S]*?)<\/h2>/
      const m = reg.exec(txt)
      // console.info('m', m)
      // 0: "<h2 id="APIPROPS">API属性</h2>"
      // 1: "APIPROPS"
      // 2: "API属性"
      return m[2] + ',' + m[1]
    },
    getRegExec (reg, txt) {
      let m
      let ret = []
      do {
        m = reg.exec(txt)
        // console.info('m', m)
        if (m) {
          ret.push(m[0])
        }
      } while (m)
      return ret
    }
  },
  created () { },
  activated () { },
  mounted () {
    setTimeout(this.init, 200)
  },
  beforeDestroy () { },
}
</script>

<style></style>
