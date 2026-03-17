import React from "react";
import { useTheme } from "../context/ThemeContext";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Order = () => {
    const {isDark} = useTheme()
  return (
    <div className={`px-4 sm:px-8 h-screen lg:px-12 py-8 ${isDark ? "bg-slate-950 text-white " : "bg-gray-100 text-gray-600"}`}>
        <Link to={"/"}><IoMdArrowRoundBack className={`${isDark ? "text-white":"text-black"} text-3xl mb-5`}/></Link>
      <div className="overflow-x-auto rounded-lg border border-gray-300">
        <table className="min-w-150 w-full text-sm">
          
          {/* HEADER */}
          <thead className={`border-t ${isDark ? "bg-slate-700 text-white" : "bg-gray-100 text-black"}`}>
            <tr>
              <th className="py-3 px-4 text-left">Profile</th>
              <th className="px-4 text-left">Address</th>
              <th className="px-4 text-left">Date</th>
              <th className="px-4 text-left">Status</th>
              <th className="px-4 text-left">Price</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-gray-700">
            
            {/* ROW */}
            <tr className={`border-t ${isDark ? "hover:bg-gray-50/20 text-white" : "bg-gray-100 text-gray-600"}`}>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1627213286464-eb0576fc3742"
                />
                Press
              </td>
              <td className="px-4">London</td>
              <td className="px-4">22.8.2022</td>
              <td className="px-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Delivered
                </span>
              </td>
              <td className="px-4 font-medium">$920</td>
            </tr>

            <tr className={`border-t ${isDark ? "hover:bg-gray-50/20 text-white" : "bg-gray-100 text-gray-600"}`}>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1626921648739-f83465f47348"
                />
                Alex
              </td>
              <td className="px-4">Man City</td>
              <td className="px-4">13.2.2023</td>
              <td className="px-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                  Delivered
                </span>
              </td>
              <td className="px-4 font-medium">$729</td>
            </tr>

            <tr className={`border-t ${isDark ? "hover:bg-gray-50/20 text-white" : "bg-gray-100 text-gray-600"}`}>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                />
                Michael
              </td>
              <td className="px-4">United State</td>
              <td className="px-4">11.8.2022</td>
              <td className="px-4">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                  Pending
                </span>
              </td>
              <td className="px-4 font-medium">$369</td>
            </tr>

            <tr className={`border-t ${isDark ? "hover:bg-gray-50/20 text-white" : "bg-gray-100 text-gray-600"}`}>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1519456264917-42d0aa2e0625"
                />
                Engelsen
              </td>
              <td className="px-4">Germany</td>
              <td className="px-4">14.3.2021</td>
              <td className="px-4">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">
                  Cancelled
                </span>
              </td>
              <td className="px-4 font-medium">$925</td>
            </tr>

            <tr className={`border-t ${isDark ? "hover:bg-gray-50/20 text-white" : "bg-gray-100 text-gray-600"}`}>
              <td className="py-3 px-4 flex items-center gap-3">
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://plus.unsplash.com/premium_photo-1677363682086-c8493a6dae52"
                />
                Yunus
              </td>
              <td className="px-4">UAE</td>
              <td className="px-4">29.5.2023</td>
              <td className="px-4">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-xs">
                  Pending
                </span>
              </td>
              <td className="px-4 font-medium">$550</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;