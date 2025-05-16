import React, { useContext } from 'react';
import { plans } from '../assets/assets';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const BuyCredit = () => {
  const { user } = useContext(AppContext);

  return (
    <div className='flex flex-col text-center min-h-[75vh] items-center pt-14 mb-10'>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className='text-3xl sm:text-4xl font-semibold mb-2 text-white'
      >
        Choose your plans
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
        className='text-lg mb-15 text-white opacity-70'
      >
        Join us by selecting the best fit for you
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-left gap-6">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
            className="flex flex-col items-center drop-shadow-sm text-white py-12 px-9 rounded-2xl border border-white/30 backdrop-blur-md bg-white/5 cursor-pointer"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src={assets.logo} alt="Plan Logo" width={40} className="mb-4" />
            <p className="text-3xl font-bold">{item.id}</p>
            <p className="text-md text-gray-300 opacity-50 mb-4 px-2">{item.desc}</p>
            <p className="text-4xl font-regular text-white mb-6">
              ₹{item.price}
              <span className="text-sm font-normal text-gray-300"> / {item.credits} credits</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 w-full bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white px-6 py-2 text-xl border border-white rounded-xl transition duration-300"
            >
              {user ? 'Upgrade' : 'Buy now'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
