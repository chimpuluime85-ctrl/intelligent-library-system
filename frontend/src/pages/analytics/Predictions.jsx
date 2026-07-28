import {
  useState,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  predictOccupancy,
} from "../../services/analyticsService";

const Predictions = () => {
  const [prediction,
    setPrediction] =
    useState(null);

  const [formData,
    setFormData] =
    useState({
      day_of_week: 5,
      hour: 14,
      total_bookings: 28,
    });

  const handlePredict =
    async () => {
      try {
        const response =
          await await predictOccupancy(
            formData
          );

        setPrediction(
          response.predicted_occupancy
        );
      } catch (error) {
        console.log(error);
      }
    };

  return (
    <DashboardLayout>

      <h1>
        Occupancy Prediction
      </h1>

      <br />

      <div className="booking-form">

        <input
          type="number"
          placeholder="Day"
          value={
            formData.day_of_week
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              day_of_week:
                Number(
                  e.target.value
                ),
            })
          }
        />

        <input
          type="number"
          placeholder="Hour"
          value={
            formData.hour
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              hour:
                Number(
                  e.target.value
                ),
            })
          }
        />

        <input
          type="number"
          placeholder="Bookings"
          value={
            formData.total_bookings
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              total_bookings:
                Number(
                  e.target.value
                ),
            })
          }
        />

        <button
          onClick={
            handlePredict
          }
        >
          Predict Occupancy
        </button>

      </div>

      <br />

      {prediction && (
        <div className="stat-card">

          <h2>
            Predicted Occupancy
          </h2>

          <h1>
            {prediction}%
          </h1>

        </div>
      )}

    </DashboardLayout>
  );
};

export default Predictions;