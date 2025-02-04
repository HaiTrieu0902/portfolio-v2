'use client';
import FlagEN from '@/assets/icon/enflag.svg';
import FlagVN from '@/assets/icon/vnflag.svg';
import facebook from '@/assets/img/fb.png';
import github from '@/assets/img/github2.png';
import haitrieu from '@/assets/img/haitrieu1.png';
import instagram from '@/assets/img/instagram.png';
import flagVN from '@/assets/img/lacovietnam.png';
import linkedin from '@/assets/img/linkedin.png';
import tiktok from '@/assets/img/tiktok.png';
import youtube from '@/assets/img/youtube.png';
import Shape from '@/components/Shape';
import Speech from '@/components/Speech';
import { useAppSelector } from '@/store/store';
import { Canvas } from '@react-three/fiber';
import { Row, Skeleton, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
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
  const [isEnglish, setIsEnglish] = useState(true);
  const pathName = usePathname();
  const router = useRouter();
  const { dict, lang } = useAppSelector((state) => state.common);
  useEffect(() => {
    setIsEnglish(pathName.startsWith('/en/'));
  }, [pathName]);
  return (
    <Row className="relative h-screen overflow-hidden flex px-0 xl:px-20">
      <Row className="flex flex-col justify-between w-1/2 h-full">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-12 text-6xl text-white font-bold"
        >
          {dict?.common?.label?.hey},
          <br />
          <span className="text-blue-800"> {dict?.common?.label?.iam} Hai Trieu!</span>
        </motion.h1>

        {/* AWARDS */}
        <motion.div variants={awardVariants} initial="initial" animate="animate" className="w-1/3">
          <motion.h2 variants={awardVariants} className="font-semibold text-[16px] !m-0">
            {dict?.common?.label?.softwareEngineer}
          </motion.h2>
          <motion.p variants={awardVariants} className="text-gray-300 text-sm my-4">
            {dict?.common?.label?.titleFirst}
          </motion.p>
          <motion.div variants={awardVariants} className="flex gap-2">
            {[
              { src: instagram, url: 'https://www.instagram.com/yourprofile' },
              { src: youtube, url: 'https://www.youtube.com/yourchannel' },
              { src: tiktok, url: 'https://www.tiktok.com/@yourprofile' },
            ].map(({ src, url }, i) => (
              <motion.a key={i} variants={followVariants} href={url} target="_blank" rel="noopener noreferrer">
                <Image
                  key={i}
                  src={src}
                  alt={`alt${src}`}
                  width={24}
                  height={24}
                  objectFit="contain"
                  style={{ borderRadius: i === 2 ? 6 : 0 }}
                />
              </motion.a>
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

      <Row className="flex flex-col items-end w-1/2 h-full">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-3 p-4 bg-blue-800 rounded-br-md"
        >
          {[
            { src: facebook, url: 'https://www.facebook.com/yourprofile' },
            { src: linkedin, url: 'https://www.linkedin.com/in/yourprofile' },
            { src: github, url: 'https://github.com/yourusername' },
          ].map(({ src, url }, i) => (
            <motion.a key={i} variants={followVariants} href={url} target="_blank" rel="noopener noreferrer">
              <Image key={i} src={src} alt={`alt${src}`} width={24} height={24} objectFit="contain" />
            </motion.a>
          ))}

          <Tooltip title={dict?.common?.label?.changeLanguage} placement="left">
            <Image
              src={isEnglish ? FlagVN : FlagEN}
              alt={isEnglish ? 'Vietnamese Flag' : 'English Flag'}
              width={22}
              height={22}
              onClick={() => {
                const newLang = isEnglish ? 'vi' : 'en';
                let newPath = pathName;
                if (pathName.startsWith('/en/') || pathName.startsWith('/vi/')) {
                  newPath = `/${newLang}${pathName.substring(3)}`;
                } else {
                  newPath = `/${newLang}${pathName}`;
                }
                setIsEnglish(!isEnglish);
                router.push(newPath);
              }}
              className="cursor-pointer"
            />
          </Tooltip>
        </motion.div>

        {/* BUBBLE */}
        <Speech dict={dict} />

        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className=" flex flex-col items-center text-center text-gray-300 font-medium gap-2 xl:mt-40"
        >
          <Image src={flagVN} alt={`veitnam`} width={120} height={120} objectFit="contain" />
          {dict?.common?.label?.vietnam}
        </motion.div>
      </Row>
      {/* BACKGROUND 3D */}
      <Row className="absolute w-full h-full top-0 left-0 -z-10">
        <Canvas>
          <Suspense fallback={<Skeleton avatar></Skeleton>}>
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-0 right-0 left-0 mx-auto h-full ">
          <Image src={haitrieu} alt={`haitrieu`} className="w-full h-full object-contain" />
        </div>
      </Row>
    </Row>
  );
};

export default Header;
