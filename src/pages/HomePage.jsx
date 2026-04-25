

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import API_BASE from "../api";

// export default function HomePage() {
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   const navigate = useNavigate();

//   // Fetch all states when page loads
//   useEffect(() => {
//     fetch(`${API_BASE}/states`)
//       .then((res) => res.json())
//       .then((data) => setStates(data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Fetch cities when state changes
//   useEffect(() => {
//     if (!selectedState) return;

//     fetch(`${API_BASE}/cities/${selectedState}`)
//       .then((res) => res.json())
//       .then((data) => setCities(data))
//       .catch((err) => console.log(err));
//   }, [selectedState]);

//   // Search button function
//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (!selectedState || !selectedCity) {
//       alert("Please select state and city");
//       return;
//     }

//     navigate(`/search?state=${selectedState}&city=${selectedCity}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-4xl font-bold mb-8">
//           Find Events Across USA
//         </h1>

//         <form
//           onSubmit={handleSearch}
//           className="bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-3 gap-4"
//         >
//           {/* State Dropdown */}
//           <div id="state">

            
//             <select
//               className="w-full border p-3 rounded-lg"
//               value={selectedState}
//               onChange={(e) => {
//                 setSelectedState(e.target.value);
//                 setSelectedCity("");
//               }}
//             >
//               <option value="">Select State</option>

//               {states.map((state, index) => (
//                 <option key={index} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>




//           </div>

//           {/* City Dropdown */}
//           <div id="city">
//             <select
//               className="w-full border p-3 rounded-lg"
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//             >
//               <option value="">Select City</option>

//               {cities.map((city, index) => (
//                 <option key={index} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Search Button */}
//           <button
//             id="searchBtn"
//             type="submit"
//             className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold px-6 py-3"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import API_BASE from "../api";

// export default function HomePage() {
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");

//   const navigate = useNavigate();

//   // Fetch all states
//   useEffect(() => {
//     fetch(`${API_BASE}/states`)
//       .then((res) => res.json())
//       .then((data) => setStates(data))
//       .catch((err) => console.log(err));
//   }, []);

//   // Fetch cities when state changes
//   useEffect(() => {
//     if (!selectedState) return;

//     fetch(`${API_BASE}/cities/${selectedState}`)
//       .then((res) => res.json())
//       .then((data) => setCities(data))
//       .catch((err) => console.log(err));
//   }, [selectedState]);

//   // Search button
//   const handleSearch = (e) => {
//     e.preventDefault();

//     if (!selectedState || !selectedCity) {
//       alert("Please select state and city");
//       return;
//     }

//     navigate(
//       `/search?state=${encodeURIComponent(
//         selectedState
//       )}&city=${encodeURIComponent(selectedCity)}`
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-4xl font-bold mb-8">
//           Find Events Across USA
//         </h1>

//         <form
//           onSubmit={handleSearch}
//           className="bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-3 gap-4"
//         >
//           {/* State Dropdown */}
//           <div id="state">
//             <select
//               className="w-full border p-3 rounded-lg"
//               value={selectedState}
//               onChange={(e) => {
//                 setSelectedState(e.target.value);
//                 setSelectedCity("");
//               }}
//             >
//               <option value="">Select State</option>

//               {states.map((state, index) => (
//                 <option key={index} value={state}>
//                   {state}
//                 </option>
//               ))}
//             </select>

//             {/* Hidden li for Cypress */}
//             <ul className="hidden">
//               {states.map((state, index) => (
//                 <li key={index}>{state}</li>
//               ))}
//             </ul>
//           </div>

//           {/* City Dropdown */}
//           <div id="city">
//             <select
//               className="w-full border p-3 rounded-lg"
//               value={selectedCity}
//               onChange={(e) => setSelectedCity(e.target.value)}
//             >
//               <option value="">Select City</option>

//               {cities.map((city, index) => (
//                 <option key={index} value={city}>
//                   {city}
//                 </option>
//               ))}
//             </select>

//             {/* Hidden li for Cypress */}
//             <ul className="hidden">
//               {cities.map((city, index) => (
//                 <li key={index}>{city}</li>
//               ))}
//             </ul>
//           </div>

//           {/* Search Button */}
//           <button
//             id="searchBtn"
//             type="submit"
//             className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold px-6 py-3"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }






import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API_BASE from "../api";

export default function HomePage() {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const navigate = useNavigate();

  // Fetch all states
  useEffect(() => {
    fetch(`${API_BASE}/states`)
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.log(err));
  }, []);

  // Fetch cities based on selected state
  useEffect(() => {
    if (!selectedState) return;

    fetch(`${API_BASE}/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCities(data))
      .catch((err) => console.log(err));
  }, [selectedState]);

  // Search function
  const handleSearch = () => {
    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }

    navigate(
      `/search?state=${encodeURIComponent(
        selectedState
      )}&city=${encodeURIComponent(selectedCity)}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-8">
          Find Events Across USA
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-3 gap-4">

          {/* State List */}
          <div id="state">
            <p className="font-semibold mb-2">Select State</p>

            <ul className="border rounded-lg bg-white shadow-sm max-h-52 overflow-y-auto">
              {states.map((state, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedState(state);
                    setSelectedCity("");
                  }}
                  className={`p-3 cursor-pointer hover:bg-sky-100 ${
                    selectedState === state
                      ? "bg-sky-50 font-semibold"
                      : ""
                  }`}
                >
                  {state}
                </li>
              ))}
            </ul>
          </div>

          {/* City List */}
          <div id="city">
            <p className="font-semibold mb-2">Select City</p>

            <ul className="border rounded-lg bg-white shadow-sm max-h-52 overflow-y-auto">
              {cities.map((city, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCity(city)}
                  className={`p-3 cursor-pointer hover:bg-sky-100 ${
                    selectedCity === city
                      ? "bg-sky-50 font-semibold"
                      : ""
                  }`}
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Search Button */}
          <button
            id="searchBtn"
            onClick={handleSearch}
            className="bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold px-6 py-3"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

