import React from 'react'
import { useTheme } from '../context/ThemeContext'

const RightCards = ({
  righttext,
  rightnum,
  rightChart,
  rightone,
  righttwo,
  rightthree,
  rightspanone,
  rightspantwo,
  rightspanthree
}) => {

  const { isDark } = useTheme()

  return (

    <div className={`w-full p-5 rounded-3xl 
    ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}>

      <p className='text-lg lg:text-xl'>{righttext}</p>

      <h3 className='text-2xl lg:text-4xl font-bold py-2'>
        {rightnum}
      </h3>

      <span className='text-sm opacity-70'>
        since last month
      </span>


      {/* CONTENT */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-6 mt-6'>

        {/* LEFT INFO */}
        <div className='flex flex-col gap-3'>

          <div className='flex items-center gap-2'>
            {rightone}
            {rightspanone}
          </div>

          <div className='flex items-center gap-2'>
            {righttwo}
            {rightspantwo}
          </div>

          {rightthree && (
            <div className='flex items-center gap-2'>
              {rightthree}
              {rightspanthree}
            </div>
          )}

        </div>

        {/* CHART */}
        <div className='flex justify-center items-center'>
          {rightChart}
        </div>

      </div>

    </div>
  )
}

export default RightCards