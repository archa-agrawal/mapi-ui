import { createAction } from "@reduxjs/toolkit";
export const selectMap = createAction("currentMap/setMap", (mapData) => ({
  payload: mapData,
}));

export const selectLocation = createAction("currentMap/select", (location) => ({
  payload: location,
}));

export const updateMapHeading = createAction(
  "currentMap/updateHeading",
  (heading) => ({
    payload: heading,
  })
);

export const updateMapDescription = createAction(
  "currentMap/updateDescription",
  (description) => ({
    payload: description,
  })
);

export const deleteLocation = createAction(
  "currentMap/deleteLocation",
  (id) => ({
    payload: id,
  })
);

export const addLocation = createAction(
  "currentMap/addLocation",
  (location) => ({
    payload: location,
  })
);
