<template>
  <div>
    <div style="position: absolute; width: 200px;">
      <slot name="anchor"></slot>
    </div>
    <div style="margin-left: 200px;">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'compLayout',
  props: {},
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
