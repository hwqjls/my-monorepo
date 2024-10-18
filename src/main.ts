import { createApp } from 'vue'
import router from './routers'
import "@/styles/reset.scss";
import "@/styles/common.scss";
import 'element-plus/dist/index.css'
import App from '@/App.vue'

createApp(App)
  .use(router)
  .mount('#app')
