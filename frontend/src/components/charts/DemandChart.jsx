import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DemandChart = () => {
  const data = {
    labels: [
      "Study Rooms",
      "Conference Rooms",
      "Computers",
      "Projectors",
    ],

    datasets: [
      {
        data: [35, 25, 30, 10],

        backgroundColor: [
          "#2563eb",
          "#10b981",
          "#f59e0b",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>Resource Demand</h3>

      <Pie data={data} />
    </div>
  );
};

export default DemandChart;