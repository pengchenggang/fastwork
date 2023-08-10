<template>
  <div class="home">
    <br>
    <span style="font-size:48px">访问量：{{ counter }}</span>
    <br>
    <br>
    <br>
    此组件库是在 <a href="http://v4.iviewui.com/components/input" target="_blank">iview</a> 的基础上二次封装

    <br>
    <a href="https://highlightjs.org/static/demo/" target="_blank">https://highlightjs.org/static/demo/</a>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data () {
    return {
      counter: '',
    }
  },
  mounted () {
    this.$api('https://phprgtyhkz.hk.aircode.run/getCounter').then(res => {
      console.info('res', res)
      this.counter = res.data
    })
  }
}
</script>
