import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Describe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.2 }}
        className='text-3xl sm:text-4xl font-semibold mb-2 text-white'
      >
        Create AI images
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className='text-lg mb-2 text-white opacity-70'
      >
        Turning imagination into visuals
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className='flex flex-col gap-5 md:gap-14 md:flex-row items-center mt-10'
      >
        <motion.img
          src={assets.gen}
          alt=""
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className='w-80 xl:w-96 rounded-lg'
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1.2 }}
        >
          <h2 className='text-3xl text-white opacity-80 mb-4'>
            Introducing the AI-powered Text to Image Generator
          </h2>
          <p className='text-white opacity-40'>
            Ink2Pic is an advanced AI-powered image generation platform designed to turn your imagination into reality. Using cutting-edge machine learning models, it allows users to create high-quality visuals simply by describing them in natural language. Whether you're a designer, storyteller, marketer, or just exploring your creativity, Ink2Pic makes it easy to generate stunning and unique images—from dreamy landscapes to expressive characters and abstract art. With a user-friendly interface and lightning-fast results, you can visualize your ideas instantly and download them in just a few clicks. Unlock the power of AI and let your creativity flow without limits.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Describe;
