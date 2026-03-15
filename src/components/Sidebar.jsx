import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";
import { BsBasket } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { useTheme } from '../context/ThemeContext';

const Sidebar = () => {

  const { isDark } = useTheme()
  const [open,setOpen] = useState(false)

  return (
    <>
    
    <div className='relative h-full '>
    {/* Mobile Menu Button */}

    <button 
      className="lg:hidden fixed top-4 left-4 z-99  text-3xl"
      onClick={()=>setOpen(!open) }
    >
      <HiMenu />
    </button>
    {/* Sidebar */}
    <div
      className={`
      fixed lg:static  top-0 left-0 h-full w-64 z-1
      transform ${open ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0
      
      transition-transform duration-300
      ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}
      `}
    >

      <h1 className='text-3xl text-center pt-10'>Dashboard</h1>

      <div className='pt-16 text-xl'>

        <ul className='flex flex-col gap-6 px-3 mb-8'>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <FaRegUserCircle className='text-2xl'/> Users
          </li>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <AiOutlineProduct className='text-2xl'/> Products
          </li>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <TbMessage2 className='text-2xl'/> Messages
          </li>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <BsBasket className='text-2xl'/> Orders
          </li>

        </ul>

        <ul className='flex flex-col gap-6 px-3 pt-6 border-t'>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <IoSettingsOutline className='text-2xl'/> Setting
          </li>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <IoIosLogIn className='text-2xl'/> Login
          </li>

        </ul>

      </div>
         
    

    </div>
    </div>


    </>
  )
}

export default Sidebar