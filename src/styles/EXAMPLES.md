# 样式使用示例

## 1. 按钮组件

```html
<!-- 主要按钮 -->
<button class="jt-btn jt-btn-primary">主要按钮</button>

<!-- 次要按钮 -->
<button class="jt-btn jt-btn-secondary">次要按钮</button>

<!-- 成功按钮 -->
<button class="jt-btn jt-btn-success">成功按钮</button>

<!-- 警告按钮 -->
<button class="jt-btn jt-btn-warning">警告按钮</button>

<!-- 危险按钮 -->
<button class="jt-btn jt-btn-danger">危险按钮</button>
```

## 2. 卡片组件

```html
<div class="jt-card">
  <div class="jt-card-header">
    <h3 class="jt-card-title">卡片标题</h3>
    <p class="jt-card-subtitle">卡片副标题</p>
  </div>
  <div class="jt-card-body">
    <p>卡片内容</p>
  </div>
  <div class="jt-card-footer">
    <button class="jt-btn jt-btn-primary">操作按钮</button>
  </div>
</div>
```

## 3. 表单组件

```html
<form class="jt-form">
  <div class="jt-form-group">
    <label class="jt-form-label">用户名</label>
    <input type="text" class="jt-form-input" placeholder="请输入用户名">
    <p class="jt-form-help">请输入至少6个字符</p>
  </div>
  
  <div class="jt-form-group">
    <label class="jt-form-label">密码</label>
    <input type="password" class="jt-form-input" placeholder="请输入密码">
    <p class="jt-form-error">密码不能为空</p>
  </div>
</form>
```

## 4. 表格组件

```html
<table class="jt-table">
  <thead>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>邮箱</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>张三</td>
      <td>25</td>
      <td>zhangsan@example.com</td>
    </tr>
    <tr>
      <td>李四</td>
      <td>30</td>
      <td>lisi@example.com</td>
    </tr>
  </tbody>
</table>
```

## 5. 布局系统

```html
<!-- 导航栏 -->
<nav class="jt-navbar">
  <a href="#" class="jt-navbar-brand">聚财众发</a>
  <ul class="jt-navbar-menu">
    <li class="jt-navbar-item">
      <a href="#" class="jt-navbar-link active">首页</a>
    </li>
    <li class="jt-navbar-item">
      <a href="#" class="jt-navbar-link">交易</a>
    </li>
  </ul>
  <div class="jt-navbar-actions">
    <div class="jt-navbar-user">
      <img src="avatar.jpg" alt="用户头像" class="jt-navbar-avatar">
      <span>用户名</span>
    </div>
  </div>
</nav>

<!-- 侧边栏 -->
<aside class="jt-sidebar">
  <ul class="jt-sidebar-menu">
    <li class="jt-sidebar-item">
      <a href="#" class="jt-sidebar-link active">
        <i class="jt-sidebar-icon">📊</i>
        <span class="jt-sidebar-text">仪表板</span>
      </a>
    </li>
    <li class="jt-sidebar-item">
      <a href="#" class="jt-sidebar-link">
        <i class="jt-sidebar-icon">💰</i>
        <span class="jt-sidebar-text">交易</span>
      </a>
    </li>
  </ul>
</aside>

<!-- 主内容区 -->
<main class="jt-container">
  <div class="jt-row">
    <div class="jt-col jt-col-12 jt-col-md-8">
      <div class="jt-card">
        <div class="jt-card-body">
          <h2>主要内容</h2>
          <p>这里是主要内容区域</p>
        </div>
      </div>
    </div>
    <div class="jt-col jt-col-12 jt-col-md-4">
      <div class="jt-card">
        <div class="jt-card-body">
          <h3>侧边栏</h3>
          <p>这里是侧边栏内容</p>
        </div>
      </div>
    </div>
  </div>
</main>
```

## 6. 功能模块

### 交易模块

```html
<div class="jt-trading-container">
  <div class="jt-trading-header">
    <h1 class="jt-trading-title">交易市场</h1>
    <p class="jt-trading-subtitle">实时行情和交易操作</p>
  </div>
  
  <div class="jt-market-data">
    <div class="jt-market-item">
      <div class="jt-market-label">BTC/USDT</div>
      <div class="jt-market-value jt-price-up">¥35,000</div>
    </div>
    <div class="jt-market-item">
      <div class="jt-market-label">ETH/USDT</div>
      <div class="jt-market-value jt-price-down">¥2,500</div>
    </div>
  </div>
  
  <div class="jt-trading-card">
    <div class="jt-trading-form">
      <div class="jt-form-group">
        <label class="jt-form-label">交易类型</label>
        <select class="jt-form-input">
          <option>买入</option>
          <option>卖出</option>
        </select>
      </div>
      <div class="jt-form-group">
        <label class="jt-form-label">数量</label>
        <input type="number" class="jt-form-input" placeholder="请输入数量">
      </div>
      <div class="jt-trading-actions">
        <button class="jt-btn jt-trading-buy">买入</button>
        <button class="jt-btn jt-trading-sell">卖出</button>
      </div>
    </div>
  </div>
</div>
```

### 基金模块

```html
<div class="jt-fund-container">
  <div class="jt-fund-header">
    <h1 class="jt-fund-title">基金产品</h1>
    <p class="jt-fund-subtitle">查看和管理您的基金投资</p>
  </div>
  
  <div class="jt-fund-grid">
    <div class="jt-fund-card">
      <div class="jt-fund-card-header">
        <h3 class="jt-fund-name">聚财成长基金</h3>
        <p class="jt-fund-code">JC001</p>
      </div>
      <div class="jt-fund-card-body">
        <div class="jt-fund-info">
          <span class="jt-fund-label">最新净值</span>
          <span class="jt-fund-value">1.256</span>
        </div>
        <div class="jt-fund-info">
          <span class="jt-fund-label">日涨幅</span>
          <span class="jt-fund-value jt-price-up">+2.5%</span>
        </div>
        <div class="jt-fund-nav">¥1.256</div>
      </div>
      <div class="jt-fund-card-footer">
        <div class="jt-fund-actions">
          <button class="jt-btn jt-fund-subscribe">认购</button>
          <button class="jt-btn jt-fund-redeem">赎回</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 账户模块

```html
<div class="jt-account-container">
  <div class="jt-account-header">
    <h1 class="jt-account-title">我的账户</h1>
    <p class="jt-account-subtitle">查看和管理您的账户信息</p>
  </div>
  
  <div class="jt-account-profile">
    <div class="jt-profile-header">
      <img src="avatar.jpg" alt="头像" class="jt-profile-avatar">
      <div class="jt-profile-info">
        <h3>用户名</h3>
        <p>用户ID: 123456</p>
      </div>
    </div>
    <div class="jt-profile-details">
      <div class="jt-profile-item">
        <div class="jt-profile-label">姓名</div>
        <div class="jt-profile-value">张三</div>
      </div>
      <div class="jt-profile-item">
        <div class="jt-profile-label">手机号</div>
        <div class="jt-profile-value">138****1234</div>
      </div>
    </div>
  </div>
  
  <div class="jt-account-assets">
    <div class="jt-assets-header">
      <h2 class="jt-assets-title">资产概览</h2>
    </div>
    <div class="jt-assets-grid">
      <div class="jt-asset-card">
        <div class="jt-asset-name">总资产</div>
        <div class="jt-asset-value">¥100,000</div>
        <div class="jt-asset-change positive">+2.5%</div>
      </div>
      <div class="jt-asset-card">
        <div class="jt-asset-name">可用余额</div>
        <div class="jt-asset-value">¥50,000</div>
        <div class="jt-asset-change">0%</div>
      </div>
    </div>
  </div>
</div>
```