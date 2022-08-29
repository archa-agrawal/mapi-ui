import * as React from "react";
import List from "@mui/material/List";
import LocationListItem from "../LocationListItem/LocationListItem";

export default function LocationList({ locations, selected }) {
  const Locations = locations.map((location) => (
    <LocationListItem
      key={`${location.longitude}-${location.latitude}`}
      location={location}
      selected={selected}
    />
  ));
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Locations}
    </List>
  );
}
