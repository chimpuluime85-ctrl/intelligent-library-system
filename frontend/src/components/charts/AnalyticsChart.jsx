import { useEffect, useState } from "react";

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

import { predictOccupancy } from "../../services/analyticsService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsChart = ({ totalBookings }) => {
  const [prediction, setPrediction] = useState(0);

  useEffect(() => {
    loadPrediction();
  }, [totalBookings]);

  const loadPrediction = async () => {
    try {
      const result = await predictOccupancy({
        day_of_week: new Date().getDay(),
        hour: new Date().getHours(),
        total_bookings: totalBookings || 0,
      });

      setPrediction(
        Math.round(result.predicted_occupancy || 0)
      );
    } catch (err) {
      console.error("Prediction Error:", err);
    }
  };

  const data = {
    labels: ["AI Prediction"],

    datasets: [
      {
        label: "Predicted Occupancy (%)",
        data: [prediction],
        backgroundColor: "#4f46e5",
      },
    ],
  };

  return (
    <div className="chart-card">
      <h3>AI Occupancy Prediction</h3>

      <Bar
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: true,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
            },
          },
        }}
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <h2>{prediction}%</h2>

        <p>
          Predicted Library Occupancy Based on Current
          Booking Activity
        </p>
      </div>
    </div>
  );
};

export default AnalyticsChart;