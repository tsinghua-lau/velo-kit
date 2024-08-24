// // .vitepress/theme/index.js
import '../custom.css'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Layout from './Layout.vue'
import Stars from './Stars.vue'
import Lottie from './lottie.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('Star', Stars)
    app.component('Lottie', Lottie)
  },
  Layout,
} satisfies Theme
