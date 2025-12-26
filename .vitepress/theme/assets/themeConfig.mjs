// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "HelloCube",
    // 站点描述
    description: "一个面向魔友的资源聚合分享平台",
    // 站点logo
    logo: "/favicon.svg",
    // 站点地址
    site: "https://hellocube.huizhi.pro",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "huizhiLLL",
      cover: "/favicon.svg",
      email: "3169164181@qq.com",
      link: "https://blog.huizhi.pro",
    },
  },
  // 备案信息
  icp: "",
  // 建站日期
  since: "2025-12-26",
  // 每页文章数据
  postSize: 5,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.svg" }],
      // 预载 CDN
      // [
      //   "link",
      //   {
      //     crossorigin: "",
      //     rel: "preconnect",
      //     href: "https://s1.hdslb.com",
      //   },
      // ],
      // [
      //   "link",
      //   {
      //     crossorigin: "",
      //     rel: "preconnect",
      //     href: "https://mirrors.sustech.edu.cn",
      //   },
      // ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "首页",
      link: "/",
    },
    {
      text: "教程",
      items: [
        { text: "正阶", link: "/pages/tutorial/正阶", icon: ""},
        { text: "异形", link: "/pages/tutorial/异形", icon: ""},
      ],
    },
    {
      text: "公式",
      items: [
        { text: "正阶", link: "/pages/formula/正阶", icon: ""},
        { text: "异形", link: "/pages/formula/异形", icon: ""},
      ],
    },
    {
      text: "关于",
      link: "/pages/about",
    },

    // {
    //   text: "文库",
    //   items: [
    //     { text: "文章列表", link: "/pages/archives", icon: "article" },
    //     { text: "全部分类", link: "/pages/categories", icon: "folder" },
    //     { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
    //   ],
    // },
    // {
    //   text: "专栏",
    //   items: [
    //     { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
    //     { text: "我的项目", link: "/pages/project", icon: "code" },
    //     { text: "效率工具", link: "/pages/tools", icon: "tools" },
    //   ],
    // },
    // {
    //   text: "我的",
    //   items: [
    //     { text: "畅所欲言", link: "/pages/message", icon: "chat" },
    //     { text: "致谢名单", link: "/pages/thanks", icon: "reward" },
    //     { text: "关于本站", link: "/pages/about", icon: "contacts" },
    //   ],
    // },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "赛事网",
      list: [
        {
          icon: "https://favicon.im/cubing.com",
          name: "粗饼",
          url: "https://cubing.com/",
        },
        {
          icon: "https://favicon.im/www.worldcubeassociation.org",
          name: "WCA",
          url: "https://www.worldcubeassociation.org/",
        },
        {
          icon: "https://favicon.im/ss.sxmfxh.com/",
          name: "One魔方",
          url: "https://ss.sxmfxh.com/",
        },
      ],
    },
    {
      name: "公式",
      list: [
        {
          icon: "https://favicon.im/www.speedcubedb.com",
          name: "Speedcube",
          url: "https://www.speedcubedb.com/",
        }
      ],
    },
    
    {
      name: "计时器",
      list: [
        {
          icon: "https://favicon.im/cstimer.net",
          name: "cstimer",
          url: "https://cstimer.net/",
        }
      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'both',
      // 默认封面(随机展示)
      defaultCover: [
        'https://singlemouse.cn/api/img.php',
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "3169164181@qq.com",
      },
      {
        icon: "github",
        link: "https://github.com/huizhiLLL",
      },
      {
        icon: "bilibili",
        link: "https://space.bilibili.com/1299547652",
      },
      {
        icon: "qq",
        link: "https://res.abeim.cn/api/qq/?qq=3169164181",
      },
    ],
    // sitemap
    sitemap: [
      {
      },
    ],
  },
  // 评论
  comment: {
    enable: false,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "",
      server: "",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "",
    apiKey: "",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "",
  },
};
