import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VeloKit',
  base: '/velo-kit/',
  description: 'A VitePress Site',
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern:
        'https://github.com/tsinghua-lau/velo-kit/edit/master/docs/:path',
      text: 'Suggest changes to this page',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/guide/markdown-examples' },
    ],
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Examples',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/guide/markdown-examples' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      },
      {
        text: '时间',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'useFormatDate', link: '/guide/useFormatDate' },
        ]
      },
      {
        text: '防抖',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'useDebounce', link: '/guide/useDebounce' },
        ]
      },
      {
        text: '截流',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'useThrottle', link: '/guide/useThrottle' },
        ]
      },
      {
        text: '复制',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'useCopyToClipboard', link: '/guide/useCopyToClipboard' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsinghua-lau/velo-kit' },
    ],
    footer: {
      message: 'MIT Licensed',
      copyright:
        'Copyright © 2024-present tsinghua-lau & VeloKit Contributors',
    },
    docFooter: {
      prev: '前一篇',
      next: '后一篇'
    }
  },
})
