'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import master from '@/assets/img/master.png';
import Image from 'next/image';
const Speech = ({ dict }: any) => {
  return (
    <motion.div
      className="w-1/2 flex items-end gap-2 justify-between sx:hidden xl:mt-36"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-20 bg-white text-blue-500 italic p-3 text-base rounded-[20px_20px_0px_20px] shadow-lg">
        <TypeAnimation
          sequence={[1000, dict?.common?.label?.oowayFirst, 1000, dict?.common?.label?.oowaySecond, 1000]}
          wrapper="span"
          speed={50}
          deletionSpeed={70}
          omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <div>
        <Image src={master} alt={`master`} className="w-9 h-9 rounded-lg object-cover" />
      </div>
    </motion.div>
  );
};

export default Speech;
