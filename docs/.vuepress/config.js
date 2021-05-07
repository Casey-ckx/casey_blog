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
      },
      // '@vssue/vuepress-plugin-vssue': {
      //   autoCreateIssue:true,
      //   // 设置 `platform` 而不是 `api`
      //   platform: 'github-v4',
      //   // 其他的 Vssue 配置
      //   owner: 'Casey-ckx',
      //   repo: 'casey_blog',
      //   clientId: 'c263561dd0b4d68e13ab',
      //   clientSecret: '1a2f045939b7edcfd8613326a20b71b6e78e69cb ',
      // },
      'vuepress-plugin-comment': {
        // choosen: 'valine', 
        // // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: '4IRqva2y2zViorStR3LxPcvc-gzGzoHsz',
          appKey: 'Xl3EO08g41Q63blqV3csEOUJ',
          path: '<%- window.location.href %>',
          visitor: true,
          enableQQ:true,
          pageSize:20
          // path: window.location.href
        }
      },
      '@vuepress/active-header-links': {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      },
      '@vuepress/back-to-top': {},
      '@vuepress/nprogress': {}
    }
  }