import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import ComputerModelContainer from './computer/ComputerModelContainer';
import ConsoleModelContainer from './console/ConsoleModelContainer';
import Counter from './Counter';
import MugModelContainer from './mug/MugModelContainer';
import { Row, Typography } from 'antd';
import { useAppSelector } from '@/store/store';
import { ApiTwoTone, AppstoreTwoTone, VideoCameraTwoTone } from '@ant-design/icons';
const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const ServicePage = () => {
  const { dict } = useAppSelector((state) => state.common);
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { margin: '-200px' });

  const services = [
    {
      id: 1,
      img: <AppstoreTwoTone className="text-xl" />,
      title: dict?.common?.service?.frontend,
      counter: 5,
    },
    {
      id: 2,
      img: <ApiTwoTone className="text-xl" />,
      title: dict?.common?.service?.backend,
      counter: 3,
    },
    {
      id: 3,
      img: <VideoCameraTwoTone className="text-xl" />,
      title: dict?.common?.service?.socialMedia,
      counter: 1,
    },
  ];

  return (
    <Row ref={ref} className="flex h-full overflow-hidden w-full">
      <Row className="w-1/2 flex flex-col justify-center">
        <motion.h1
          variants={textVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="text-6xl lg:text-7xl font-bold mb-6"
        >
          {dict?.common?.label?.service}
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInView ? 'animate' : 'initial'}
          className="flex flex-col gap-6 mt-2"
        >
          {services.map((service, index) => (
            <motion.div
              variants={listVariants}
              key={service.id}
              className={`flex items-center gap-4 p-6 w-1/2 rounded-xl cursor-pointer bg-opacity-80  ${
                index === 0 ? 'bg-red-500' : index === 1 ? 'bg-green-700' : 'bg-yellow-700'
              }`}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <Row className="w-12 h-12 flex items-center justify-center rounded-full bg-white ">{service.img}</Row>
              <Row>
                <h2 className="text-lg font-medium w-full">{service.title}</h2>
                <h3 className="text-sm font-normal">
                  {service.counter} {dict?.common?.service?.project}
                </h3>
              </Row>
            </motion.div>
          ))}
        </motion.div>
      </Row>
      {/* Right Section */}
      <Row className="w-1/2 flex justify-center">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </Row>
    </Row>
  );
};

export default ServicePage;
