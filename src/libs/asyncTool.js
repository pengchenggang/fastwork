/* eslint-disable */
/**
 * asyncTool 异步工具1
 */
class asyncTool {
  // eslint-disable-next-line
  constructor() {
    this.arr = []
    this.ctx = { goto: this.goto, _root: this, ifTo: this.ifTo, nextJump: this.nextJump }
    this.cIndex = 0
    this.next = null
  }

  nextJump (number = 1) {
    this._root.cIndex = this._root.cIndex + number + 1
    const one = this._root.arr[this._root.cIndex]
    console.info(`%cnextJump one 跳过后 ${number}个 的执行函数是: ${one.func.name} `, 'color:green')
    this._root._innerRun(one.func, one.next)
  }

  ifTo (boolValue, next) {
    if (boolValue) {
      next()
      return true
    } else {
      return false
    }
  }

  goto (funcName) {
    let runIndex = -1
    console.info('this.arr', this)
    this._root.arr.map((item, index) => {
      if (item.ref === funcName) {
        runIndex = index
      }
    })
    if (runIndex !== -1) {
      this._root.cIndex = runIndex
      this._root._innerRun(this._root.arr[runIndex].func,
        this._root.arr[runIndex].next)
    } else {
      console.error('未找到goto方法名为' + funcName + '的函数')
    }
  }

  use (func, outParams) {
    const initParams = {
      ref: ''
    }
    const params = { ...initParams, ...outParams }
    const into = {
      ...params,
      func,
      next: () => { }
    }
    this.arr.push(into)
    if (this.arr.length > 1) {
      const index = this.arr.length - 2
      const nextFunc = () => {
        // console.info('func.length', func.length)
        this.cIndex = index + 1
        this._innerRun(func, this.arr[index + 1].next)
      }
      this.arr[index].next = nextFunc
    }
    return this
  }

  getFuncName (fun) {
    // console.info('fun', fun.toString())
    var ret = fun.toString()
    ret = ret.substr('function '.length)
    ret = ret.substr(0, ret.indexOf('('))
    return ret
  }

  _innerRun (func, next) {
    // console.info('this', this)
    // console.info('func', func)
    console.info(`%cfuncName: ${func.name ? func.name : ''}-${this.getFuncName(
      func)}-ref:${this.arr[this.cIndex].ref}`, 'color:green')
    this.next = next
    if (func.length === 0) {
      func()
    }
    if (func.length === 1) {
      func(next)
    }
    if (func.length === 2) {
      func(this.ctx, next)
    }
  }

  run (lastCallBack) {
    // 插入最后回调执行，但是不影响 数组的内容，避免反复执行会重复插入
    if (lastCallBack && this.arr.length > 0) {
      const lastIndex = this.arr.length - 1
      this.arr[lastIndex].next = lastCallBack
    }
    if (this.arr.length > 0) {
      this._innerRun(this.arr[0].func, this.arr[0].next)
      // console.info('asyncTool func.length', this.arr[0].func.length)
    }
  }
}

export default asyncTool
