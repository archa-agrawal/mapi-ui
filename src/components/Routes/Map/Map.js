import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../../Functional/Header/Header";
import InteractiveMap from "../../Functional/InteractiveMap/InteractiveMap";
import LocationList from "../../Functional/LocationList/LocationList";
import LocationTypes from "../../../utils/enums/locationTypes";

export default function Map() {
  const locations = [
    {
      id: 1,
      name: "Ennio's Pizza",
      description: "Fabulous italian place",
      type: LocationTypes.RESTAURANT.name,
      longitude: -79.4512,
      latitude: 43.6568,
    },
    {
      id: 2,
      name: "Barista coffee shop",
      description: "Awesome midtown cafe",
      type: LocationTypes.CAFE.name,
      longitude: -79.4632,
      latitude: 43.6568,
    },
    {
      id: 3,
      name: "Forest Heights Library",
      description: "State of the art library",
      type: LocationTypes.LIBRARY.name,
      longitude: -79.4612,
      latitude: 43.6563,
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header heading={"Test Heading"} description={"Test Description"} />
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ height: "500px" }}>
          <InteractiveMap markers={locations} selected={3} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box>
          <LocationList locations={locations} selected={3} />
        </Box>
      </Grid>
    </Grid>
  );
}
