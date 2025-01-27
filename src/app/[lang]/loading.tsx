'use client';
import { Skeleton } from 'antd';
import React from 'react';

export default function Loading() {
  return (
    <React.Fragment>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </React.Fragment>
  );
}
