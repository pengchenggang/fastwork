<template>
  <div>
    <compLayout>
      <h1>Plopjs 微型脚手架</h1>
      <h2 id="GS">概述</h2>
      <ul class="list">
        <li>主要功能：创建页面模板文件</li>
        <li>plopjs 官网：<a href="https://plopjs.com/documentation/"
             target="_blank">https://plopjs.com/documentation/</a></li>
      </ul>
      <h2 id="安装依赖库">安装依赖库</h2>
      <c>npm install --save-dev plop</c> 先把库装上
      <h2 id="配置文件">配置文件</h2>
      <p>根目录创建 <c>plopfile.js</c>
      </p>
      <codeIn>
        <pre v-highlight><code>export default function (plop) {
  // 入口函数
  plop.setGenerator('basics', {
    description: '描述文字不显示在控制台',
    prompts: [], // 这里是提问的问题
    actions: [], // 这里是执行的函数
  })
};</code></pre>
      </codeIn>
      <h2 id="执行脚本">执行脚本</h2>
      <codeIn>
        <pre v-highlight><code>// package.json
{
    ...,
    "scripts": {
        "plop": "plop"
    },
    ...
}</code></pre>
      </codeIn>
      <h2 id="修改脚本类型">修改脚本类型</h2>
      <p>如果不了解ESM,可以看我写的这篇文章
        <a href="https://www.cnblogs.com/pengchenggang/p/17037512.html"
           target="_blank">CommonJs VS ES Module</a>
      </p>

      <codeIn>
        <pre v-highlight><code>// package.json
{
    ...,
    "type": "module",
    ...
}</code></pre>
      </codeIn>
      <blockquote>
        <p>到这里我们已经可以通过 <c>npm run plop</c> 跑通这个命令了，最小循环已完成，下面进行配置文件的扩展。</p>
      </blockquote>
      <h2 id="配置文件带提问">配置文件带提问</h2>
      <codeIn>
        <pre v-highlight><code>export default function (plop) {
    // controller generator
    plop.setGenerator('controller', {
        description: 'application controller logic',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'controller name please'
        }],
        actions: [{
            type: 'add',
            path: 'src/{_{ name }_}.js', // 请忽略下划线
            templateFile: 'plop-templates/controller.hbs'
        }]
    });
};</code></pre>
      </codeIn>
      <ul class="list">
        <li>
          <p>执行 <c>npm run plop</c> 查看下效果</p>
        </li>
        <li>报错 发现找不到 <c>plop-templates/controller.hbs</c> 文件</li>
      </ul>
      <h2 id="创建模板文件">创建模板文件</h2>
      <ul class="list">
        <li>先在根目录创建 <c>plop-templates</c> 目录</li>
        <li>再在里面创建 <c>controller.hbs</c> 文件</li>
        <li>执行 <c>npm run plop</c> 输入name, 然后会在src的目录下生成指定的文件</li>
      </ul>
      <h2 id="恢复commonjs">恢复commonjs</h2>
      <ul class="list">
        <li>package.json中 如果不写type, 默认是commonjs。</li>
        <li>
          <c>"type": "commonjs"</c>
        </li>
        <li>之前我们改为了 <c>"type": "module",</c>, 现在我们恢复回来</li>
        <li>为什么恢复？因为我用的vue cli,之前的代码都用的commonjs,我懒的改了</li>
      </ul>
      <blockquote>
        <p>删除 package.json 中的 <c>"type": "module",</c>
        </p>
      </blockquote>
      <h3>plopfile.js</h3>
      <codeIn>
        <pre v-highlight><code>module.exports = function (plop) {
  // controller generator
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'controller name please'
    }],
    actions: [{
      type: 'add',
      path: 'src/{_{name}_}.vue', // 忽略下划线
      templateFile: 'plop-templates/controller.hbs'
    }]
  })
}</code></pre>
      </codeIn>

    </compLayout>
  </div>
</template>

<script>
export default {
  name: 'plopjs',
  props: {},
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style>
</style>
