from flask import Flask
import joblib
import os

app = Flask(__name__)

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

occupancy_model_path = os.path.join(
    BASE_DIR,
    "models",
    "occupancy_model.pkl"
)

occupancy_model = joblib.load(
    occupancy_model_path
)

@app.route("/")
def home():
    return {
        "success": True
    }

@app.route(
    "/predict-occupancy",
    methods=["POST"]
)
def predict_occupancy():

    from flask import request

    data = request.json

    prediction = occupancy_model.predict([
        [
            data["day_of_week"],
            data["hour"],
            data["total_bookings"]
        ]
    ])[0]

    return {
        "success": True,
        "predicted_occupancy": round(
            float(prediction),
            2
        )
    }

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=8000,
        debug=True
    )