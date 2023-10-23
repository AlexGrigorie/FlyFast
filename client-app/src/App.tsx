import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FlightDetails from "./pages/FlightDetails/FlightDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/customer-info/:id" element={<FlightDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
