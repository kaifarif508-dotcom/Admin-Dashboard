import React from 'react'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import Content from '../components/Content'
import Content2 from '../components/Content2'
import { useTheme } from '../context/ThemeContext'

const Dashboard = () => {
  const{isDark}=useTheme()
  return (
    <div className={`flex bg-[#12121E] h-full w-full text-white ${isDark?"bg-[#1D1D29] text-white":"bg-[#F3F3F3] text-black"} `}>
      <div>

    <Sidebar/>
      </div>
      <div className='w-full h-fit '>
        <Nav/>
  <Content/>
  <div >

        <Content2/>
  </div>
      </div>

      
    </div>
  )
}

export default Dashboard
