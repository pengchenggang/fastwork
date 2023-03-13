const { defineConfig } = require('@vue/cli-service')
let ret = ''
const date = new Date()
ret += date.getFullYear()
ret += '-' + (date.getMonth() + 1)
ret += '-' + date.getDate()
ret += '_' + date.getHours()
ret += '-' + date.getMinutes()
ret += '-' + date.getSeconds()
const timeStamp = ret
module.exports = defineConfig({
  // runtimeCompiler: true,
  // vue.config.js
  chainWebpack: (config) => {
    // 使用自定义 loader
    config.module
      .rule("raw-loader")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end()
  },
  configureWebpack: {
    // devtool: 'source-map',
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `js/[name].${timeStamp}.js`,
      chunkFilename: `js/[name].${timeStamp}.js`
    }
  },
  productionSourceMap: false, // 打包不生成map
  publicPath: '/fastwork/',
  transpileDependencies: true
})
