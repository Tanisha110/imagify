import React from 'react'
import {assets} from '../assets/assets'

const describe = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'> 
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-white'> Create AI images</h1>
        <p className='text-lg  mb-2 text-white opacity-70'>Turning imagination into visuals</p>
        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center mt-10'>
          <img src={assets.gen} alt="" className='w-80 xl:w-96 rounded-lg'/>
          <div>
            <h2 className='text-3xl text-white opacity-80 mb-4'>Introducing the AI-powered Text to Image Generator</h2>
            <p className='text-white opacity-40'>Ink2Pic is an advanced AI-powered image generation platform designed to turn your imagination into reality. Using cutting-edge machine learning models, it allows users to create high-quality visuals simply by describing them in natural language. Whether you're a designer, storyteller, marketer, or just exploring your creativity, Ink2Pic makes it easy to generate stunning and unique images—from dreamy landscapes to expressive characters and abstract art. With a user-friendly interface and lightning-fast results, you can visualize your ideas instantly and download them in just a few clicks. Unlock the power of AI and let your creativity flow without limits.</p>
          </div>
        </div>
    </div>
  )
}

export default describe