






import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="space-y-6">
            {bookings.map((item, index) => (
              <div key={index} className="bg-white border rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold">{item.eventName}</h3>
                <p>{item.address}</p>
                <p>{item.city}, {item.state}</p>
                <p>Slot: {item.bookingTime}</p>
                <p>Date: {item.bookingDate}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}