import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API_BASE from "../api";

export default function HomePage() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/states`)
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!selectedState) return;

    fetch(`${API_BASE}/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.log(err));
  }, [selectedState]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }

    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  return (
    <div>
      <Navbar />

      <div className="page-container">
        <h1>Find Events</h1>

        <form onSubmit={handleSearch}>
          {/* STATE DROPDOWN */}
          <div
            id="state"
            onClick={() => setShowStates(!showStates)}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "20px",
              cursor: "pointer",
              width: "300px",
            }}
          >
            {selectedState || "Select State"}

            {showStates && (
              <ul style={{ marginTop: "10px" }}>
                {states.map((state, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedState(state);
                      setSelectedCity("");
                      setShowStates(false);
                    }}
                    style={{
                      cursor: "pointer",
                      padding: "6px",
                    }}
                  >
                    {state}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* CITY DROPDOWN */}
          <div
            id="city"
            onClick={() => setShowCities(!showCities)}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "20px",
              cursor: "pointer",
              width: "300px",
            }}
          >
            {selectedCity || "Select City"}

            {showCities && (
              <ul style={{ marginTop: "10px" }}>
                {cities.map((city, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      setSelectedCity(city);
                      setShowCities(false);
                    }}
                    style={{
                      cursor: "pointer",
                      padding: "6px",
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button id="searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}