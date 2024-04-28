import React, { useState } from 'react'
import { HiMiniQueueList, HiOutlineXMark } from "react-icons/hi2";

function Header() {
  const [toggle, setToggle] = useState(false)
  const menuList = [{
    id: 1,
    name: 'Home',
  },
  {
    id: 2,
    name: 'About',
  },
  {
    id: 3,
    name: 'Skills',
  },
  {
    id: 4,
    name: 'Portfolio',
  },
  {
    id: 5,
    name: 'Contact',
  }]

  return (
    <div>
      <div className='flex p-4 items-center justify-between md:justify-start lg:justify-start'>
        <img src='logo4.png' className='w-[140px] cursor-pointer' />
        <ul className='md:flex lg:flex gap-2 ml-5 hidden'>
          {menuList.map((item) => (
            <li className='hover:bg-blue-500 hover:text-white px-4 py-1 pb-2 rounded-full cursor-pointer'>{item.name}</li>
          ))}
        </ul>
        <div className='md:hidden lg:hidden'>

          {!toggle ? < HiMiniQueueList className='text-[20px] cursor-pointer' onClick={() => setToggle(!toggle)} /> :
            <HiOutlineXMark className='text-[20px] cursor-pointer' onClick={() => setToggle(!toggle)} />}

          {toggle ? <ul className='flex flex-col gap-2 absolute ml-[-70px] items-center bg-gray-200 rounded-md p-3 mt-3'>
            {menuList.map((item) => (
              <li className='hover:bg-blue-500 hover:text-white px-4 py-1 pb-2 rounded-full cursor-pointer'>{item.name}</li>
            ))}
          </ul> : null}
        </div>
      </div>
    </div>
  )
}

export default Header