<template>
  <div>
    <pre v-highlight="code"><code :class="codeClass"></code></pre>
  </div>
</template>

<script>
export default {
  name: 'codeZen',
  props: {
    codeClass: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  components: {},
  data () {
    return {
      code: ''
    }
  },
  watch: {},
  computed: {
  },
  methods: {},
  created () { },
  activated () { },
  mounted () {
    const codeUrl = this.url.replace('src/', '')
    import(`!!raw-loader!../../${codeUrl}`).then(module => {
      this.code = module.default
      // console.info('module.default code', this.code)
    })
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
