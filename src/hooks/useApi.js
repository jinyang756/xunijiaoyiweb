import useSWR from 'swr';
import apiClient from '../services/api';

// SWR fetcher
const fetcher = (url) => apiClient.get(url);

// 获取推荐基金列表
export const useRecommendedFunds = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/fund', fetcher);
  
  return {
    funds: data || [],
    isLoading,
    isError: error,
    mutate
  };
};

// 获取基金列表
export const useFundList = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/funds', fetcher);
  
  return {
    data: data || [],
    isLoading,
    isError: error,
    mutate
  };
};

// 获取基金详情
export const useFundDetail = (fundId) => {
  const { data, error, isLoading, mutate } = useSWR(fundId ? `/api/funds/${fundId}/detail` : null, fetcher);
  
  return {
    data: data || {},
    isLoading,
    isError: error,
    mutate
  };
};

// 获取基金净值历史
export const useFundNavHistory = (fundId) => {
  const { data, error, isLoading, mutate } = useSWR(fundId ? `/api/funds/${fundId}/nav-history` : null, fetcher);
  
  return {
    data: data || [],
    isLoading,
    isError: error,
    mutate
  };
};

// 获取基金市场观点
export const useFundInsights = (fundId) => {
  const { data, error, isLoading, mutate } = useSWR(fundId ? `/api/funds/${fundId}/insights` : null, fetcher);
  
  return {
    data: data || [],
    isLoading,
    isError: error,
    mutate
  };
};

// 获取市场资产列表
export const useMarketAssets = (type) => {
  const { data, error, isLoading, mutate } = useSWR(
    type ? `/api/market/list?type=${type}` : '/api/market/list', 
    fetcher
  );
  
  return {
    assets: data || [],
    isLoading,
    isError: error,
    mutate
  };
};

// 获取当前持仓
export const useUserPositions = (userId) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/trade/positions/${userId}` : null, 
    fetcher
  );
  
  return {
    positions: data || [],
    isLoading,
    isError: error,
    mutate
  };
};

// 获取用户信息
export const useUserProfile = (userId) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/user/profile/${userId}` : null, 
    fetcher
  );
  
  return {
    user: data || {},
    isLoading,
    isError: error,
    mutate
  };
};

// 获取用户收藏资产
export const useUserFavorites = (userId) => {
  const { data, error, isLoading, mutate } = useSWR(
    userId ? `/api/user/favorites/${userId}` : null, 
    fetcher
  );
  
  return {
    favorites: data || {},
    isLoading,
    isError: error,
    mutate
  };
};