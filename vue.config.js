const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
    // 选项
    //基本路径
    publicPath: "./",
    //构建时的输出目录
    outputDir: "dist",
    //放置静态资源的目录
    assetsDir: "static",
    //html 的输出路径
    indexPath: "index.html",
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@': resolve('src'),
                },
            },
        }
    },
    devServer: {
        // 自动打开浏览器
        open: true,
        host: 'localhost',
        // 端口
        port: 8089,
        // https
        https: false,
        // 热更新
        hotOnly: false,
        // 使用代理
        // proxy: {
        //     '/api': {
        //         // 目标代理服务器地址
        //         target: 'http://47.100.47.3/',
        //         // 开启代理，本地创建一个虚拟服务器 允许跨域
        //         changeOrigin: true, 
        //     },
        // },
    },
    <% if(css === "scss") { %>
        css: {
            loaderOptions: {
                scss: {
                    //scss 8.x的语法
                    prependData: '@import "~@/style/base.scss";'
                        
                }
            }
        }
   <% } %>
   
}