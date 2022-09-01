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
import { v4 as uuidv4 } from "uuid";
import { getTheme } from "~utils/enums/themes";

export default function Map() {
  const initalState = {
    longitude: null,
    latitude: null,
    modalOpen: false,
  };
  const resetState = () => {
    setState(initalState);
  };
  const [state, setState] = useState(initalState);
  const dispatch = useDispatch();
  const currentMap = useSelector((state) => state.currentMap);
  const currentTheme = getTheme(currentMap.theme);

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
  const onMapClick = ({ longitude, latitude }) => {
    setState({
      longitude,
      latitude,
      modalOpen: true,
    });
  };
  const onAddNewLocation = ({ title, description, type }) => {
    dispatch(
      actions.addLocation({
        id: uuidv4(),
        title,
        description,
        type,
        longitude: state.longitude,
        latitude: state.latitude,
      })
    );
    resetState();
  };
  if (!currentMap) {
    return <div>Fetching...</div>;
  }
  return (
    <MapProvider>
      <Box
        sx={{
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          zIndex: "-1",
          opacity: "0.3",
          top: "0",
          left: "0",
          backgroundImage: `url(${currentTheme.img})`,
        }}
      ></Box>
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
              onMapClick={onMapClick}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ height: "484px" }}>
            <LocationList
              mapId={currentMap.id}
              locations={currentMap.locations}
              selected={currentMap.selected}
              backgroundColor={currentTheme.color}
              onSelect={onSelectLocation}
              onDelete={onDeleteLocation}
            />
          </Box>
        </Grid>
      </Grid>
      <NewLocationModal
        open={state.modalOpen}
        onCancel={resetState}
        onSave={onAddNewLocation}
      />
    </MapProvider>
  );
}
