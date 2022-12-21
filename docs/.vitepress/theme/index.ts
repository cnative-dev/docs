import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import { h } from 'vue'
import BaiduAnalysis from '../../components/BaiduAnalytics.vue'
import HomePage from '../../components/HomePage.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('HomePage', HomePage)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BaiduAnalysis)
    })
  },
}
