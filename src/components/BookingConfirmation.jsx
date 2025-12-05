import React from "react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const { state } = useLocation();

  if (!state) return <div style={{ padding: "2rem" }}>No booking data available.</div>;

  const { rooms, adults, children, infants, checkIn, checkOut } = state;

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f5f0", color: "#331811" }}>
      <h2>Booking Confirmation</h2>
      <p><strong>Rooms:</strong> {rooms}</p>
      <p><strong>Guests:</strong> {adults} Adults, {children} Children, {infants} Infants</p>
      <p><strong>Check-In:</strong> {new Date(checkIn).toDateString()}</p>
      <p><strong>Check-Out:</strong> {new Date(checkOut).toDateString()}</p>
    </div>
  );
};

export default BookingConfirmation;
