import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import Map from "./components/Routes/Map/Map";
import SiteHeader from "./components/Functional/SiteHeader/SiteHeader";

export default function App() {
  const navigate = useNavigate();
  const createNewMap = () => {
    navigate("/map/new");
  };
  return (
    <div>
      <SiteHeader navigate={navigate} createNewMap={createNewMap} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/map/new"} element={<Map />} />
      </Routes>
    </div>
  );
}
