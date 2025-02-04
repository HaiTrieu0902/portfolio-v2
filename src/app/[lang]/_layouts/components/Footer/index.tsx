import { Row } from 'antd';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <Row className="d-flex justify-content-center align-content-center fw-bold my-2">
      <Link href={'https://www.raffles.com.vn/services.html'} target="_blank">
        trieu bui hai
      </Link>
    </Row>
  );
};

export default Footer;
