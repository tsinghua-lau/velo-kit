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

      {
        icon: {
          svg: '<svg t="1724814867618" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1497" width="64" height="64"><path d="M737.828571 166.857143l0.457143-0.228572h0.228572L512 36.571429 285.6 166.628571h-0.228571l0.8 0.342858L100 274.285714v475.428572L512 987.428571l412-237.714285V274.285714l-186.171429-107.428571zM478.514286 890.971429L314.971429 796.571429V637.028571L166.857143 552.914286V353.028571l311.657143 179.771429v358.171429zM199.085714 294.285714l153.942857-88.914285 158.742858 91.085714 158.971428-91.314286 154.514286 89.142857-313.028572 180.571429-313.142857-180.571429zM857.142857 553.485714l-147.2 83.542857v158.971429l-164.457143 94.857143V533.028571L857.142857 353.257143v200.228571z" p-id="1498"></path></svg>'
        },
        link: 'https://codesandbox.io/p/sandbox/velo-kit-f9ds5n?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522cm0d8b5pz00063b6iv19223w1%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522cm0d8b5pz00023b6ik97vqcuj%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522cm0d8b5pz00033b6i0j8ywfvn%2522%257D%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522cm0d8b5pz00053b6ipyzi24zl%2522%257D%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522cm0d8b5pz00023b6ik97vqcuj%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cm0d8b5pz00013b6if3i5r3f6%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cm0dac7dj00023b6i8grlol4s%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Fcomponents%252FHelloWorld.vue%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522cm0d8b5pz00023b6ik97vqcuj%2522%252C%2522activeTabId%2522%253A%2522cm0dac7dj00023b6i8grlol4s%2522%257D%252C%2522cm0d8b5pz00053b6ipyzi24zl%2522%253A%257B%2522id%2522%253A%2522cm0d8b5pz00053b6ipyzi24zl%2522%252C%2522activeTabId%2522%253A%2522cm0d92lmy00e53b6iybsscjib%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522cm0d8b5pz00043b6iukwn2rol%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522id%2522%253A%2522cm0d8bsmg00183b6im14fd85k%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522id%2522%253A%2522cm0d8c4e6001s3b6i4ces1h1n%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522DOCS%2522%252C%2522id%2522%253A%2522cm0d8q0y300903b6i0i8u23tu%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522SANDBOX_INFO%2522%252C%2522isCloud%2522%253Afalse%252C%2522id%2522%253A%2522cm0d92lmy00e53b6iybsscjib%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522cm0d8b5pz00033b6i0j8ywfvn%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522cm0d8b5pz00033b6i0j8ywfvn%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'codesandbox'
      },
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
