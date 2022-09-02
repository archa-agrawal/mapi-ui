import React, { useEffect } from "react";
import List from "@mui/material/List";
import LocationListItem from "../LocationListItem/LocationListItem";
import { useMap } from "react-map-gl";

export default function LocationList({
  mapId,
  locations,
  selected,
  backgroundColor,
  onSelect,
  onDelete,
  deletable,
}) {
  const maps = useMap();
  useEffect(() => {
    if (maps && maps[mapId] && locations) {
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

  const Locations = locations?.map((location) => (
    <LocationListItem
      key={`${location.longitude}#${location.latitude}`}
      location={location}
      selected={selected}
      onSelect={onLocationSelect}
      onDelete={onDelete}
      deletable={deletable}
    />
  ));
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        backgroundColor: { backgroundColor },
        height: "100%",
        opacity: 0.8,
      }}
    >
      {Locations}
    </List>
  );
}
