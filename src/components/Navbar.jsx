


import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-sky-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h2 className="text-2xl font-bold">Event Booking</h2>

      <div className="flex gap-6 font-medium">
        <Link to="/">Find Events</Link>
        <Link to="/my-bookings">My Bookings</Link>
      </div>
    </nav>
  );
}