import api from "./api";

export const getBookings = async () => {
  const response = await api.get(
    "/bookings"
  );

  return response.data;
};

export const createBooking = async (
  data
) => {
  const response = await api.post(
    "/bookings",
    data
  );

  return response.data;
};