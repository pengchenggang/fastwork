<template>
  <div>
    <!-- <playground @setComp="ctx => {
      ctx.comp = () => import('@/views/components/tableZenPage/demo.vue')}">
      <demo></demo>
    </playground> -->
    <playground filePath="src/views/components/tableZenPage/demo.vue">
    </playground>
    <!-- <codeZen
             codeClass="language-javascript"></codeZen> -->
  </div>
</template>

<script>
import demo from './demo.vue'
export default {
  name: 'tableZenPage',
  props: {},
  components: {
    demo
  },
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
