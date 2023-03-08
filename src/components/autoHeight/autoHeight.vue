<template>
  <span></span>
</template>

<script>
export default {
  name: 'autoHeight',
  props: {
    subValue: {
      type: Number,
      default: 0
    }
  },
  components: {},
  data () {
    return {
      height: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    update () {
      this.height = window.innerHeight - this.subValue
      this.$emit('input', this.height)
    }
  },
  mounted () {
    this.update()
    window.addEventListener('resize', this.update)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.update)
  }
}
</script>

<style>
</style>
