'use client';
import facebook from '@/assets/img/fb.png';
import github from '@/assets/img/github2.png';
import linkedin from '@/assets/img/linkedin.png';
import youtube from '@/assets/img/youtube.png';
import tiktok from '@/assets/img/tiktok.png';
import instagram from '@/assets/img/instagram.png';
import Shape from '@/components/Shape';
import Speech from '@/components/Speech';
import { Canvas } from '@react-three/fiber';
import { Row, Skeleton } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
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
          <span className="text-blue-800">I'm Hai Trieu!</span>
        </motion.h1>

        {/* AWARDS */}
        <motion.div variants={awardVariants} initial="initial" animate="animate" className="w-1/3">
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p variants={awardVariants} className="text-gray-300 text-sm my-4">
            Lorem ipsum dolor sit amet.
          </motion.p>
          <motion.div variants={awardVariants} className="flex gap-2">
            {[instagram, youtube, tiktok].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`alt${src}`}
                width={24}
                height={24}
                objectFit="contain"
                style={{ borderRadius: i === 2 ? 6 : 0 }}
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

      <Row className="flex  flex-col items-end w-1/2 h-full">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-3 p-4 bg-purple-800 rounded-br-md"
        >
          {[facebook, linkedin, github].map((src, i) => (
            <motion.a key={i} variants={followVariants} href="/">
              <Image key={i} src={src} alt={`alt${src}`} width={24} height={24} objectFit="contain" />
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
      </Row>

      {/* BACKGROUND 3D */}
      <Row className="absolute w-full h-full top-0 left-0 -z-10">
        <Canvas>
          <Suspense fallback={<Skeleton avatar></Skeleton>}>
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-0 right-0 left-0 mx-auto h-4/5">
          <img src="/hero.png" alt="" className="w-full h-full object-cover" />
        </div>
      </Row>
    </Row>
  );
};

export default Header;
