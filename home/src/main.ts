import {
  // create naive ui
  create,
  // component
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NButton,
  NTimeline,
  NTimelineItem,
  NFlex,
  NMenu,
  NGrid,
  NGridItem,

  // Theme
  NConfigProvider,
  NSwitch,
} from 'naive-ui'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

const naive = create({
  components: [
    NButton,
    NTimeline,
    NTimelineItem,
    NSpace,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NFlex,
    NMenu,
    NGrid,
    NGridItem,

    NConfigProvider,
    NSwitch,
  ],
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(naive)
app.mount('#app')
