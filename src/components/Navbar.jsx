import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#1976d2", color: "white" }}>
      <h2>Event Tracker</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white" }}>Find Events</Link>
        <Link to="/my-bookings" style={{ color: "white" }}>
          My Bookings
        </Link>
      </div>
    </nav>
  );
}