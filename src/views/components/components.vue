<template>
  <div>
    <Menu theme="light"
          :active-name="activeName"
          @on-select="selectHandle"
          style="position: fixed; height: calc(100% - 60px); top: 60px; overflow: auto;">
      <MenuItem name="getAc">GetAc</MenuItem>
      <MenuItem name="tableZen">TableZen</MenuItem>
      <MenuItem name="plopjs">plopjs</MenuItem>
    </Menu>
    <div style="margin-left: 240px; padding: 10px;">
      <!-- <div style="height: 30px; line-height: 30px;">当前位置: 组件代码 / {{ activeName }}</div> -->
      <!-- 60 + 20 + 30 = 110 -->
      <!-- height: calc(100vh - 110px); overflow: auto; -->
      <div class="fastwork-article"
           style="background-color: white; border: 1px solid #f2f2f2; padding: 20px;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'components',
  props: {},
  components: {},
  data () {
    return {
      activeName: 'getAc'
    }
  },
  watch: {},
  computed: {},
  methods: {
    getActiveName () {
      this.activeName = this.$router.history.current.name
    },
    selectHandle (name) {
      console.info('selectHandle name', name)
      this.activeName = name
      this.$router.push({
        name
      })
    },
  },
  created () { },
  activated () { },
  mounted () {
    this.getActiveName()
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
.fastwork-article {
  font-size: 16px;
  font-family: 微软雅黑;
  ul,
  ol {
    padding-left: 28px;
  }
  li {
    line-height: 28px;
  }
  // ul {
  //   list-style: none;
  //   // padding-left: 20px;
  //   list-style-type: disc;
  // }
  // li {
  //   list-style: none;
  //   position: relative;
  //   padding: 8px 16px 8px 16px;
  //   border-radius: 4px;
  //   color: #515a6e;
  //   font-size: 14px;
  //   line-height: 16px;
  //   margin-bottom: 10px;
  //   border: 1px solid #abdcff;
  //   background-color: #f0faff;
  //   margin-bottom: 5px;
  // }
  h1 {
    // font-size: 26px;
    // font-weight: 400;
    // margin: 12px 0;
    margin: 0 0 1.667rem;
    font-size: 2.667rem;
    font-weight: 600;
    line-height: 1.31;
    color: #252933;
  }
  h2 {
    font-size: 19px;
    font-weight: 700;
    padding-left: 10px;
    border-left: 5px solid #916dd5;
    margin: 60px 0 20px 0;
  }
}
</style>
