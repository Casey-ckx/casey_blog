const nav = require('./config/navConfig.js')  
// console.log(myModule)
module.exports = {
  theme: 'reco',
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: '内容管理系统',
        description: '内容管理系统'
      }
      // '/': {
      //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      //   title: '内容管理系统',
      //   description: 'Vue-powered Static Site Generator'
      // },
      // '/zh/': {
      //   lang: 'zh-CN',
      //   title: '内容管理系统',
      //   description: 'Vue 驱动的静态网站生成器'
      // }
    },
    themeConfig: {
        keyPage: {
          keys: ['e10adc3949ba59abbe56e057f20f883e','aaae31570eb0959b3bf66dfebc6b5cf6'], // 1.3.0 版本后需要设置为密文
          color: '#42b983', // 登录页动画球的颜色
          lineColor: '#42b983' // 登录页动画线的颜色
        },
        // 默认值：false
        // displayAllHeaders: true ,
        // // 侧边栏
        // sidebar: 'auto',
        // // 头部导航栏
        nav,
        // // 最后一次更新的时间搓
        // lastUpdated: 'Last Updated'
        blogConfig: { 
          category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
          },
          tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: '标签分类'      // 默认文案 “标签”
          },
          socialLinks: [     // 信息栏展示社交信息
            { icon: 'reco-github', link: 'https://github.com/recoluan' },
            { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
          ]
        }
    },
    plugins: {
      "vuepress-plugin-auto-sidebar": {
        titleMode: "titlecase", // 标题模式
        collapsable: true,     // 设置为true,开启折叠
        // sidebarDepth: 0,    // 标题的深度
      },
      '@vuepress-reco/vuepress-plugin-bulletin-popover': {
        width: '300px', // 默认 260px
        title: '消息提示',
        body: [
          {
            type: 'title',
            content: '欢迎加入QQ交流群 🎉🎉🎉',
            style: 'text-aligin: center;'
          },
          {
            type: 'image',
            src: '/rvcode_qq.png'
          }
        ],
        footer: [
          {
            type: 'button',
            text: '打赏',
            link: '/donate'
          },
          {
            type: 'button',
            text: '打赏',
            link: '/donate'
          }
        ]
      },
      '@vuepress-reco/vuepress-plugin-kan-ban-niang': {
        theme: ['blackCat'],
        messages: {
          welcome: '欢迎来到 casey的内容管理系统',
          home: '心里的花，我想要带你回家。',
          theme: '好吧，希望你能喜欢我的其他小伙伴。',
          close: '你知道我喜欢吃什么吗？痴痴地望着你。',
        },
        clean: true
      },
      '@vuepress-reco/vuepress-plugin-back-to-top': {
        icon: 'reco-up',
      },
      '@vuepress-reco/vuepress-plugin-pagation': {

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
      '@vuepress-reco/comments': {
        solution: 'valine',
        options: {
          appId: '4IRqva2y2zViorStR3LxPcvc-gzGzoHsz',// your appId
          appKey: 'Xl3EO08g41Q63blqV3csEOUJ', // your appKey
          visitor: true,
          AccessNumber: true
        }
      },
      // 'vuepress-plugin-comment': {
      //   // choosen: 'valine', 
      //   // // options选项中的所有参数，会传给Valine的配置
      //   options: {
      //     el: '#valine-vuepress-comment',
      //     appId: '4IRqva2y2zViorStR3LxPcvc-gzGzoHsz',
      //     appKey: 'Xl3EO08g41Q63blqV3csEOUJ',
      //     path: '<%- window.location.href %>',
      //     visitor: true,
      //     enableQQ:true,
      //     pageSize:20
      //     // path: window.location.href
      //   }
      // },
      '@vuepress/active-header-links': {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      },
      '@vuepress/back-to-top': {},
      '@vuepress/nprogress': {}
    }
  }