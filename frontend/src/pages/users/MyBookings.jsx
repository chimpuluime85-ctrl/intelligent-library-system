import DashboardLayout from "../../components/layout/DashboardLayout";

import BookingCard from "../../components/booking/BookingCard";

const MyBookings = () => {
  const bookings = [
    {
      id: 1,
      user: "Admin User",
      space: "Study Room A",
      date: "2026-06-05",
      status: "Approved",
    },
    {
      id: 2,
      user: "Admin User",
      space: "Conference Hall",
      date: "2026-06-10",
      status: "Pending",
    },
  ];

  return (
    <DashboardLayout>

      <h1>
        My Bookings
      </h1>

      <div className="stats-grid">

        {bookings.map(
          (booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
            />
          )
        )}

      </div>

    </DashboardLayout>
  );
};

export default MyBookings;