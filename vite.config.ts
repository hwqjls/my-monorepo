import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const pathSrc = path.resolve(__dirname, 'src')


// https://vitejs.dev/config/
export default defineConfig({
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
  }
})
