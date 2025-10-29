import { mockUsers, mockTrades, mockSystemStats, mockFunds } from '../utils/mockData';

export const adminApi = {
  // 用户管理
  getUsers: async (params: any) => {
    console.log('获取用户列表:', params);
    return Promise.resolve({
      code: 200,
      data: mockUsers,
      message: 'Success'
    });
  },
  createUser: async (userData: any) => {
    console.log('创建用户:', userData);
    return Promise.resolve({
      code: 200,
      data: { ...userData, id: Date.now().toString() },
      message: 'Success'
    });
  },
  updateUser: async (id: string, userData: any) => {
    console.log('更新用户:', id, userData);
    return Promise.resolve({
      code: 200,
      data: { id, ...userData },
      message: 'Success'
    });
  },
  deleteUser: async (id: string) => {
    console.log('删除用户:', id);
    return Promise.resolve({
      code: 200,
      data: null,
      message: 'Success'
    });
  },
  
  // 交易管理
  getTrades: async (params: any) => {
    console.log('获取交易列表:', params);
    return Promise.resolve({
      code: 200,
      data: mockTrades,
      message: 'Success'
    });
  },
  updateTradeStatus: async (id: string, status: string) => {
    console.log('更新交易状态:', id, status);
    return Promise.resolve({
      code: 200,
      data: { id, status },
      message: 'Success'
    });
  },
  
  // 系统统计
  getSystemStats: async () => {
    console.log('获取系统统计');
    return Promise.resolve({
      code: 200,
      data: mockSystemStats,
      message: 'Success'
    });
  },
  
  // 资金管理
  getFunds: async (params: any) => {
    console.log('获取资金列表:', params);
    return Promise.resolve({
      code: 200,
      data: mockFunds,
      message: 'Success'
    });
  },
  adjustFunds: async (userId: string, amount: number, reason: string) => {
    console.log('调整资金:', userId, amount, reason);
    return Promise.resolve({
      code: 200,
      data: { userId, amount, reason },
      message: 'Success'
    });
  }
};