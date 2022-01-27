import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import TrackingSearchPage from "./pages/TrackingSearchPage";
import TrackingShipmentPage from "./pages/TrackingShipmentPage";

const RoutePages = () => (
  <Routes>
    <Route path="/" element={<TrackingSearchPage />} />
    <Route path="tracking-shipment" element={<TrackingShipmentPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutePages;
