import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
    // 移除代理配置，作为纯前端模板
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          antd: ['antd', '@ant-design/icons'],
          chart: ['echarts', 'echarts-for-react'],
          utils: ['axios', 'dayjs', 'socket.io-client']
        }
      }
    },
    // 启用 CSS 代码分割
    cssCodeSplit: true
  },
  base: '/',
  // 路径别名配置
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  // 优化依赖预构建
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'antd'],
    exclude: []
  },
  // 静态资源处理
  // assetsInclude: ['**/*.css'],  // 注释掉这行以避免CSS处理冲突
  // 开发环境配置
  define: {
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV)
  }
});