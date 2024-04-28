import React from 'react'
import { BsBookmarkPlus } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='p-6 text-[20px] grid grid-cols-1 md:grid-cols-2 items-center mt-[-20px]'>
      <div>
        <h4 className='font-bold text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>Hello, I'm</h4>
        <h1 className='font-extrabold text-[45px]'>Mohit Kumar Jaiswal<br></br>
          Full stack Web<br></br>
          <span className='bg-clip-text text-transparent bg-gradient-to-r
          from-blue-500 to-purple-600'>Developer</span></h1>
        <h1 className='text-orange-500 mt-4'>Thankyou for visting..</h1>

        <div className=' mt-6 flex gap-7'>
          <button className='bg-gradient-to-r from-blue-600 to-purple-600 px-3 pb-2 py-1 rounded-full text-white hover:scale-105 transition-all duration-300 shadow-xl'>
            Resume
          </button>
          <button className='border-blue-600 px-3 pb-1 border-[1px] rounded-full hover:scale-110 transition-all duration-300 shadow-md'>Read More</button>
        </div>
      </div>
      <div>
        <img src='logo2.png' className='w-[300px] lg:w-[400px] mt-6 shadow-lg border-hidden rounded-full' />
      </div>

    </div>
  )
}

export default Hero