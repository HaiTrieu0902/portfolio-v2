'use client';
import { useAppSelector } from '@/store/store';
import { Collapse, Row } from 'antd';
import React from 'react';

const HomePage = () => {
  const { dict } = useAppSelector((state) => state.common);
  const collapseItems = [
    {
      key: 'dashbroad',
      label: 'ocee',
      children: <div>HomePage</div>,
    },
  ];
  return (
    <Row className="w-100">
      <Collapse defaultActiveKey={['dashbroad']} className="w-100" items={collapseItems} />
    </Row>
  );
};

export default HomePage;
