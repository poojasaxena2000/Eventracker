



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import API_BASE from "../api";

export default function SearchResults() {
  // Get URL query params
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const state = params.get("state");
  const city = params.get("city");

  const [events, setEvents] = useState([]);

  // Fetch events based on selected state and city
  useEffect(() => {
    if (!state || !city) return;

    fetch(`${API_BASE}/events?state=${state}&city=${city}`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, [state, city]);

  // Booking function
  const handleBooking = (event) => {
    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const booking = {
      eventName: event["Event Name"],
      address: event.Address,
      city: event.City,
      state: event.State,
      bookingTime: "Morning",
      bookingDate: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, booking])
    );

    alert("Booked Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Required Heading */}
        <h1 className="text-3xl font-bold mb-8">
          {events.length} events available in {city}
        </h1>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-md"
            >
              {/* Required h3 */}
              <h3 className="text-xl font-bold">
                {event["Event Name"]}
              </h3>

              <p>{event.Address}</p>

              <p>
                {event.City}, {event.State}
              </p>

              <p>
                Rating: {event["Overall Rating"]}
              </p>

              {/* Required p tags */}
              <p>Today</p>
              <p>Morning</p>
              <p>Afternoon</p>
              <p>Evening</p>

              {/* Required button text */}
              <button
                onClick={() => handleBooking(event)}
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg"
              >
                Book FREE Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}