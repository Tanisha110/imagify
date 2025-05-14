import React from 'react'
import {assets} from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center my-20'> 
    <h1 className='text-4xl max-w-[300px] sm:text-7xl text-white font-bold sm:max-w-[590px] mx-auto mt-10 text-center '> Turn text to <span className='text-[#8B5CF6]'>image</span>, in seconds </h1>
    <p className='text-center text-regular max-w-xl mx-auto mt-5 text-white opacity-50 '> Unleash  your creativity with AI. Turn your imagination into visual art in seconds-Just type and watch the magic happen! </p>
    <button  className='sm:text-lg w-auto mt-8 bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white px-12 py-2.5 border-2 border-white rounded-xl hover:scale-105 transition-all duration-700'>
        Generate Images 
    </button>
    <div className='flex flex-wrap justify-center gap-3 mt-16'>
    {Array(6).fill('').map((item, index) => (
    <img className='w-20 rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={assets.gen} alt="" key={index} width={70} />
  ))}
    </div>
    <p className='mt-2 text-white opacity-50'>Generated images from imagify </p>
    </div>
  )
}

export default Header