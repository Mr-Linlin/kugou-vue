// 别名配置
module.exports = {
    css: {
        requireModuleExtension: true
    },
    configureWebpack: {
        resolve: {
            extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'store': '@/store',
            }
        }
    },
    outputDir: 'public',
    publicPath: './',
}