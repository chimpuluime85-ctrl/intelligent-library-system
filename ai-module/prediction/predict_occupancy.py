@app.route(
"/predict-occupancy",
methods=["POST"]
)
def predict_occupancy():

data = request.json

prediction = occupancy_model.predict([
    [
        data["day_of_week"],
        data["hour"],
        data["total_bookings"]
    ]
])[0]

return jsonify({
    "success": True,
    "predicted_occupancy": round(
        float(prediction),
        2
    )
})