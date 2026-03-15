import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function UserChart({backgroundColor}) {
  
  const data = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor:backgroundColor, // blue and red
        borderWidth: 0,
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%", // donut effect
  };
  return (
    <div style={{ width: "150px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}