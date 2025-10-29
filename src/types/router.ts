import { ReactNode } from 'react';

export interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'user' | 'admin';
}

export interface GuestRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
}