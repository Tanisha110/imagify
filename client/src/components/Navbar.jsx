import React ,{useContext}from 'react';
import {Link,useNavigate} from 'react-router-dom';
import {assets} from '../assets/assets';
import { AppContext } from '../context/AppContext';
const Navbar = () => {

  const navigate = useNavigate();
  const {user}=useContext(AppContext)
return (
 <div className='p-2 z-10 flex items-center justify-between py-4  border-b border-white'>
  <Link to='/'>
    <div className='flex items-center'>
      <img src={assets.logo} alt=' ' className='w-10 sm:w-12 lg:w-15' />
      <h1 className='text-[#ffffff] font-bold text-3xl ml-2'>Ink2Pic</h1>
    </div>
  </Link>
 
  <div>
    {user? 
    <div className='flex items-center gap-2 sm:gap-3'>
     <button  onClick={() => {
    console.log("Clicked");
    navigate('/buy');
  }} className='flex items-center gap-2 bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white px-6 py-2 border-2 border-white rounded-full hover:scale-105 transition-all duration-700'>
      <img className='w-5' src={assets.creditstar} alt="" />
    <p className=' text-xs sm:text-sm font-regular'>Credits Left : 50</p>
     </button>
     <p className='px-6 py-2 bg-white text-[#180D33] border-2 border-white rounded-full'>Hi, Tanisha</p>
     <div className='relative group bg-white text-[#180D33] border-2 border-white rounded-full'>
       <img src={assets.profile} className='w-10 drop-shadow' alt="" />
       <div className=' absolute hidden group-hover:block top-0 right-0 text-white rounded pt-12 '>
        <ul>
          <li className='px-6 py-2 bg-white text-[#180D33] border-2 border-white rounded'>Logout</li>
        </ul>
       </div>
     </div>
    </div>
    :<div className='flex items-center gap-2 sm:gap-5'>
      <button
  onClick={() => {
    console.log("Clicked");
    navigate('/buy');
  }}
  className='px-6 py-2 bg-white text-[#180D33] border-2 border-white rounded hover:scale-105 transition-all duration-700'
>
  Pricing
</button>

     <button className='bg-gradient-to-r from-[#180D33] to-[#5D29DF] text-white px-6 py-2 border-2 border-white rounded hover:scale-105 transition-all duration-700'>
  Sign In
</button>

    </div> 
    }
    
  </div>
</div>


)

}

export default Navbar 