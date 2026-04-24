import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <div>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>My Bookings</h1>

        {bookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          bookings.map((booking, index) => (
            <div key={index} style={{ marginTop: "20px" }}>
              <h3>{booking.eventName}</h3>
              <p>{booking.address}</p>
              <p>{booking.city}</p>
              <p>{booking.state}</p>
              <p>{booking.bookingDate}</p>
              <p>{booking.bookingTime}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}