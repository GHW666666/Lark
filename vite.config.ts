import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'//预加载vue插件
import tailwindcss from '@tailwindcss/vite'//vite插件配置tailwindcss
import path from 'path'
import Components from 'unplugin-vue-components/vite'//vite工程化思想，自动引入组件
import { VantResolver} from '@vant/auto-import-resolver'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Components({
      resolvers: [
        VantResolver()
      ]//自动引入组件 项目优化
    }),
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': path.resolve(__dirname, 'src')
    }
  }
})
