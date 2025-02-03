/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { Skeleton } from 'antd';
import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import('../components/Header'));
const Footer = lazy(() => import('../components/Footer'));

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container">
      <Suspense fallback={<Skeleton active />}>
        <Header />
      </Suspense>
      <div className="flex-grow py-4 container mx-auto">{children}</div>
      <Suspense fallback={<Skeleton active />}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default MainLayout;
