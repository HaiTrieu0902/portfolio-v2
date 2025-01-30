'use client';
import Shape from '@/components/Shape';
import Speech from '@/components/Speech';
import { Canvas } from '@react-three/fiber';
import { Row, Skeleton } from 'antd';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

const awardVariants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const followVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const Header = () => {
  return (
    <Row className="relative h-screen overflow-hidden flex">
      <Row className="flex flex-col justify-between w-1/2 h-full">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 text-6xl text-pink-400"
        >
          Hey There,
          <br />
          <span className="text-white">I'm Robert!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div variants={awardVariants} initial="initial" animate="animate" className="w-1/3">
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariants} className="text-gray-300 text-sm my-4">
            Lorem ipsum dolor sit amet.
          </motion.p>
          <motion.div variants={awardVariants} className="flex gap-2">
            {['/award1.png', '/award2.png', '/award3.png'].map((src, i) => (
              <motion.img
                key={i}
                variants={awardVariants}
                src={src}
                alt=""
                className="w-9 h-9 p-2 bg-white rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          href="#services"
          className="mb-12"
        >
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </Row>

      <div className="flex flex-col items-end w-1/2 h-full">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-3 p-4 bg-purple-800 rounded-br-md"
        >
          {['/instagram.png', '/facebook.png', '/youtube.png'].map((src, i) => (
            <motion.a key={i} variants={followVariants} href="/">
              <img src={src} alt="" className="w-5 h-5" />
            </motion.a>
          ))}
          <motion.div
            variants={followVariants}
            className="w-5 h-5 bg-red-600 text-xs rotate-90 p-2 flex items-center rounded-br-md"
          >
            FOLLOW ME
          </motion.div>
        </motion.div>

        {/* BUBBLE */}
        <Speech />

        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="w-3/5 flex flex-col items-center text-center text-gray-300 gap-2"
        >
          <img src="/certificate.png" alt="" className="w-16 h-16" />
          LMA CERTIFIED PROFESSIONAL UI DESIGNER
        </motion.div>

        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="mb-12"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <text className="text-lg tracking-widest">
                <textPath href="#innerCirclePath">Hire Now • Contact Me •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center w-20 h-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>

      {/* BACKGROUND 3D */}
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <Canvas>
          <Suspense fallback={<Skeleton avatar></Skeleton>}>
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-0 right-0 left-0 mx-auto h-4/5">
          <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </Row>
  );
};

export default Header;
