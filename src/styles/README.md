# 聚财众发前端样式系统

## 概述

本项目采用模块化的CSS架构，结合Tailwind CSS和自定义CSS变量，构建了一套完整的样式系统。

## 目录结构

```
styles/
├── components/     # 组件样式
├── layouts/        # 布局样式
├── modules/        # 功能模块样式
├── themes/         # 主题样式
└── variables/      # CSS变量
```

## 使用指南

### 1. CSS变量

项目定义了一套完整的CSS变量，包括颜色、字体、间距、动画等：

```css
/* 使用颜色变量 */
.button {
  background-color: var(--primary-color);
  color: var(--text-primary);
}

/* 使用间距变量 */
.card {
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}
```

### 2. 组件样式

组件样式遵循BEM命名规范：

```css
/* 按钮组件 */
.jt-btn { }
.jt-btn-primary { }
.jt-btn-secondary { }
```

### 3. 布局系统

项目提供了自定义的栅格系统：

```html
<div class="jt-row">
  <div class="jt-col jt-col-6 jt-col-md-4">内容</div>
  <div class="jt-col jt-col-6 jt-col-md-8">内容</div>
</div>
```

### 4. 主题切换

项目支持亮色和暗色主题：

```css
/* 亮色主题 */
:root { }

/* 暗色主题 */
.dark { }
```

## 样式优先级

1. CSS变量定义
2. Tailwind CSS工具类
3. 自定义组件样式
4. !important (仅在必要时使用)

## 响应式设计

项目采用移动端优先的响应式设计策略，支持以下断点：

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## 性能优化

1. 使用CSS变量减少重复代码
2. 合理使用媒体查询
3. 避免深层嵌套选择器
4. 压缩生产环境CSS文件