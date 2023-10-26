import React from 'react';
import { DashboardNav } from '../DashboardNav';

import styles from './layout.module.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <DashboardNav />
      {children}
    </div>
  );
}
