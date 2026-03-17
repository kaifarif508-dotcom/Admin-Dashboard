import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { TbMessage2 } from "react-icons/tb";
import Toggle from "../components/Toggle";
import { BsBasket } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { useTheme } from '../context/ThemeContext';
import { IoMdArrowRoundBack } from "react-icons/io";
import Login from './Login';
import { useUser } from '../context/UserContext';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Sidebar = ({ setLogin}) => {
const {user}= useUser()
  const { isDark } = useTheme()
  // const [login, setLogin] = useState(false)
  const [open,setOpen] = useState(false)

  return (
    <>
    
    <div className=' h-full  tsition ease-in duration-800ran'>
    {/* Mobile Menu Button */}

    <button 
      className={`lg:hidden fixed top-4 left-4 z-99  text-3xl  ${isDark ? " text-white" : " text-black"}`}
      onClick={()=>setOpen(!open) }
    >{
      open ? <IoMdArrowRoundBack />  : <HiMenu />
    }
      
    </button>
    {/* Sidebar */}
    <div
      className={`
        transition ease-in duration-500
      fixed lg:static  top-0 left-0 h-full w-64 z-1
      transform ${open ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0
      
      transition-transform duration-300
      ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}
      `}
    >

      <h1 className='text-3xl text-center pt-10'>Dashboard</h1>
       <div className="flex lg:hidden  md:hidden items-center mt-5 justify-center flex-row-reverse  gap-2 lg:gap-12">

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <MdOutlineLightMode className="text-xl" />
            <Toggle />
            <MdOutlineDarkMode className="text-xl" />
          </div>


          {/* Profile */}
          <div className="flex items-center gap-3 overflow-hidden">
            {
              user.profile ? (
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  
                  src={user.profile}
                  alt="Profile-Image"
                />

              ) : (
                <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="default-profile-image" />
              )
            }


            {/* hide name on mobile */}
            <p className="text-lg hidden sm:block">{ user.username ? user.username : "Jahson"} </p>

          </div>

        </div>


      <div className='pt-16 text-xl'>

        <ul className='flex flex-col gap-6 px-3 mb-8'>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <FaRegUserCircle className='text-2xl'/> Users
          </li>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <AiOutlineProduct className='text-2xl'/> Products
          </li>

          

          <Link to={"/Order"} className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <BsBasket className='text-2xl'/> Orders
          </Link>

        </ul>

        <ul className='flex flex-col gap-6 px-3 pt-6 border-t'>

          <li className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
            <IoSettingsOutline className='text-2xl'/> Setting
          </li>

          <li onClick={()=>{
            setLogin(true)
          }} className='flex items-center gap-4 hover:bg-[#F2F6FE] hover:text-black py-2 rounded-lg px-4 cursor-pointer'>
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