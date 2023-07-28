<template>
  <div>
    <Form ref="formRef"
          :label-width="130"
          :rules="modalRules"
          :model="modalData">
      <FormItem label="文件名称："
                prop="fileName">
        <Input v-model.trim="modalData.fileName"
               placeholder="请输入文件名称"
               :maxlength="50"></Input>
      </FormItem>
    </Form>
    <Button type="primary"
    style="float:right;"
            @click="modifyBtnHandle">保存</Button>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data () {
    return {
      modalData: {
        fileName: '', // 文件名称
      },
      modalRules: {
        fileName: [
          { required: true, message: '文件名称不能为空', trigger: 'blur' },
          {
            required: true,
            trigger: 'blur,change',
            validator: (rule, value, callback) => { // 名字不能超过50
              if (value.length > 50) {
                return callback(new Error('文件名称长度不能超过50'))
              } else {
                callback()
              }
            }
          },
        ], // 文件名称
      }
    }
  },
  watch: {},
  computed: {
  },
  methods: {
    modifyBtnHandleValid (ctx, next) {
      this.$refs.formRef.validate(valid => {
        console.info('valid', valid)
        if (valid) {
          next()
        }
      })
    },
    modifyBtnHandleExe (ctx, next) {
      this.$Message.success('表单验证成功！')
    },
    modifyBtnHandle () {
      console.info('modifyBtnHandle')
      const ac = this.$getAc()
      ac.use(this.modifyBtnHandleValid)
      ac.use(this.modifyBtnHandleExe)
      ac.run()
    },
  },
  created () { },
  activated () { },
  mounted () {
  },
  beforeDestroy () { }
}
</script>

<style lang="less">
.modalCheckLabelDoubleRowClass {
  margin-top: -10px;
  display: inline-block;
  text-align: left;
  padding-left: 10px;
}
.checksituationModalNameClass {
  .ivu-form-item-error-tip {
    margin-left: 70px;
  }
}
</style>
