const { defineConfig } = require('@vue/cli-service')
const { default: components } = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')

module.exports = defineConfig({
  publicPath: './',
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [autoprefixer(), postcssNested({ preserveEmpty: true })]
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      components({
        dts: false,
        dirs: [],
        resolvers: [
          ElementPlusResolver({
            importStyle: false
          })
        ]
      })
    ]
  },
  chainWebpack: config => {
    // 禁用运行时 ts 类型检查
    config.plugins.delete('fork-ts-checker')

    // 配置应用标题
    config.plugin('html').tap(args => {
      args[0].title = '京东微前端（Vue3）'
      return args
    })
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: 'localhost',
    port: '3002'
  }
})
