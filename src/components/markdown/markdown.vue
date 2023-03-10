<template>
  <div>
    {{ html }}
  </div>
</template>

<script>
export default {
  name: 'markdown',
  props: {
    mFile: {
      type: String,
      default: ''
    },
    slotName: {
      type: String,
      default: ''
    },
  },
  components: {},
  data () {
    return {
      html: '',
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () {
    if (this.mFile) {
      const codeUrl = this.mFile.replace('src/', '')
      import(`!!raw-loader!../../${codeUrl}`).then(module => {
        this.html = module.default
        // console.info('module.default code', this.code)
      })
    }
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
