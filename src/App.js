import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import Map from "./components/Routes/Map/Map";
import SiteHeader from "./components/Functional/SiteHeader/SiteHeader";
import Box from "@mui/material/Box";
import { useMap, MapProvider } from "react-map-gl";

export default function App() {
  const navigate = useNavigate();
  const createNewMap = () => {
    navigate("/map/new");
  };
  return (
    <div>
      <SiteHeader navigate={navigate} createNewMap={createNewMap} />
      <Box sx={{ flexGrow: 1, mx: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/map/new"} element={<Map />} />
        </Routes>
      </Box>
    </div>
  );
}
