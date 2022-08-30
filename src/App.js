import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "~components/Routes/Home/Home";
import Map from "~components/Routes/Map/Map";
import SiteHeader from "~components/Functional/SiteHeader/SiteHeader";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import * as actions from "~actions";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createNewMap = ({ heading, description }) => {
    dispatch(actions.selectMap({ heading, description }));
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
