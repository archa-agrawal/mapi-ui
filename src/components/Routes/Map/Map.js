import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "~components/Functional/Header/Header";
import InteractiveMap from "~components/Functional/InteractiveMap/InteractiveMap";
import LocationList from "~components/Functional/LocationList/LocationList";
import NewLocationModal from "~components/Functional/NewLocationModal/NewLocationModal";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "~actions";
import { MapProvider } from "react-map-gl";

export default function Map() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const currentMap = useSelector((state) => state.currentMap);

  const onSelectLocation = (location) => {
    dispatch(actions.selectLocation(location));
  };
  const onDeleteLocation = (location) => {
    dispatch(actions.deleteLocation(location));
  };
  const onHeadingUpdate = (heading) => {
    dispatch(actions.updateMapHeading(heading));
  };
  const onDescriptionUpdate = (description) => {
    dispatch(actions.updateMapDescription(description));
  };

  if (!currentMap) {
    return <div>Fetching...</div>;
  }

  return (
    <MapProvider>
      <Grid container>
        <Grid item xs={12}>
          <Header
            heading={currentMap.heading}
            description={currentMap.description}
            onHeaderUpdate={onHeadingUpdate}
            onDescriptionUpdate={onDescriptionUpdate}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ height: "500px" }}>
            <InteractiveMap
              id={currentMap.id}
              markers={currentMap.locations}
              selected={currentMap.selected}
              onMapClick={() => setModalOpen(true)}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <LocationList
              mapId={currentMap.id}
              locations={currentMap.locations}
              selected={currentMap.selected}
              onSelect={onSelectLocation}
              onDelete={onDeleteLocation}
            />
          </Box>
        </Grid>
      </Grid>
      <NewLocationModal open={modalOpen} onCancel={() => setModalOpen(false)} />
    </MapProvider>
  );
}
