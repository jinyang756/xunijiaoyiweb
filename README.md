# Pure Frontend Template

这是一个纯净的前端模板，基于 React + TypeScript + Vite 构建，适用于快速开发现代化 Web 应用。

## 目录

- [特性](#特性)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [开发指南](#开发指南)
- [部署](#部署)
  - [部署到 Vercel](#部署到-vercel)
  - [部署到其他平台](#部署到其他平台)
- [浏览器支持](#浏览器支持)
- [许可证](#许可证)

## 特性

- 🚀 **现代化技术栈** - 基于 React 18、TypeScript 和 Vite 构建
- 🎨 **优雅的 UI 设计** - 集成 Ant Design 和 Tailwind CSS
- 📱 **响应式布局** - 适配各种设备屏幕尺寸
- 🧪 **模拟数据** - 无需后端即可运行和演示
- ⚡ **快速开发** - 热重载和即时编译
- 📦 **模块化架构** - 清晰的组件和功能分离
- 🛠️ **易于集成** - 可轻松连接真实后端 API

## 技术栈

- **核心框架**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **状态管理**: [Zustand](https://github.com/pmndrs/zustand)
- **路由管理**: [React Router v6](https://reactrouter.com/)
- **UI 组件库**: [Ant Design](https://ant.design/)
- **图标库**: [Heroicons](https://heroicons.com/)
- **样式方案**: [Tailwind CSS](https://tailwindcss.com/)
- **图表库**: [Chart.js](https://www.chartjs.org/), [ECharts](https://echarts.apache.org/), [Recharts](https://recharts.org/)
- **数据请求**: [Axios](https://axios-http.com/), [SWR](https://swr.vercel.app/)
- **WebSocket**: [Socket.IO Client](https://socket.io/)

## 项目结构

```
.
├── src/                      # 核心源码目录
│   ├── components/           # 可复用UI组件
│   │   ├── dashboard/        # 仪表盘相关组件
│   │   └── ...               # 其他通用组件
│   ├── pages/                # 页面级组件
│   │   ├── admin/            # 管理后台页面
│   │   └── ...               # 其他页面组件
│   ├── hooks/                # 自定义Hooks
│   ├── services/             # API服务封装（使用模拟数据）
│   ├── store/                # 全局状态管理
│   ├── router/               # 路由配置
│   ├── styles/               # 样式文件
│   ├── utils/                # 工具函数
│   ├── config/               # 配置文件
│   ├── types/                # TypeScript类型定义
│   ├── layouts/              # 布局组件
│   ├── App.tsx              # 根组件
│   └── main.tsx             # 入口文件
├── config/                   # 项目配置文件
│   ├── vite.config.ts        # Vite构建配置
│   ├── tsconfig.json         # TypeScript配置
│   ├── tsconfig.node.json    # Node.js TypeScript配置
│   ├── jest.config.js        # Jest测试配置
│   ├── babel.config.js       # Babel配置
│   ├── postcss.config.js     # PostCSS配置
│   ├── tailwind.config.js    # Tailwind配置
│   ├── .eslintrc.js          # ESLint配置
│   └── .stylelintrc.json     # Stylelint配置
├── __tests__/                # 测试文件
├── __mocks__/                # 模拟文件
├── .gitignore                # Git忽略文件配置
├── .prettierrc               # Prettier配置
├── package.json              # 项目配置和依赖
├── package-lock.json         # 依赖锁定文件
├── index.html                # HTML入口文件
├── vercel.json               # Vercel部署配置
└── README.md                 # 项目说明文档
```

## 快速开始

### 环境要求

- Node.js >= 16.x
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本

```bash
npm run build
```

构建产物将生成在 `dist/` 目录中。

### 预览生产版本

```bash
npm run preview
```

## 开发指南

### 添加新页面

1. 在 [/src/pages/](file:///C:/Users/guany/Desktop/web/src/pages) 目录下创建页面组件
2. 在 [/src/router/index.tsx](file:///C:/Users/guany/Desktop/web/src/router/index.tsx) 中添加路由配置
3. 如需要，更新导航菜单组件

### 添加新组件

1. 在 [/src/components/](file:///C:/Users/guany/Desktop/web/src/components) 目录下创建组件
2. 在需要使用的页面或组件中导入并使用

### 状态管理

使用 [Zustand](https://github.com/pmndrs/zustand) 进行全局状态管理：

1. 在 [/src/store/](file:///C:/Users/guany/Desktop/web/src/store) 目录下创建状态存储
2. 在组件中使用 `useStore` 钩子访问状态

### API 集成

所有 API 调用都封装在 [/src/services/](file:///C:/Users/guany/Desktop/web/src/services) 目录中：

1. 当前使用模拟数据进行演示
2. 要连接真实后端，替换 [/src/services/](file:///C:/Users/guany/Desktop/web/src/services) 目录下的服务文件
3. 更新 [/src/config.ts](file:///C:/Users/guany/Desktop/web/src/config.ts) 中的 API 配置

## 部署

### 部署到 Vercel

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 "New Project"
3. 导入此 GitHub 仓库
4. Vercel 会自动检测并配置构建设置
5. 点击 "Deploy" 开始部署

或者使用 Vercel CLI：

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署项目
vercel
```

Vercel 配置文件 ([vercel.json](file:///C:/Users/guany/Desktop/web/vercel.json)) 已包含在项目中，确保正确的构建和路由设置。

### 部署到其他平台

#### Netlify

1. 访问 [Netlify](https://netlify.com/)
2. 连接您的 Git 仓库
3. 设置以下构建配置：
   - Build command: `npm run build`
   - Publish directory: `dist`
4. 点击 "Deploy site"

#### GitHub Pages

1. 安装 gh-pages 包：
   ```bash
   npm install --save-dev gh-pages
   ```

2. 在 [package.json](file:///C:/Users/guany/Desktop/web/package.json) 中添加部署脚本：
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. 部署到 GitHub Pages：
   ```bash
   npm run deploy
   ```

#### Firebase Hosting

1. 安装 Firebase CLI：
   ```bash
   npm install -g firebase-tools
   ```

2. 初始化 Firebase 项目：
   ```bash
   firebase login
   firebase init hosting
   ```

3. 配置 Firebase 以使用 `dist` 作为公共目录

4. 构建并部署：
   ```bash
   npm run build
   firebase deploy
   ```

#### AWS S3 + CloudFront

1. 构建项目：
   ```bash
   npm run build
   ```

2. 将 `dist` 目录中的内容上传到 S3 存储桶

3. 配置 CloudFront 以指向您的 S3 存储桶

#### Azure Static Web Apps

1. 在 Azure 门户中创建静态 Web 应用
2. 连接到您的 Git 仓库
3. 设置构建配置：
   - App location: `/`
   - Output location: `dist`
4. 创建并部署应用

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT © 2025