<template>
  <div>
    <layout :title="title">
      <div slot="left">
        <component v-if="dynamicComponent"
                   :is="dynamicComponent"></component>
      </div>
      <div slot="left2">
        <slot></slot>
      </div>
      <div slot="right">
        <codeZen :url="filePath"
                 codeClass="language-javascript"></codeZen>
      </div>
    </layout>
  </div>
</template>

<script>
import layout from './playgroundLayout.vue'
export default {
  name: 'playground',
  props: {
    title: {
      type: String,
      default: ''
    },
    filePath: {
      type: String,
      default: ''
    },
  },
  components: {
    layout
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
        // const codeUrl = this.filePath
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
