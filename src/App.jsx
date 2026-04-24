// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import SearchResults from "./pages/SearchResults";
// import MyBookings from "./pages/MyBookings";
import "./index.css";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/my-bookings" element={<MyBookings />} />
//       </Routes>
//     </Router>
//   );
// }










// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import SearchResults from "./pages/SearchResults";
// import MyBookings from "./pages/MyBookings";
// import "./index.css";

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/search" element={<SearchResults />} />
//         <Route path="/my-bookings" element={<MyBookings />} />
//       </Routes>
//     </Router>
//   );
// }





import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import MyBookings from "./pages/MyBookings";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
  );
}