import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OccupancyChart = () => {
  const data = {
    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],

    datasets: [
      {
        label: "Occupancy %",
        data: [65, 70, 82, 88, 90, 76, 60],
        borderColor: "#2563eb",
        backgroundColor: "#2563eb",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>Occupancy Trend</h3>

      <Line data={data} />
    </div>
  );
};

export default OccupancyChart;