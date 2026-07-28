import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label:
          "Predicted Bookings",

        data: [
          120,
          150,
          190,
          240,
          280,
          320,
        ],

        backgroundColor:
          "#4f46e5",
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>
        AI Booking Prediction
      </h3>

      <Bar data={data} />
    </div>
  );
};

export default AnalyticsChart;