import React from 'react'
import { HiOutlineRefresh } from "react-icons/hi"
import { PiInvoiceFill } from "react-icons/pi"
import { HiOutlineReceiptRefund } from "react-icons/hi2"

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts"

import { useTheme } from '../context/ThemeContext'

const Content2Right = () => {

  const { isDark } = useTheme()

  const data = [{ name: "progress", value: 70 ,fill: "#BA49E6"},
    { name: "end", value: 30 ,fill: "#E0CAF0"}
  ]
   const data2 = [{ name: "progress", value: 70 ,fill: "#BBD1B9"},
    { name: "end", value: 30 ,fill: "#52AC44"}
  ]

  return (

    <div className="w-full flex flex-col gap-4">

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* CARD 1 */}
        <div className={`w-full p-5 rounded-2xl 
        ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}>

          <div className='flex justify-between items-center'>

            <PiInvoiceFill className='text-3xl' />

            <ResponsiveContainer width={48} height={48}>
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={data}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  fill="#E4C9F0"
                />
              </RadialBarChart>
            </ResponsiveContainer>

          </div>

          <p className='text-sm mt-4 opacity-70'>Paid Invoices</p>

          <h2 className='text-2xl lg:text-2xl font-bold py-2'>
            $134256.34
          </h2>

          <span className='text-xs opacity-70'>
            Current Financial Year
          </span>

        </div>


        {/* CARD 2 */}
        <div className={`w-full p-5 rounded-2xl 
        ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}>

          <div className='flex justify-between items-center'>

            <HiOutlineReceiptRefund className='text-3xl' />

            <ResponsiveContainer width={48} height={48}>
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={data2}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  fill="#56B537"
                
                />
              </RadialBarChart>
            </ResponsiveContainer>

          </div>

          <p className='text-sm mt-4 opacity-70'>Fund received</p>

          <h2 className='text-xl lg:text-2xl font-bold py-2'>
            $150256.34
          </h2>

          <span className='text-xs opacity-70'>
            Current Financial Year
          </span>

        </div>

      </div>


      {/* TABLE SECTION */}
      <div className={`w-full p-5 rounded-2xl 
      ${isDark ? "bg-[#1D1D29] text-white" : "bg-white text-black"}`}>

        <div className='flex justify-between items-center mb-4'>
          <h1 className='text-lg lg:text-xl'>Customer Order</h1>
          <HiOutlineRefresh />
        </div>

        {/* table wrapper */}
        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>
              <tr className="text-left opacity-70">
                <th className="py-2">Profile</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-t ">
                <td className="py-2 flex items-center gap-2">
                  <img className="h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1627213286464-eb0576fc3742"
                  />
                  Press
                </td>
                <td>London</td>
                <td>22.8.2022</td>
                <td>Delivered</td>
                <td>$920</td>
              </tr>

              <tr className="border-t">
                <td className="py-2 flex items-center gap-2">
                  <img className="h-8 w-8 rounded-full object-cover"
                    src="https://images.unsplash.com/photo-1626921648739-f83465f47348"
                  />
                  Alex
                </td>
                <td>Man City</td>
                <td>13.2.2023</td>
                <td>Delivered</td>
                <td>$729</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  )
}

export default Content2Right