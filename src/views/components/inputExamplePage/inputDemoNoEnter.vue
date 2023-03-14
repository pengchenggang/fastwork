<template>
  <div>
    <Input v-model="inputValue"
           @on-keyup="keyup"
           @on-keydown="keydown"
           type="textarea"></Input>
  </div>
</template>

<script>
export default {
  name: 'inputDemoNoEnter',
  props: {},
  components: {},
  data () {
    return {
      inputValue: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    keyup (e) {
      console.info('keyup e', e)
    },
    keydown (e) {
      console.info('keydown e', e)
      if (e.keyCode === 13) {
        e.preventDefault()
      }
    },
  },
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style>
</style>
