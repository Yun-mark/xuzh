module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        common: '@/common',
        componets: '@/componets',
        utils: '@/utils',
        views: '@/views',
      }
    }
  }
}
