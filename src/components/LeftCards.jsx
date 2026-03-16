import React from 'react'
import { useTheme } from '../context/ThemeContext'

const LeftCards = ({ carddata, cardicon, cardtext, cardup, cardratio, cardlast }) => {

  const { isDark } = useTheme()

  return (

    <div className={`w-full p-5 rounded-3xl    
    ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}>

      {/* top */}
      <div className='flex justify-between items-center mb-4'>

        <h3 className='text-lg lg:text-xl'>
          {cardtext}
        </h3>

        <span className='text-3xl lg:text-4xl'>
          {cardicon}
        </span>

      </div>


      {/* number */}
      <h1 className='text-3xl lg:text-4xl font-bold mb-4'>
        {carddata}
      </h1>


      {/* bottom */}
      <div className='flex flex-wrap items-center gap-2 text-sm'>

        <span className='flex items-center text-green-600'>
          <span className='text-xl'>
            {cardup}
          </span>
          {cardratio}%
        </span>

        <p className='opacity-70 '>
          {cardlast}
        </p>

      </div>

    </div>
  )
}

export default LeftCards