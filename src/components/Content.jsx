import React, { useState } from 'react'
import Card from './LeftCards'
import RightCards from './RightCards'

import { MdOutlineBorderStyle } from "react-icons/md";
import { IoIosArrowRoundUp } from "react-icons/io";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { CiSquareCheck } from "react-icons/ci";
import DatePicker from "react-datepicker";
import { PiCurrencyDollar } from "react-icons/pi";
import { IoIosArrowRoundDown } from "react-icons/io";

import UserChart from '../components/Chart'
import { useTheme } from '../context/ThemeContext'
import Login from './Login';

const Content = ({setLogin, login}) => {

  const { isDark } = useTheme()
   const [dates, setDates] = useState([null, null])
    const [startDate, endDate] = dates;


  return (

    <div className={`px-4 lg:px-6 py-8 flex flex-col  gap-6 ${isDark ? "bg-[#12121E] text-white" : "bg-[#F3F3F3] text-black"}`}>

<div className='flex justify-end items-center'>

   { <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDates(update)}
            placeholderText="Select date range"
            dateFormat="yyyy/MM/dd"
            className=" border border-gray-500 rounded px-2 py-1  focus:outline-none "
          /> }
</div>
      {/* LEFT SECTION */}
      <div className='flex-1'>

        {/* cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>

          <Card
            cardtext={'Orders'}
            cardicon={<MdOutlineBorderStyle />}
            carddata={10}
            cardup={<IoIosArrowRoundUp />}
            cardratio={8.2}
            cardlast={'since last month'}
          />

          <Card
            cardtext={'Approved'}
            cardicon={<CiSquareCheck />}
            carddata={20}
            cardup={<IoIosArrowRoundDown />}
            cardratio={2.6}
             cardlast={'since last month'}
          />

          <Card
            cardtext={'Month total'}
            cardicon={<PiCurrencyDollar />}
            carddata={2}
            cardup={<IoIosArrowRoundUp />}
            cardratio={10.7}
             cardlast={'since last month'}
          />

          <Card
            cardtext={'Revenue'}
            cardicon={<BsLayoutSidebarReverse />}
            carddata={16}
            cardup={<IoIosArrowRoundDown />}
            cardratio={7.8}
             cardlast={'since last month'}
          />

        </div>

      </div>
{
  login && (
<Login setLogin={setLogin}/>

  )
}
      {/* RIGHT SECTION */}
      <div className='flex lg:flex-row   flex-col gap-5 w-full '>

        <RightCards
          righttext={'Users'}
          rightnum={4.890}
          rightChart={<UserChart backgroundColor={["#facc15", "#1f2937"]} />}
          rightone={<div className='bg-[#F2BB13] px-2 py-1 rounded-lg'></div>}
          righttwo={<div className='bg-[#F6DC62] px-2 py-1 rounded-lg'></div>}
          rightthree={<div className='bg-[#FCFAE6] px-2 py-1 rounded-lg'></div>}
          rightspanone={<span className='text-xs'>62% New</span>}
          rightspantwo={<span className='text-xs'>26% Returning</span>}
          rightspanthree={<span className='text-xs'>12% Inactive</span>}
        />

        <RightCards
          righttext={'Subscription'}
          rightnum={1.201}
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