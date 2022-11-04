import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import router from '@/router'
import '@/router/permission'

// 全局样式
import '@/style/index.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(ElementPlus)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component as any)
}

app.mount('#app')
