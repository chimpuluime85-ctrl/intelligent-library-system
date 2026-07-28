const BookingCard = ({
  booking,
}) => {
  return (
    <div className="booking-card">

      <h3>
        {booking.space}
      </h3>

      <p>
        User:
        {" "}
        {booking.user}
      </p>

      <p>
        Date:
        {" "}
        {booking.date}
      </p>

      <p>
        Status:
        {" "}
        {booking.status}
      </p>

    </div>
  );
};

export default BookingCard;