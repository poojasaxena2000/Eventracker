import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import API_BASE from "../api";

export default function SearchResults() {
  const [events, setEvents] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const state = query.get("state");
  const city = query.get("city");

  useEffect(() => {
    fetch(`${API_BASE}/events?state=${state}&city=${city}`)
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
  }, [state, city]);

  const handleBooking = (event) => {
    const oldBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const bookingData = {
      eventName: event["Event Name"],
      address: event.Address,
      city: event.City,
      state: event.State,
      rating: event["Overall Rating"],
      bookingDate: new Date().toISOString(),
      bookingTime: "07:00 PM",
      bookingEmail: "hello@gmail.com"
    };

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, bookingData])
    );

    alert("Booking Saved");
  };

  return (
    <div>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>
          {events.length} events available in {city}
        </h1>

        {events.map((event, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginTop: "20px"
            }}
          >
            <h3>{event["Event Name"]}</h3>
            <p>{event.Address}</p>
            <p>{event.City}</p>
            <p>{event.State}</p>
            <p>{event["Overall Rating"]}</p>

            <p>Today</p>
            <p>Morning</p>
            <p>Afternoon</p>
            <p>Evening</p>

            <button onClick={() => handleBooking(event)}>
              Book FREE Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}