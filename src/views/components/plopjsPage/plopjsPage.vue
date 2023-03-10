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
      <h2 id="AZYLK">安装依赖库</h2>
      <c>npm install --save-dev plop</c> 先把库装上
      <h2 id="PZWJ">配置文件</h2>
      <p>根目录创建 <c>plopfile.js</c>
      </p>
      <h3>plopfile.js</h3>
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
      <h2 id="ZXJB">执行脚本</h2>
      <h3>package.json</h3>
      <codeIn>
        <pre v-highlight><code>{
    ...,
    "scripts": {
        "plop": "plop"
    },
    ...
}</code></pre>
      </codeIn>
      <h2 id="XGJBLX">修改脚本类型</h2>
      <p>如果不了解ESM,可以看我写的这篇文章
        <a href="https://www.cnblogs.com/pengchenggang/p/17037512.html"
           target="_blank">CommonJs VS ES Module</a>
      </p>
      <h3>package.json</h3>
      <codeIn>
        <pre v-highlight><code>{
    ...,
    "type": "module",
    ...
}</code></pre>
      </codeIn>
      <blockquote>
        <p>到这里我们已经可以通过 <c>npm run plop</c> 跑通这个命令了，最小循环已完成，下面进行配置文件的扩展。</p>
      </blockquote>
      <h2 id="PZWJDTW">配置文件带提问</h2>
      <h3>plopfile.js</h3>
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
      <h2 id="CJMBWJ">创建模板文件</h2>
      <ul class="list">
        <li>先在根目录创建 <c>plop-templates</c> 目录</li>
        <li>再在里面创建 <c>controller.hbs</c> 文件</li>
        <li>执行 <c>npm run plop</c> 输入name, 然后会在src的目录下生成指定的文件</li>
      </ul>
      <h2 id="HFcommonjs">恢复commonjs</h2>
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
      <h2 id="DTAction">动态Action</h2>
      <p>需求：执行不同的动作</p>
      <h3>plopfile.js</h3>
      <codeIn>
        <pre v-highlight><code>module.exports = function (plop) {
  plop.setGenerator('fc_page', {
    description: 'application fc_page logic',
    prompts: [{
      type: 'confirm',
      name: 'needLess',
      message: '是否需要样式文件（默认需要）',
      default:true,
    }],
    actions(data) {
      if (data.needLess) {
        return [];
      }
      return [];
    },
  });
};</code></pre>
      </codeIn>
      <h2 id="DGsetGenerator">多个setGenerator</h2>
      <ul class="list">
        <li>需求：有多个命令的时候，设置多个生成器</li>
        <li>可以使用 <c>npm run plop [name]</c> 执行相应的命令</li>
        <li>如果不输入[name]会出来个列表，进行选择</li>
      </ul>
      <h3>plopfile.js</h3>
      <codeIn>
        <pre v-highlight><code>const viewGenerator = require('./plop-templates/view/prompt')
const componentGenerator = require('./plop-templates/component/prompt')
const storeGenerator = require('./plop-templates/store/prompt.js')

module.exports = function(plop) {
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
  plop.setGenerator('store', storeGenerator)
}</code></pre>
      </codeIn>
      <h2 id="Handlebars">Handlebars模板语言</h2>
      <ul class="list">
        <li>需求：模板里面的需要有替换的变量</li>
        <li>Handlebars官网：<a href="https://handlebarsjs.com/zh/guide/"
             target="_blank">https://handlebarsjs.com/zh/guide/</a></li>
      </ul>
      <h3>plop-templates/controller.hbs</h3>
      <codeIn>
        <pre v-highlight><code><div>
{_{name}_} // 忽略下划线
  </div>
</code></pre>
      </codeIn>
      <blockquote>
        <p>这样生成的文件里面的变量就被替换了</p>
      </blockquote>
      <h2 id="TJYMGNFX">添加页面功能分析</h2>
      <ul class="list">
        <li>在src/views/components下建立页面目录 名字为 变量name</li>
        <li>将模板文件copy到刚才的目录下文件名为 [name].vue</li>
        <li>模板文件相应id替换成name的名字</li>
        <li>将页面的路由添加上 重点就是添加路由</li>
      </ul>
      <h3>创建目录和文件的action这么写</h3>
      <codeIn>
        <pre v-highlight><code>actions: [
  {
    type: 'add', // 代表添加文件
    path: 'src/components/{_{name}_}/{_{name}_}.vue', // 这里的name就是上面定义的键 忽略下划线
    templateFile: 'plop-templates/component.hbs'
  }
]
</code></pre>
      </codeIn>
      <h3>修改路由的代码</h3>
      <codeIn>
        <pre v-highlight><code>actions: [{
      type: 'modify',
      path: 'src/router/index.js',
      pattern: /\/\/ ---ROUTER_IMPORT---/g,
      template: `{path: '${path}', name: '/main/${path}', component: () => import('src/components/main/${filePath}/${path}')},
       // ---ROUTER_IMPORT---` // 这个是查找文件插入位置的标识
</code></pre>
      </codeIn>
      <p>代码来源：<a href="https://blog.csdn.net/gaoyan666/article/details/110480430"
           target="_blank">link</a></p>

      <h2 id="YDM">源代码</h2>
      <h3>plopfile.js</h3>
      <codeIn>
        <codeZen url="src/views/components/plopjsPage/plopfile.js"
                 codeClass="language-javascript"></codeZen>
      </codeIn>
      <h3>plop-templates/componentsListTemplate.hbs</h3>
      <codeIn>
        <pre v-highlight><code>{
    path: '{{eName}}Page',
    name: '{{eName}}Page',
    naviName: '{{cName}}',
    component: () => import('@/views/components/{_{eName}_}Page/{_{eName}_}Page.vue'), // 忽略下划线
  },
  // ---ROUTER_IMPORT---
</code></pre>
      </codeIn>
      <h3>plop-templates/compTemplate.hbs</h3>
      <codeIn>
        <codeZen url="src/views/components/plopjsPage/compTemplate.vue"
                 codeClass="language-xml"></codeZen>
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
