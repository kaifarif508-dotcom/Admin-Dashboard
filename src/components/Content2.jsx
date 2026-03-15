import React from 'react'
import Content2Left from './Content2Left'
import Content2Right from './Content2Right'

const Content2 = () => {

  return (

    <div className='flex flex-col lg:flex-row w-full px-4 lg:px-5 gap-5 pb-10'>

      {/* LEFT SECTION */}
      <div className='flex-1'>
        <Content2Left />
      </div>

      {/* RIGHT SECTION */}
      <div className='flex-1'>
        <Content2Right />
      </div>

    </div>

  )
}

export default Content2