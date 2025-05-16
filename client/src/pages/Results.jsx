import  React, {useState} from 'react'
import {assets} from '../assets/assets'
const Results = () => {
  const [image, setImage]=useState(assets.gen)
  const [isImageLoaded, setIsImageLoaded]= useState(false)
  const [loading, setLoading]= useState(true)
  const [input, setInput]= useState('')

  const onSubmitHander = async (e)=> {
     
  }
   
  return (
    <form  onSubmit={ onSubmitHander } className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
       <div className='relative '>
        <img src={image} alt="" className='max-w-sm rounded'/>
        <span className={`absolute bottom-0 left-0 h-1 bg-purple-500 ${loading? 'w-full transition-all duration-700':'w-0'}`}/>

       </div>

       <p className={!loading? 'hidden text-white': 'text-white'}>Loading...</p>
     </div>
     {!isImageLoaded&&
     <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'> 
     <input onChange={e => setInput(e.target.value)} value={input}
     type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20'/>
     <button type='submit' className='bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white px-6 py-2 border-2 border-white rounded-full hover:scale-105 transition-all duration-700'>Generate</button>
     </div>}
     {isImageLoaded &&
     <div className=' flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full  '>
      <p onClick={()=>{setIsImageLoaded(false)}}
      className='bg-transparent text-white px-8 py-3 border-2 border-white rounded hover:scale-105 transition-all duration-700 cursor-pointer'> Generate Another</p>
      <a href={image} download className='px-10 py-3 bg-white text-[#180D33] border-2 border-white rounded hover:scale-105 transition-all duration-700 cursor-pointer'> Download</a>
     </div>}
    </form>
  )
}

export default Results