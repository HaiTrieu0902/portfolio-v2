'use client';
import { useAppSelector } from '@/store/store';
import { Row } from 'antd';
import ServicePage from './_components/service';

const HomePage = () => {
  const { dict } = useAppSelector((state) => state.common);

  return (
    <Row className="w-100">
      <ServicePage />
    </Row>
  );
};

export default HomePage;
