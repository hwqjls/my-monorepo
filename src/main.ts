import { createApp } from 'vue'
import router from './routers'
import 'element-plus/dist/index.css'
import './style.css'
import App from '@/App.vue'

createApp(App)
  .use(router)
  .mount('#app')
