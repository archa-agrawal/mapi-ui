import { createReducer } from "@reduxjs/toolkit";
import LocationTypes from "../utils/enums/locationTypes";
import * as actions from "../actions";

const initialState = {
  id: 1,
  heading: "Test Title",
  description: "Test Description",
  locations: [
    {
      id: 1,
      name: "Ennio's Pizza",
      description: "Fabulous italian place",
      type: LocationTypes.RESTAURANT.name,
      longitude: -179.4512,
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
  ],
  selected: 2,
};

export const currentMap = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.selectLocation, (state, { payload }) => {
      state.selected = payload;
    })
    .addCase(actions.updateMapHeading, (state, { payload }) => {
      state.heading = payload;
    })
    .addCase(actions.updateMapDescription, (state, { payload }) => {
      state.description = payload;
    });
});
