const nav = require('./config/navConfig.js')  
const vssue = require('./config/vssueConfig')
const configureWebpack = require('./config/configureWebpack')
const aboutSidebarConfig =  require('../about/sidebarConfig')
module.exports = {
    configureWebpack:{
      ...configureWebpack
    },
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        title: '内容管理系统',
        description: 'Vue 驱动的静态网站生成器'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '内容管理系统',
        description: 'Vue 驱动的静态网站生成器'
      }
    },
    plugins: {
        // 评论vssue
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'gitee',
            // 其他的 Vssue 配置
            ...vssue
        },
        '@vuepress/medium-zoom': {
          selector: 'img'
        },
        'vuepress-plugin-auto-sidebar': {},
        '@vuepress/back-to-top': {},
        '@vuepress/blog': {},
        // 图片缩放插件
        '@vuepress/nprogress':{},
    },
    themeConfig: {
        // 启用页面滚动效果。
        smoothScroll: true,
        // 默认值：false
        displayAllHeaders: true ,
        // 侧边栏
        // sidebar: [
        //   ...aboutSidebarConfig,
        // ],
        // 头部导航栏
        nav,
        markdown:{
          lineNumbers: true
        },
        // 最后一次更新的时间搓
        lastUpdated: '最近一次更新于',
        logo:'/image/1613990992(1).jpg'
        
    }
  }