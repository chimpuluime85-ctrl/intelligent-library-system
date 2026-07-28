import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] =
    useState({
      space: "",
      date: "",
      purpose: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="space"
        placeholder="Space Name"
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        onChange={handleChange}
      />

      <textarea
        name="purpose"
        placeholder="Purpose"
        onChange={handleChange}
      />

      <button type="submit">
        Book Space
      </button>

    </form>
  );
};

export default BookingForm;