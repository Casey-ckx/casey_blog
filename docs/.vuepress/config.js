const nav = require('./config/navConfig.js')  
// console.log(myModule)
module.exports = {
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        title: '内容管理系统',
        description: 'Vue-powered Static Site Generator'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: '内容管理系统',
        description: 'Vue 驱动的静态网站生成器'
      }
    },
    themeConfig: {
        // 默认值：false
        displayAllHeaders: true ,
        // 侧边栏
        sidebar: 'auto',
        // 头部导航栏
        nav,
        // 最后一次更新的时间搓
        lastUpdated: 'Last Updated'
    },
    plugins: {
      "vuepress-plugin-auto-sidebar": {
        titleMode: "titlecase", // 标题模式
        collapsable: true,     // 设置为true,开启折叠
        // sidebarDepth: 0,    // 标题的深度
      }
    }
  }