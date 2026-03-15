import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useTheme } from "../context/ThemeContext";

const data = [
  { month: "Jan", users: 120000 },
  { month: "Feb", users: 150000 },
  { month: "Mar", users: 180000 },
  { month: "Apr", users: 240000 },
  { month: "May", users: 300000 },
  { month: "Jun", users: 280000 },
  { month: "Jul", users: 220000 },
  { month: "Aug", users: 260000 },
  { month: "Sep", users: 310000 },
  { month: "Oct", users: 350000 },
  { month: "Nov", users: 370000 },
  { month: "Dec", users: 420000 },
];

const OverallUserActivity = () => {
    const {isDark} = useTheme()
  return (
    <div className={`p-5 rounded-xl shadow-sm w-full h-75 ${isDark? "bg-[#1D1D29] text-white":"bg-[#FFFFFF] text-black"}`}>
      <h3 className="text-lg font-semibold text-white mb-4">Overall User Activity</h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          <XAxis dataKey="month" stroke="#aaa" />
          <YAxis stroke="#aaa" />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#A855F7"
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverallUserActivity;
