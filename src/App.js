import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "~components/Routes/Home/Home";
import Map from "~components/Routes/Map/Map";
import SiteHeader from "~components/Functional/SiteHeader/SiteHeader";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actions from "~actions";

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const createNewMap = (map) => {
    const mapId = uuidv4();
    dispatch(
      actions.createMap({
        ...map,
        creator: {
          name: "Vibhor",
        },
        createdOn: new Date().toDateString(),
        id: mapId,
      })
    );
    dispatch(actions.selectMap({ ...map, id: mapId }));
    navigate("/map/new");
  };
  return (
    <div>
      <SiteHeader navigate={navigate} createNewMap={createNewMap} />
      <Box sx={{ mx: 10, mt: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/map/:id"} element={<Map />} />
        </Routes>
      </Box>
    </div>
  );
}
