import { createAction } from "@reduxjs/toolkit";
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
