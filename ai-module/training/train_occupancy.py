import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib
import os

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)

csv_path = os.path.join(
    BASE_DIR,
    "datasets",
    "occupancy_data.csv"
)

model_path = os.path.join(
    BASE_DIR,
    "models",
    "occupancy_model.pkl"
)

data = pd.read_csv(csv_path)

X = data[
    [
        "day_of_week",
        "hour",
        "total_bookings",
    ]
]

y = data["occupancy_rate"]

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42,
)

model.fit(X, y)

joblib.dump(
    model,
    model_path,
)

print(
    "Occupancy Model Trained Successfully"
)