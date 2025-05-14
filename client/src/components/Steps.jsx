import React from 'react'
import {stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-white'>How it works</h1>
       
        <p className='text-lg  mb-2 text-white opacity-70'> Transform your Ideas into stunning images</p>
      <div className='flex flex-col gap-6 p-4'>
  {stepsData.map((items, index) => (
    <div key={index} className='bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 text-white hover:scale-105 transition-all duration-700 '>
      <img src={items.icon} alt="" className='w-12 h-12' />
      <div>
        <h2 className='text-lg font-semibold mb-1'>{items.title}</h2>
        <p className='text-sm opacity-80'>{items.description}</p>
      </div>
    </div>
  ))}
</div>
    </div>

  )
}

export default Steps