import React from "react";
import DatePicker from "react-datepicker";
import Toggle from "../components/Toggle";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const Nav = () => {
  const {user}= useUser()

  const { isDark } = useTheme()
  // const [dates, setDates] = useState([null, null])
  // const [startDate, endDate] = dates;

  return (

    <div className={`w-full  ${isDark ? "text-white" : "bg-[#F3F3F3] text-black"} border-b`}>

      <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10 py-4  gap-4">

        {/* LEFT */}
        <div className="flex flex-col  h-fit justify-center items-center    gap-4 lg:gap-10">

          <h1 className="text-4xl   lg:text-4xl  font-bold">Analytics</h1>


        </div>
          {/* <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDates(update)}
            placeholderText="Select date range"
            dateFormat="yyyy/MM/dd"
            className="border rounded px-2 py-1 hidden md:flex lg:flex"
          /> */}


        {/* RIGHT */}
        <div className="lg:flex md:flex hidden items-center gap-6 lg:gap-12">

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <MdOutlineLightMode className="text-xl" />
            <Toggle />
            <MdOutlineDarkMode className="text-xl" />
          </div>


          {/* Profile */}
          <div className="flex items-center gap-3 overflow-hidden">
            {
              user.profile ? (
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  
                  src={user.profile}
                  alt="Profile-Image"
                />

              ) : (
                <img className="h-10 w-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" alt="default-profile-image" />
              )
            }


            {/* hide name on mobile */}
            <p className="text-lg hidden sm:block">{ user.username ? user.username : "Jahson"} </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Nav;