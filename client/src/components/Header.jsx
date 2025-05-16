import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { user, setShowLogin } = useContext(AppContext);

  const onClickHandler = () => {
    if (user) {
      navigate('/result');
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col justify-center items-center text-center my-20'
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.8 }}
        className='text-4xl max-w-[300px] sm:text-7xl text-white font-bold sm:max-w-[590px] mx-auto mt-10 text-center'
      >
        Turn text to <span className='text-[#8B5CF6]'>image</span>, in seconds
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        className='text-center text-regular max-w-xl mx-auto mt-5 text-white opacity-50'
      >
        Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type and watch the magic happen!
      </motion.p>

      <motion.button
        onClick={onClickHandler}
        type="button"
        whileHover={{ scale: 1.05, transition: { type: 'tween', duration: 0.2 } }}
        whileTap={{ scale: 0.92, transition: { type: 'tween', duration: 0.12 } }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.8 },
          opacity: { delay: 1.8, duration: 1.2 },
        }}
        className='sm:text-lg w-auto mt-8 bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white px-12 py-2.5 border-2 border-white rounded-xl'
      >
        Generate Images
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className='flex flex-wrap justify-center gap-3 mt-16'
      >
        {Array(6).fill('').map((item, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2.6 + index * 0.2, duration: 0.6 }}
            className='w-20 rounded transition-all duration-300 cursor-pointer max-sm:w-10'
            src={assets.gen}
            alt=""
            width={70}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 4.2, duration: 1.2 }}
        className='mt-2 text-white opacity-50'
      >
        Generated images from Ink2Pic
      </motion.p>
    </motion.div>
  );
};

export default Header;
