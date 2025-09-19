import {
  create,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NTimeline,
  NTimelineItem,
  NFlex,
  NGrid,
  NGridItem,
  NAnchor,
  NAnchorLink,
  NConfigProvider,
  NSwitch,
  NDrawer,
  NIcon,
  NText,
  NButton,
  NDrawerContent,
} from 'naive-ui'
import { createPinia } from 'pinia'

import { createApp } from 'vue'
import App from './App.vue'

const naive = create({
  components: [
    NTimeline,
    NTimelineItem,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutFooter,
    NFlex,
    NGrid,
    NGridItem,
    NConfigProvider,
    NSwitch,
    NAnchor,
    NAnchorLink,
    NIcon,
    NText,
    NButton,
    NDrawer,
    NDrawerContent
  ],
})

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(naive)
app.mount('#app')
