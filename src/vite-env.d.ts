/// <reference types="vite/client" />

// 解决引入vue文件不识别
declare module "*.vue" {
  import type { DefineComponent } from "vue";
 
  const vueComponent: DefineComponent<{}, {}, any>;
 
  export default vueComponent;
}