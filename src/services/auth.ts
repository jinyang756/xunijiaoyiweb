// 模拟认证服务，用于纯前端模板
import { useAuthStore } from '../store/authStore';

// 请求类型接口定义
export interface LoginRequest {
  username: string;
  password: string;
  verifyCode?: string;
}

export interface LoginResponse {
  token: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
    role: 'admin' | 'user';
    email?: string;
  };
}

class AuthService {
  // 用户登录
  async login(data: LoginRequest): Promise<LoginResponse> {
    console.log('用户登录:', data);
    
    // 模拟登录验证
    if (data.username && data.password) {
      // 模拟管理员登录
      if (data.username === 'admin') {
        return Promise.resolve({
          token: 'mock_admin_token_' + Date.now(),
          refreshToken: 'mock_admin_refresh_token_' + Date.now(),
          user: {
            id: '1',
            username: 'admin',
            role: 'admin',
            email: 'admin@example.com'
          }
        });
      } else {
        // 模拟普通用户登录
        return Promise.resolve({
          token: 'mock_user_token_' + Date.now(),
          refreshToken: 'mock_user_refresh_token_' + Date.now(),
          user: {
            id: '2',
            username: data.username,
            role: 'user',
            email: data.username + '@example.com'
          }
        });
      }
    } else {
      throw new Error('用户名或密码错误');
    }
  }

  // 管理员登录
  async adminLogin(data: LoginRequest): Promise<LoginResponse> {
    console.log('管理员登录:', data);
    
    // 模拟登录验证
    if (data.username === 'admin' && data.password) {
      return Promise.resolve({
        token: 'mock_admin_token_' + Date.now(),
        refreshToken: 'mock_admin_refresh_token_' + Date.now(),
        user: {
          id: '1',
          username: 'admin',
          role: 'admin',
          email: 'admin@example.com'
        }
      });
    } else {
      throw new Error('管理员用户名或密码错误');
    }
  }

  // 发送验证码
  async sendVerifyCode(username: string): Promise<void> {
    console.log('发送验证码到:', username);
    return Promise.resolve();
  }

  // 忘记密码
  async forgotPassword(email: string): Promise<void> {
    console.log('忘记密码请求:', email);
    return Promise.resolve();
  }

  // 修改密码
  async changePassword(_oldPassword: string, _newPassword: string): Promise<void> {
    console.log('修改密码');
    return Promise.resolve();
  }

  // 验证 token 是否有效
  async validateToken(): Promise<boolean> {
    console.log('验证 token');
    return Promise.resolve(true);
  }

  // 登出
  async logout(): Promise<void> {
    console.log('用户登出');
    // 清除本地状态
    useAuthStore.getState().logout();
    return Promise.resolve();
  }
}

// 导出单例
export const authService = new AuthService();