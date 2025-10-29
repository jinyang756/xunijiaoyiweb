// 模拟数据文件，用于纯前端模板

export const mockUsers = [
  {
    id: '1',
    username: 'admin',
    role: 'admin',
    email: 'admin@example.com',
    createdAt: '2023-01-01',
    balance: 100000,
    totalAssets: 150000
  },
  {
    id: '2',
    username: 'user1',
    role: 'user',
    email: 'user1@example.com',
    createdAt: '2023-02-01',
    balance: 50000,
    totalAssets: 75000
  },
  {
    id: '3',
    username: 'user2',
    role: 'user',
    email: 'user2@example.com',
    createdAt: '2023-03-01',
    balance: 25000,
    totalAssets: 35000
  }
];

export const mockTrades = [
  {
    id: 't1',
    userId: '1',
    asset: 'SH_FUTURE',
    type: 'buy',
    quantity: 10,
    price: 1000,
    status: 'completed',
    timestamp: '2023-01-01T10:00:00Z'
  },
  {
    id: 't2',
    userId: '2',
    asset: 'SH_FUTURE',
    type: 'sell',
    quantity: 5,
    price: 1050,
    status: 'completed',
    timestamp: '2023-01-02T11:00:00Z'
  }
];

export const mockSystemStats = {
  totalUsers: 1234,
  totalTrades: 5678,
  totalVolume: 123456789,
  activeUsers: 456
};

export const mockFunds = [
  {
    id: 'f1',
    userId: '1',
    balance: 100000,
    frozen: 20000,
    totalAssets: 150000
  },
  {
    id: 'f2',
    userId: '2',
    balance: 50000,
    frozen: 10000,
    totalAssets: 75000
  }
];

export const mockPositions = [
  {
    id: 'p1',
    userId: '1',
    asset: 'SH_FUTURE',
    quantity: 10,
    averagePrice: 1000,
    currentPrice: 1050,
    profit: 500
  }
];

export const mockMarketData = {
  symbol: 'SH_FUTURE',
  price: 1050,
  change: 50,
  changePercent: 5,
  high: 1060,
  low: 1040,
  volume: 1000000
};