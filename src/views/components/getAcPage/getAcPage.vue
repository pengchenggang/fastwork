<template>
  <div>
    <compLayout>
      <h1>getAc 异步执行函数队列</h1>
      <blockquote>
        <p>时间：20230306</p>
        <p>作者：彭成刚</p>
      </blockquote>
      <h2 id="GS">概述</h2>
      <ul class="list">
        <li>环境: vue2</li>
        <li>解决: 同步代码与异步代码的回调问题</li>
        <li>具体: 顺序执行 this.$api</li>
      </ul>
      <h2 id="AZFF">安装方法</h2>
      <ol class="list">
        <li>将 asyncTool.js 放入到 /src/libs/asyncTool.js</li>
        <li>main.js 添加如下代码</li>
      </ol>
      <codeIn>
        <pre v-highlight><code>import AsyncTool from '@/libs/asyncTool'
Vue.prototype.$getAc = () => {
  return new AsyncTool()
}</code></pre>
      </codeIn>
      <h2 id="SYFF">使用方法</h2>
      <h3>方式1: 加载函数</h3>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.use(this.yourFunction) // yourFunction (ctx, next)
ac.run()</code></pre>
      </codeIn>
      <h3>方式2: 内嵌函数</h3>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.use((ctx, next) => {
  // your code
  next()
})
ac.run()</code></pre>
      </codeIn>
      <h3>方式3: 内嵌简单函数</h3>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.use(next => {
  // your code
  next()
})
ac.run()</code></pre>
      </codeIn>
      <h3>方式4: Last函数</h3>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.run(() => {
  // your last code
})</code></pre>
      </codeIn>
      <h2 id="CTX">ctx 上下文</h2>
      <p>这个实例ac的全局对象，一般将此次业务的参数或结果存入里面</p>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.ctx.yourParamA = 'ok'
ac.use((ctx, next) => {
  console.info(ctx.yourParamA) // ok
})
ac.run()</code></pre>
      </codeIn>
      <h2 id="NEXT">next</h2>
      <p>next() 将执行下一个队列函数，并将ctx传递下去</p>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.use((ctx, next) => {
  ctx.a = 'ok'
  next() // 这里就执行到了下一个函数
})
ac.use((ctx, next) => {
  console.info(ctx.a) // ok
  next()
})
ac.run()</code></pre>
      </codeIn>
      <h2 id="NEXTJUMP">ctx.nextJump</h2>
      <p>ctx.nextJump() 将执行下下一个队列函数，并将ctx传递下去</p>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.use((ctx, next) => {
  ctx.a = 'ok'
  ctx.nextJump() // 跳过下个函数执行
})
ac.use((ctx, next) => {
  console.info('我没有被执行')
  next()
})
ac.use((ctx, next) => {
  console.info(ctx.a) // ok
  next()
})
ac.run()</code></pre>
      </codeIn>
      <h2 id="GOTO">ctx.goto</h2>
      <p>ctx.goto('functionName') 将执行指定函数，并将ctx传递下去</p>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
ac.use((ctx, next) => {
  ctx.goto('havaNameFunctionRef') // 跳转到指定名称的函数
})
ac.use(this.havaNameFunction, { ref: 'havaNameFunctionRef' })
ac.run()</code></pre>
      </codeIn>
      <h2 id="IFTO">ctx.ifTo</h2>
      <p>ctx.ifTo(boolValue, next) 根据boolValue 判断是否进入next</p>
      <codeIn>
        <pre v-highlight><code>const ac = this.$getAc()
  ac.ctx.yourCheck = true
ac.use((ctx, next) => {
  if (ctx.ifTo(!ctx.yourCheck, next)) return
  // your code
})
ac.use(next => {
  console.info('I am next function')
})
ac.run()</code></pre>
      </codeIn>
      <h2 id="YDM">源代码</h2>
      <codeIn>
        <codeZen url="src/libs/asyncTool.js"
                 codeClass="language-javascript"></codeZen>
      </codeIn>
      <h2 id="JY">结语</h2>
      <p>此套代码灵感来源KOA 2023 Year written</p>
      <!-- <h2>开发小计</h2>
        <ul>
          <li>highlightjs demo => A 11 Y Dark</li>
          <li><a href="https://highlightjs.org/static/demo/"
               target="_blank">https://highlightjs.org/static/demo/</a></li>
        </ul> -->
    </compLayout>
  </div>
</template>

<script>
import codeZen from '@/components/playground/codeZen.vue'
export default {
  name: 'getAcPage',
  props: {},
  components: { codeZen },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    getCode1 () {
      const code = `
<h1 title="kk">
kkk
</h1>
`
      return code.trim()
    },
  },
  created () { },
  activated () { },
  mounted () {
    // import('!!raw-loader!./test.vue').then(module => {
    //   const code = module.default
    //   console.info('module.default code', code)
    // })
  },
  beforeDestroy () { }
}
</script>

<style>
</style>
