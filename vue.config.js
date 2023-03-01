const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false, // 打包不生成map
  publicPath: '/fastwork/',
  transpileDependencies: true
})
