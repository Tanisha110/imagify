import React from 'react';
import { stepsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className='flex flex-col justify-center items-center'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 1 }}
        className='text-3xl sm:text-4xl font-semibold mb-2 text-white'
      >
        How it works
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className='text-lg mb-2 text-white opacity-70'
      >
        Transform your Ideas into stunning images
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className='flex flex-col gap-6 p-4'
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.15, duration: 0.8 }}
            className='bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 text-white'
          >
            <img src={item.icon} alt="" className='w-12 h-12' />
            <div>
              <h2 className='text-lg font-semibold mb-1'>{item.title}</h2>
              <p className='text-sm opacity-80'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Steps;

