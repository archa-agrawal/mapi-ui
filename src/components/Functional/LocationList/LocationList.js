import React, { useEffect } from "react";
import List from "@mui/material/List";
import LocationListItem from "../LocationListItem/LocationListItem";
import { useMap } from "react-map-gl";

export default function LocationList({
  mapId,
  locations,
  selected,
  onSelect,
  onDelete,
}) {
  const maps = useMap();
  useEffect(() => {
    if (maps && maps[mapId]) {
      const selectedLocation = locations.find(
        (location) => location.id === selected
      );
      if (selectedLocation) {
        maps[mapId].flyTo({
          center: [selectedLocation.longitude, selectedLocation.latitude],
          zoom: 15,
        });
      }
    }
  }, [maps, mapId, locations, selected]);

  const onLocationSelect = (id) => {
    onSelect(id);
  };

  const Locations = locations.map((location) => (
    <LocationListItem
      key={`${location.longitude}#${location.latitude}`}
      location={location}
      selected={selected}
      onSelect={onLocationSelect}
      onDelete={onDelete}
    />
  ));
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {Locations}
    </List>
  );
}
