<template>
  <span style="display: inline-block;">
    <div style="padding: 30px;">
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
      this.$api('/todoList/insert', params).then(res => {
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
      this.$api('/todoList/update', params).then(res => {
        if (res && res.status === 20) {
          this.searchTable()
        }
      })
    },
    editCancelHandle () {
      this.editModal = false
    },
    searchTable () {
      this.$api('/todoList/list').then(res => {
        if (res && res.status === 20) {
          this.list = res.data
        }
      })
    },
    deleteHandle (row, index) {
      const params = {
        deleteId: row.id
      }
      this.$api('/todoList/delete', params).then(res => {
        if (res && res.status === 20) {
          this.searchTable()
        }
      })
    },
  },
  created () { },
  activated () { },
  mounted () {
    this.searchTable()
  },
  beforeDestroy () { }
}
</script>

<style lang="less" scoped>
</style>
