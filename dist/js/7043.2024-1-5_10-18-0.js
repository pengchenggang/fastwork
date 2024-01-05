"use strict";(self["webpackChunkfastwork"]=self["webpackChunkfastwork"]||[]).push([[7043],{57043:function(n,t,e){e.r(t),t["default"]="/* eslint-disable */\n/**\n * asyncTool 异步工具1\n */\nclass asyncTool {\n  // eslint-disable-next-line\n  constructor() {\n    this.arr = []\n    this.ctx = { goto: this.goto, _root: this, ifTo: this.ifTo, nextJump: this.nextJump }\n    this.cIndex = 0\n    this.next = null\n  }\n\n  nextJump (number = 1) {\n    this._root.cIndex = this._root.cIndex + number + 1\n    const one = this._root.arr[this._root.cIndex]\n    console.info(`%cnextJump one 跳过后 ${number}个 的执行函数是: ${one.func.name} `, 'color:green')\n    this._root._innerRun(one.func, one.next)\n  }\n\n  ifTo (boolValue, next) {\n    if (boolValue) {\n      next()\n      return true\n    } else {\n      return false\n    }\n  }\n\n  goto (funcName) {\n    let runIndex = -1\n    console.info('this.arr', this)\n    this._root.arr.map((item, index) => {\n      if (item.ref === funcName) {\n        runIndex = index\n      }\n    })\n    if (runIndex !== -1) {\n      this._root.cIndex = runIndex\n      this._root._innerRun(this._root.arr[runIndex].func,\n        this._root.arr[runIndex].next)\n    } else {\n      console.error('未找到goto方法名为' + funcName + '的函数')\n    }\n  }\n\n  use (func, outParams) {\n    const initParams = {\n      ref: ''\n    }\n    const params = { ...initParams, ...outParams }\n    const into = {\n      ...params,\n      func,\n      next: () => { }\n    }\n    this.arr.push(into)\n    if (this.arr.length > 1) {\n      const index = this.arr.length - 2\n      const nextFunc = () => {\n        // console.info('func.length', func.length)\n        this.cIndex = index + 1\n        this._innerRun(func, this.arr[index + 1].next)\n      }\n      this.arr[index].next = nextFunc\n    }\n    return this\n  }\n\n  getFuncName (fun) {\n    // console.info('fun', fun.toString())\n    var ret = fun.toString()\n    ret = ret.substr('function '.length)\n    ret = ret.substr(0, ret.indexOf('('))\n    return ret\n  }\n\n  _innerRun (func, next) {\n    // console.info('this', this)\n    // console.info('func', func)\n    console.info(`%cfuncName: ${func.name ? func.name : ''}-${this.getFuncName(\n      func)}-ref:${this.arr[this.cIndex].ref}`, 'color:green')\n    this.next = next\n    if (func.length === 0) {\n      func()\n    }\n    if (func.length === 1) {\n      func(next)\n    }\n    if (func.length === 2) {\n      func(this.ctx, next)\n    }\n  }\n\n  run (lastCallBack) {\n    // 插入最后回调执行，但是不影响 数组的内容，避免反复执行会重复插入\n    if (lastCallBack && this.arr.length > 0) {\n      const lastIndex = this.arr.length - 1\n      this.arr[lastIndex].next = lastCallBack\n    }\n    if (this.arr.length > 0) {\n      this._innerRun(this.arr[0].func, this.arr[0].next)\n      // console.info('asyncTool func.length', this.arr[0].func.length)\n    }\n  }\n}\n\nexport default asyncTool\n"}}]);