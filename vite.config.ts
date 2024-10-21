import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { wrapperEnv } from "./build/getEnv";
import { createProxy } from "./build/proxy";

const pathSrc = path.resolve(__dirname, 'src')


// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)
  
  return {
    base: viteEnv.VITE_PUBLIC_PATH,
    root,
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern", "legacy"
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // Load proxy configuration from .env.development
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, 'typings/auto-imports.d.ts')
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(pathSrc, 'typings/components.d.ts')
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src')
      }
    },
  }
})
