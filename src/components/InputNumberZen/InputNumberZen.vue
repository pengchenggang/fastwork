<template>
  <span style="width: 100px; display: inline-block;">
    <Input v-model="inputNumberValue"
           :placeholder="placeholder"
           :disabled="disabled"
           @on-keyup="keyup"
           @on-blur="blur"
           @on-keydown="keydown" />
  </span>
</template>

<script>
export default {
  name: 'InputNumberZen',
  components: {},
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    integer: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    maxlength: {
      type: Number,
      default: 9
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputNumberValue: '',

    }
  },
  computed: {
    keyList () {
      const keyListBase = [
        8, // 退格键
        9, // tab
        96, // 0
        97, // 1
        98, // 2
        99, // 3
        100, // 4
        101, // 5
        102, // 6
        103, // 7
        104, // 8
        105, // 9
        // 110, // .
        // 190, // .
        46, // del
        48, // 0
        49, // 1
        50, // 2
        51, // 3
        52, // 4
        53, // 5
        54, // 6
        55, // 7
        56, // 8
        57, // 9
        37, // left
        39 // right
      ]
      if (this.integer) { // 整数
        return keyListBase
      } else { // 小数
        return [...keyListBase, 110, 190]
      }
    }
  },
  methods: {
    blur (e) {
      let val = this.inputNumberValue.toString()
      if (val !== '') {
        this.inputNumberValue = Number(val).toString()
      }
      console.info('inputNumberValue', this.inputNumberValue)
      this.$emit('on-blur')
    },
    formatDecimal (num, decimal) {
      num = num.toString()
      let index = num.indexOf('.')
      if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
      } else {
        num = num.substring(0)
      }
      return parseFloat(num).toFixed(decimal)
    },
    keyup (e) {
      if (isNaN(this.inputNumberValue)) {
        this.inputNumberValue = ''
      }
      if (this.inputNumberValue === '') {
        return
      }
      console.info('inputNumberValue', this.inputNumberValue)
      // console.info('keyup::e', e)
      let val = this.inputNumberValue.toString()
      if (val.includes('.')) {
        if (val.indexOf('.') === val.length - 1) {
          // 最后一位是点 就不格式化
        } else {
          if (val.indexOf('.') < val.length - 2) { // 小数点后两位
            this.inputNumberValue = this.formatDecimal(Number(val), 2).toString()
          } else {
            const last1 = val.charAt(val.length - 1)
            const last2 = val.charAt(val.length - 2) + last1
            if (last1 === '0' || last2 === '00') {
              // 不格式化
            } else {
              this.inputNumberValue = Number(val).toString()
            }
          }
        }
      } else {
        this.inputNumberValue = Number(val).toString()
      }
    },
    // 最长10位 可以输入小数点后两位
    // 小数点后保留2位小数的正则表达式
    keydown (e) {
      console.info('e.keyCode', e.keyCode, e.target.value)
      let across = this.keyList.includes(e.keyCode)
      if (!across) { // 只能输入数字点和退格键
        // console.info('1')
        e.preventDefault()
        return
      }
      // 点不能开头
      if (e.keyCode === 110 && this.inputNumberValue === '') {
        // console.info('2')
        e.preventDefault()
        return
      }
      // 有点了就不能再输入点了
      if (this.inputNumberValue.toString().indexOf('.') > -1 && e.keyCode === 110) {
        // console.info('3')
        e.preventDefault()
        return
      }
      if (this.inputNumberValue.length === this.maxlength && ![8, 9, 37, 39].includes(e.keyCode)) {
        // console.info('4')
        e.preventDefault()
      }
      // let reg = /^(([1-9]{1}\d*)|(0{1}))(\.\d{0,2})?$/
      // let expression1 = reg.test(this.inputNumberValue)
      // let expression2 = this.inputNumberValue.length > this.maxlength
      // if (!expression1 || expression2) {
      //   e.preventDefault()
      // } else {
      //   this.$emit('input', this.inputNumberValue)
      // }
    }
  },
  watch: {
    value: function (val) {
      this.inputNumberValue = this.value.toString()
    },
    inputNumberValue: function (val) {
      this.$emit('input', val)
    }
  },
  created () { },
  mounted () {
    // console.info('InputNumberZen::value', this.value)
    this.inputNumberValue = this.value.toString()
  }
}
</script>

<style>
</style>
