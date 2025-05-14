import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import BuyCredit from './pages/BuyCredit'
import './index.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative min-h-screen bg-[#180D33] pt-4 px-2 sm:px-10 md:px-14 lg:px-28'>

  {/* Background Circles (z-0) */}
  <div className='absolute inset-0 z-0 pointer-events-none'>
    <div className='fixed top-1/8 left-[60%] sm:left-[65%] md:left-[70%] lg:left-[75%] transform -translate-x-1/2 w-[80vw] sm:w-[40vw] md:w-[35vw] lg:w-[25vw] h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[25vw] bg-[#2A0A77] rounded-full blur-3xl opacity-[0.55]' />
    
    <div className='fixed top-[37%] left-[90%] transform -translate-x-1/2 w-[80vw] sm:w-[40vw] md:w-[35vw] lg:w-[25vw] h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[25vw] bg-[#3F1471] rounded-full blur-3xl opacity-[0.55]' />
    
    <div className='fixed top-[60%] left-[10%] transform -translate-x-1/2 w-[80vw] sm:w-[40vw] md:w-[35vw] lg:w-[25vw] h-[50vw] sm:h-[40vw] md:h-[35vw] lg:h-[25vw] bg-[#3D0878] rounded-full blur-3xl opacity-[0.55]' />
  </div>

  {/* Foreground content (Navbar + Routes) */}
  <div className='relative z-10'>
    <Navbar />
    <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/result' element={<Results />} />
      <Route path='/buy' element={<BuyCredit />} />
    </Routes>
  </div>
  <Footer></Footer>
</div>

  ) 
}

export default App 