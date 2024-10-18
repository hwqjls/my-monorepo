import { createApp } from 'vue'
import router from './routers'
import "@/styles/reset.scss";
import "@/styles/common.scss";
import 'element-plus/dist/index.css'
import * as Icons from "@element-plus/icons-vue";

import App from '@/App.vue'

const app = createApp(App)

// 注册element图标组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.use(router)
  .mount('#app')
