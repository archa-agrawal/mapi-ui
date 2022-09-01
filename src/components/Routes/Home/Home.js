import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MapCard from "~components/Functional/MapCard/MapCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "~actions";
import Snackbar from "@mui/material/Snackbar";
export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getMaps());
  }, [dispatch]);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const maps = useSelector((state) => state.maps.maps);
  const onTileClick = (map) => {
    navigate(`/map/${map.id}`);
  };
  const onTileDelete = (mapId) => {
    dispatch(actions.deleteMap(mapId));
  };
  const Tiles = maps.map((map) => (
    <Grid item xs={3} key={map.id}>
      <MapCard
        map={map}
        onCardClick={onTileClick}
        onShareClick={() => setSnackBarOpen(true)}
        onDelete={onTileDelete}
      />
    </Grid>
  ));
  return (
    <Box sx={{ my: 10 }}>
      <Snackbar
        open={snackBarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackBarOpen(false)}
        message="Link Copied"
      />
      <Grid container rowSpacing={6} columnSpacing={3}>
        {Tiles}
      </Grid>
    </Box>
  );
}
