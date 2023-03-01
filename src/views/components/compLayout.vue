<template>
  <div>
    <div style="position: absolute; width: 150px;">
      <slot name="anchor"></slot>
    </div>
    <div style="margin-left: 150px;">
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
