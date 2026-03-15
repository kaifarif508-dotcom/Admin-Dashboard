import React, { useState } from 'react'
import SalesDynamicsChart from './SalesDynamicsChart'
import OverallUserActivity from './OverallUserActivity'
import { useTheme } from '../context/ThemeContext'

const Content2Left = () => {

  const { isDark } = useTheme()
  const [year, setYear] = useState(2021)

  return (

    <div className="w-full flex flex-col gap-5">

      {/* Sales Chart */}
      <div
        className={`w-full p-5 lg:p-6 rounded-2xl 
        ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}
      >

        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4'>

          <h1 className='text-lg lg:text-xl'>
            Sales dynamics
          </h1>

          <select
            onChange={(e) => setYear(e.target.value)}
            className={`px-3 py-2 rounded border text-sm
            ${isDark ? "bg-[#1D1D29]" : "bg-white"}`}
          >

            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>

          </select>

        </div>

        <SalesDynamicsChart year={year} />

      </div>


      {/* User Activity */}
      <div
        className={`w-full p-5 lg:p-6 rounded-2xl
        ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}
      >

        <OverallUserActivity />

      </div>

    </div>
  )
}

export default Content2Left