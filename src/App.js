import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import Map from "./components/Routes/Map/Map";

export default function app() {
  return (
    <div>
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/map/new"} element={<Map />} />
      </Routes>
    </div>
  );
}
