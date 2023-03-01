<template>
  <div>
    <section class="layout">
      <div style="padding-left: 20px;">
        <slot name="left"></slot>
      </div>
      <div class="grow1">
        <div style="text-align: center; height: 60px;">
            <div class="mainHomeMenuClass">
              <slot name="content"></slot>
            </div>
          </div>
      </div>
      <div style="padding-right: 20px;">
        <slot name="right"></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'mainHomeLayout',
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
.mainHomeMenuClass {
  display: inline-block;
}
.layout {
  height: 60px;
  width: 100%;
  display: flex;
  gap: 16px;
}

.grow1 {
  flex-grow: 1;
}
</style>
