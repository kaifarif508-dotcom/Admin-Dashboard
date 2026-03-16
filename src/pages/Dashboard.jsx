import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
import Content from '../components/Content'
import Content2 from '../components/Content2'
import { useTheme } from '../context/ThemeContext'

const Dashboard = () => {
  const{isDark}=useTheme()
  const [login, setLogin] = useState(false)
  return (
    <div className={`flex bg-[#12121E] h-full w-full text-white ${isDark?"bg-[#1D1D29] text-white":"bg-[#F3F3F3] text-black"} `}>
      <div>

    <Sidebar setLogin={setLogin} login={login}/>
      </div>
      <div className='w-full h-fit '>
        <Nav/>
  <Content setLogin={setLogin} login={login}/>
  <div >

        <Content2/>
  </div>
      </div>

      
    </div>
  )
}

export default Dashboard
