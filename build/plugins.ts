import { PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import eslintPlugin from "vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";

const pathSrc = path.resolve(__dirname, "src");

/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv: ViteEnv): (PluginOption | PluginOption[])[] => {
  const { VITE_GLOB_APP_TITLE, VITE_REPORT, VITE_DEVTOOLS, VITE_PWA, VITE_CODEINSPECTOR } = viteEnv;
  return [
    vue(),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: false, // 启用与 Eslint 集成，生成后设置为false，需要重新生成才可打开
        filepath: "./.eslintrc-auto-imports.json", // 生成 EsLint 配置文件的路径，需要配置在eslint中避免eslint检查错误
        globalsPropValue: true // 用于覆盖 globals 属性，
      },
      dts: path.resolve(pathSrc, "typings/auto-imports.d.ts")
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: path.resolve(pathSrc, "typings/components.d.ts")
    }),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // 注入变量到 html 文件
    createHtmlPlugin({
      minify: true,
      inject: {
        data: { title: VITE_GLOB_APP_TITLE }
      }
    })
  ];
};
