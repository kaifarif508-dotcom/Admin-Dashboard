import React from 'react'
import Card from './LeftCards'
import RightCards from './RightCards'

import { MdOutlineBorderStyle } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { CiSquareCheck } from "react-icons/ci";
import { PiCurrencyDollar } from "react-icons/pi";
import { IoIosArrowRoundDown } from "react-icons/io";

import UserChart from '../components/Chart'
import { useTheme } from '../context/ThemeContext'

const Content = () => {

  const { isDark } = useTheme()

  return (

    <div className={`px-4 lg:px-6 py-8 flex flex-col  gap-6 ${isDark ? "bg-[#12121E] text-white" : "bg-[#F3F3F3] text-black"}`}>

      {/* LEFT SECTION */}
      <div className='flex-1'>

        {/* cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

          <Card
            cardtext={<h1>Orders</h1>}
            cardicon={<MdOutlineBorderStyle />}
            carddata={<h1>10</h1>}
            cardup={<IoIosArrowRoundUp />}
            cardratio={<span>8.2</span>}
          />

          <Card
            cardtext={<h1>Approved</h1>}
            cardicon={<CiSquareCheck />}
            carddata={<h1>20</h1>}
            cardup={<IoIosArrowRoundDown />}
            cardratio={<span>2.6</span>}
          />

          <Card
            cardtext={<h1>Month total</h1>}
            cardicon={<PiCurrencyDollar />}
            carddata={<h1>2</h1>}
            cardup={<IoIosArrowRoundUp />}
            cardratio={<span>10.7</span>}
          />

          <Card
            cardtext={<h1>Revenue</h1>}
            cardicon={<BsLayoutSidebarReverse />}
            carddata={<h1>16</h1>}
            cardup={<IoIosArrowRoundDown />}
            cardratio={<span>7.8</span>}
          />

        </div>

      </div>


      {/* RIGHT SECTION */}
      <div className='flex lg:flex-row   flex-col gap-5 w-full '>

        <RightCards
          righttext={<p>Users</p>}
          rightnum={<h3>4.890</h3>}
          rightChart={<UserChart backgroundColor={["#facc15", "#1f2937"]} />}
          rightone={<div className='bg-[#F2BB13] px-2 py-1 rounded-lg'></div>}
          righttwo={<div className='bg-[#F6DC62] px-2 py-1 rounded-lg'></div>}
          rightthree={<div className='bg-[#FCFAE6] px-2 py-1 rounded-lg'></div>}
          rightspanone={<span className='text-xs'>62% New</span>}
          rightspantwo={<span className='text-xs'>26% Returning</span>}
          rightspanthree={<span className='text-xs'>12% Inactive</span>}
        />

        <RightCards
          righttext={<p>Subscriptions</p>}
          rightnum={<h3>1.201</h3>}
          rightChart={<UserChart backgroundColor={["#3b82f6", "#60a5fa"]} />}
          rightone={<div className='bg-[#3F74F9] px-2 py-1 rounded-lg'></div>}
          righttwo={<div className='bg-[#83A4FE] px-2 py-1 rounded-lg'></div>}
          rightspanone={<span className='text-xs'>70% Paid</span>}
          rightspantwo={<span className='text-xs'>30% Trial</span>}
        />

      </div>

    </div>
  )
}

export default Content