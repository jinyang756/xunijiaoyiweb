import axios from 'axios';

// 创建一个模拟API客户端，用于纯前端模板
const createMockApiClient = () => {
  return {
    get: async (url, config) => {
      console.log('GET request to:', url, config);
      // 返回模拟数据
      return Promise.resolve({
        code: 200,
        data: {},
        message: 'Success'
      });
    },
    post: async (url, data, config) => {
      console.log('POST request to:', url, data, config);
      // 返回模拟数据
      return Promise.resolve({
        code: 200,
        data: {},
        message: 'Success'
      });
    },
    put: async (url, data, config) => {
      console.log('PUT request to:', url, data, config);
      // 返回模拟数据
      return Promise.resolve({
        code: 200,
        data: {},
        message: 'Success'
      });
    },
    delete: async (url, config) => {
      console.log('DELETE request to:', url, config);
      // 返回模拟数据
      return Promise.resolve({
        code: 200,
        data: {},
        message: 'Success'
      });
    }
  };
};

const apiClient = createMockApiClient();

export default apiClient;