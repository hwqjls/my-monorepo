import { createApp } from "vue";
import router from "./routers";
import "@/styles/reset.scss";
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
import "element-plus/dist/index.css";
// custom element css
import "@/styles/element.scss";
import * as Icons from "@element-plus/icons-vue";
import pinia from "@/stores";

import App from "@/App.vue";

const app = createApp(App);

// 注册element图标组件
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(pinia).mount("#app");
