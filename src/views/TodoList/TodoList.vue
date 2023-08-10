<template>
  <span style="display: block;">
    <div style="padding: 30px; width: 400px; margin: 0 auto;">
      <Button type="primary"
              @click="insertHandle">新建</Button>
      <Table :columns="columns1"
             style="width: 300px;"
             :data="list">
        <template slot="operation"
                  slot-scope="{row, index}">
          <Button type="text"
                  @click="editHandle(row, index)"
                  style="padding:6px 4px;">编辑
          </Button>
          <span style="color:#999">|</span>
          <Button type="text"
                  @click="deleteHandle(row, index)"
                  style="padding:6px 4px;">删除
          </Button>
        </template>
      </Table>
      <Modal v-model="editModal"
             title="编辑"
             @on-ok="editOkHandle"
             @on-cancel="editCancelHandle">
        <Input v-model="currRow.name"></Input>
      </Modal>
      <Modal v-model="insertModal"
             title="新建"
             @on-ok="insertOkHandle"
             @on-cancel="insertCancelHandle">
        <Input v-model="currRow.name"></Input>
      </Modal>
    </div>
  </span>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      insertModal: false,
      currRow: { name: '' },
      editModal: false,
      list: [],
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: '操作',
          slot: 'operation'
        },
      ],
    }
  },
  watch: {},
  computed: {},
  methods: {
    insertCancelHandle () {
      this.insertModal = false
    },
    insertOkHandle () {
      const params = {
        name: this.currRow.name
      }
      // /todoList/insert
      this.$api('/todo2/insert', params).then(res => {
        if (res && res.status === 20) {
          this.searchTable()
        }
      })
    },
    insertHandle () {
      this.currRow = { name: '' }
      this.insertModal = true
    },
    editHandle (row, index) {
      this.currRow = { ...row }
      this.editModal = true
    },
    editOkHandle () {
      const params = {
        ...this.currRow
      }
      // /todoList/update
      this.$api('/todo2/update', params).then(res => {
        if (res && res.status === 20) {
          this.searchTable()
        }
      })
    },
    editCancelHandle () {
      this.editModal = false
    },
    searchTable () {
      // const url = '/todoList/list'
      const url = '/todo2/tabulation'
      this.$api(url).then(res => {
        if (res && res.status === 20) {
          this.list = res.data
        }
      })
    },
    deleteHandle (row, index) {
      const params = {
        deleteId: row.id
      }
      // /todoList/delete
      this.$api('/todo2/delete', params).then(res => {
        if (res && res.status === 20) {
          this.searchTable()
        }
      })
    },
    webSocketTest () {
      const url = 'ws://192.168.40.54:8012/verifyDevice?deviceId=abc'
      // 建立webSocket连接
      const websocket = new WebSocket(url)
      // 打开webSokcet连接时，回调该函数
      websocket.onopen = () => console.log("连接建立")

      // 关闭webSocket连接时，回调该函数
      websocket.onclose = () => console.log("连接关闭")
      // 接收信息
      websocket.onmessage = function (res) {
        console.info('webSocket res', res)
        // const obj = eval('(' + res.data + ')')
        // // 显示身份证信息和图片
        // if (obj && obj.msg === "cardInfo") {
        //   console.info("调用discernToInfo方法")
        //   discernToInfo(obj)
        // }
        // 只显示图片
        // else if (obj && obj.msg == "imgInfo") {
        //   console.info("调用imgToInfo方法")
        //   imgToInfo(obj)
        // }
      }
    },
  },
  created () { },
  activated () { },
  mounted () {
    this.searchTable()
    this.webSocketTest()
  },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
</style>
