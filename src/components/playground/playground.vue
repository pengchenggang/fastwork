<template>
  <div>
    <component v-if="dynamicComponent"
               :is="dynamicComponent"></component>
  </div>
</template>

<script>
const loadView = (view) => { // 路由懒加载
  return () => Promise.resolve(require(`${view}`).default)
}
export default {
  name: 'playground',
  props: {
    filePath: {
      type: String,
      default: ''
    },
  },
  components: {
  },
  data () {
    return {
      // dynamicComponent: null,
    }
  },
  watch: {},
  computed: {
    dynamicComponent () {
      console.info('dynamicComponent this.filePath', this.filePath)
      // const asset = 'views/components/getAc/test.vue'
      // const asset = 'views/components/tableZen/demo.vue'
      if (this.filePath) {
        console.info('dynamicComponent this.filePath', this.filePath)
        const codeUrl = this.filePath.replace('src/', '')
        return () => import(`../../${codeUrl}`) // import 里面必须跟着最少一个目录路径
      } else {
        return ''
      }
    },
    // loader () {
    //   // const require2 = require('require-fool-webpack')
    //   // const asset = '@/views/components/getAc/test.vue'
    //   // return () => require2(`${asset}`)
    // }
    // dynamicComponent () {
    //   // let view = '@/views/components/getAc/test.vue'
    //   // return () => Promise.resolve(require(view).default)
    //   const asset = '@/views/components/getAc/test.vue'
    //   return () => import(`${asset}`)
    // },
  },
  methods: {
  },
  created () {
    // let filename = '@/views/components/getAc/test.vue'
    // if (filename) {
    //   this.dynamicComponent = () => loadView(filename)
    // } else {
    //   return null
    // }
  },
  activated () { },
  mounted () {
    // this.dynamicComponent = require2('@/views/components/getAc/test.vue')
    // this.dynamicComponent = () => {
    //   const require2 = require('require-fool-webpack')
    //   const asset = '@/views/components/getAc/test.vue'
    //   console.info('111', require2(`${asset}`))
    //   return () => require2(`${asset}`)
    // }
    // this.loader()
    //   .then(() => {
    //     this.dynamicComponent = () => this.loader()
    //   })
    // .catch(() => {
    //   this.dynamicComponent = () =>
    //     import('@components/demo/demoTemplates/defaultDemo')
    // })
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
