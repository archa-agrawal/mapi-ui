import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "~components/Functional/Header/Header";
import InteractiveMap from "~components/Functional/InteractiveMap/InteractiveMap";
import LocationList from "~components/Functional/LocationList/LocationList";
import NewLocationModal from "~components/Functional/NewLocationModal/NewLocationModal";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "~actions";
import { MapProvider } from "react-map-gl";
import { getTheme } from "~utils/enums/themes";
import { useParams } from "react-router-dom";

export default function Map({ userId }) {
  const initialState = {
    longitude: null,
    latitude: null,
    modalOpen: false,
  };
  const resetState = () => {
    setState(initialState);
  };
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(actions.getMap(id));
  }, [dispatch, id, userId]);
  const currentMap = useSelector((state) => state.currentMap.map);
  const currentTheme = getTheme(currentMap.theme);

  const onSelectLocation = (location) => {
    dispatch(actions.selectLocation(location));
  };
  const onDeleteLocation = (location) => {
    dispatch(actions.deleteLocation(location));
  };
  const onHeadingUpdate = (heading) => {
    dispatch(actions.updateMapHeading({ id, heading }));
  };
  const onDescriptionUpdate = (description) => {
    dispatch(actions.updateMapDescription({ id, description }));
  };
  const onMapClick = ({ longitude, latitude }) => {
    if (!currentMap.owned) return;
    setState({
      longitude,
      latitude,
      modalOpen: true,
    });
  };
  const onAddNewLocation = ({ title, description, type }) => {
    dispatch(
      actions.addLocation({
        title,
        description,
        type,
        longitude: state.longitude,
        latitude: state.latitude,
        mapId: currentMap.id,
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
            editable={currentMap.owned}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={{ height: "500px" }}>
            <InteractiveMap
              id={id}
              markers={currentMap.locations}
              onMapClick={onMapClick}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ height: "484px" }}>
            <LocationList
              mapId={id}
              locations={currentMap.locations}
              selected={currentMap.selected}
              backgroundColor={currentTheme.color}
              onSelect={onSelectLocation}
              onDelete={onDeleteLocation}
              deletable={currentMap.owned}
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
