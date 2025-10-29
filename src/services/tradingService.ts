import { mockMarketData, mockPositions } from '../utils/mockData';

export const tradingService = {
  // 获取市场数据
  getMarketData: async (symbol: string) => {
    console.log('获取市场数据:', symbol);
    return Promise.resolve({
      code: 200,
      data: mockMarketData,
      message: 'Success'
    });
  },
  
  // 获取交易历史
  getTradeHistory: async (params: any) => {
    console.log('获取交易历史:', params);
    return Promise.resolve({
      code: 200,
      data: [],
      message: 'Success'
    });
  },
  
  // 获取用户持仓
  getPositions: async () => {
    console.log('获取用户持仓');
    return Promise.resolve({
      code: 200,
      data: mockPositions,
      message: 'Success'
    });
  },
  
  // 下单交易
  placeTrade: async (tradeData: any) => {
    try {
      // 1. 前端验证
      if (!tradeData.symbol || !tradeData.quantity || !tradeData.type) {
        throw new Error('请填写完整的交易信息');
      }
      
      console.log('下单交易:', tradeData);
      
      // 2. 返回模拟结果
      return Promise.resolve({
        code: 200,
        data: {
          orderId: 'order_' + Date.now(),
          status: 'submitted',
          ...tradeData
        },
        message: '订单提交成功'
      });
    } catch (error) {
      console.error('交易失败:', error);
      throw error;
    }
  },
  
  // 取消订单
  cancelOrder: async (orderId: string) => {
    console.log('取消订单:', orderId);
    return Promise.resolve({
      code: 200,
      data: { orderId, status: 'cancelled' },
      message: '订单取消成功'
    });
  },
  
  // 监听交易状态更新
  subscribeToTradeUpdates: (callback: (data: any) => void) => {
    console.log('订阅交易状态更新');
    // 模拟实时更新
    const interval = setInterval(() => {
      callback({
        orderId: 'order_' + Date.now(),
        status: 'filled',
        timestamp: new Date().toISOString()
      });
    }, 5000);
    
    // 返回取消订阅函数
    return () => clearInterval(interval);
  },
  
  // 监听市场价格更新
  subscribeToMarketUpdates: (symbol: string, callback: (data: any) => void) => {
    console.log('订阅市场价格更新:', symbol);
    // 模拟实时价格更新
    const interval = setInterval(() => {
      callback({
        symbol,
        price: mockMarketData.price + (Math.random() - 0.5) * 10,
        timestamp: new Date().toISOString()
      });
    }, 3000);
    
    // 返回取消订阅函数
    return () => clearInterval(interval);
  }
};