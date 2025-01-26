'use client';
import { useAppSelector } from '@/store/store';
import { Collapse, Row } from 'antd';
import React from 'react';

const DashbroadPage = () => {
  const { dict } = useAppSelector((state) => state.common);
  return (
    <Row className="w-100">
      <Collapse defaultActiveKey={'dashbroad'} className="w-100">
        <Collapse.Panel header={dict?.dashboard?.title?.dashboard} key="dashbroad">
          <div>DashbroadPage</div>
        </Collapse.Panel>
      </Collapse>
    </Row>
  );
};

export default DashbroadPage;
