import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../context/ThemeContext";
const data={

  2021 : [
    { name: "Jan", sales: 20000 },
    { name: "Feb", sales: 15000 },
    { name: "Mar", sales: 29000 },
    { name: "Apr", sales: 13000 },
    { name: "May", sales: 21000 },
    { name: "Jun", sales: 24000 },
    { name: "Jul", sales: 30000 },
    { name: "Aug", sales: 22000 },
    { name: "Sep", sales: 39000 },
    { name: "Oct", sales: 31000 },
    { name: "Nov", sales: 39000 },
    { name: "Dec", sales: 40000 },
  ],
    2024 : [
    { name: "Jan", sales: 19000 },
    { name: "Feb", sales: 19000 },
    { name: "Mar", sales: 29000 },
    { name: "Apr", sales: 12000 },
    { name: "May", sales: 23000 },
    { name: "Jun", sales: 21000 },
    { name: "Jul", sales: 26000 },
    { name: "Aug", sales: 32000 },
    { name: "Sep", sales: 38000 },
    { name: "Oct", sales: 39000 },
    { name: "Nov", sales: 31000 },
    { name: "Dec", sales: 20000 },
  ],
  2022 : [
    { name: "Jan", sales: 30000 },
    { name: "Feb", sales: 21000 },
    { name: "Mar", sales: 13000 },
    { name: "Apr", sales: 19000 },
    { name: "May", sales: 21000 },
    { name: "Jun", sales: 29000 },
    { name: "Jul", sales: 20000 },
    { name: "Aug", sales: 38000 },
    { name: "Sep", sales: 35000 },
    { name: "Oct", sales: 33000 },
    { name: "Nov", sales: 31000 },
    { name: "Dec", sales: 42000 },
  ],
  2023 : [
    { name: "Jan", sales: 20000 },
    { name: "Feb", sales: 15000 },
    { name: "Mar", sales: 22000 },
    { name: "Apr", sales: 18000 },
    { name: "May", sales: 26000 },
    { name: "Jun", sales: 24000 },
    { name: "Jul", sales: 30000 },
    { name: "Aug", sales: 28000 },
    { name: "Sep", sales: 32000 },
    { name: "Oct", sales: 35000 },
    { name: "Nov", sales: 37000 },
    { name: "Dec", sales: 40000 },
  ],
}


const SalesDynamicsChart = ({year}) => {
  const {isDark} = useTheme()
  return (
    <div className={` p-5 rounded-xl shadow-lg ${isDark? "bg-[#1D1D29] text-white":"bg-[#FFFFFF] text-black"}`}>
      
      <div className="flex justify-between mb-4">
        <h2 className="text-white font-semibold">Sales dynamics</h2>
        <span className="text-gray-400 text-sm">{year}</span>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data= {data[year]} fill="#4475F9" >
          <XAxis dataKey="name" stroke="#aaa " />
          <YAxis stroke="#aaa" />
          <Tooltip />

          <Bar
            dataKey="sales"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesDynamicsChart;