## 源代码
```
<template>
  <div>
    <Modal width="1100"
           @on-cancel="onCancelHandle"
           v-model="modalVShow"
           :mask-closable="false"
           :closable="true">
      <div slot="header"><b> Modal标题 </b></div>
      <div style="max-height: 600px; overflow: auto;">
        Content
      </div>
      <div slot="footer">
        <Button type="primary"
                @click="modifyBtnHandle">保存</Button>
        <Button @click="cancelBtnHandle">取消</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    pThis: {
      type: Object,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      modalVShow: false,
    }
  },
  watch: {},
  computed: {
  },
  methods: {
    init () {
      this.modalVShow = true
    },
    cancelBtnHandle () {
      console.info('cancelBtnHandle')
      this.onCancelHandle()
    },
    modifyBtnHandle () {
      console.info('modifyBtnHandle')
      this.onCancelHandle()
    },
    onCancelHandle () {
      this.modalVShow = false
    }
  },
  created () { },
  activated () { },
  mounted () {
    this.init()
  },
  beforeDestroy () { }
}
</script>

<style scoped>
</style>

```

## 外层使用
这一块就是示意，具体文件名叫什么，再去改
```
<ModalBySXLY v-if="modalVif"></ModalBySXLY>
import ModalBySXLY from './components/ModalBySXLY/ModalBySXLY.vue'
methods: {
    handleEdit () {
      this.modalVif = false
      this.$nextTick(() => {
        this.modalVif = true
      })
     },
  }
```