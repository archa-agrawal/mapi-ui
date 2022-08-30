import { createReducer } from "@reduxjs/toolkit";
import * as actions from "~actions";

const initialState = {
  id: 1,
  locations: [],
  selected: undefined,
};

export const currentMap = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.selectMap, (state, { payload }) => {
      state.heading = payload.heading;
      state.description = payload.description;
    })
    .addCase(actions.selectLocation, (state, { payload }) => {
      state.selected = payload;
    })
    .addCase(actions.updateMapHeading, (state, { payload }) => {
      state.heading = payload;
    })
    .addCase(actions.updateMapDescription, (state, { payload }) => {
      state.description = payload;
    })
    .addCase(actions.deleteLocation, (state, { payload }) => {
      state.locations = state.locations.filter(
        (location) => location.id !== payload
      );
      if (state.selected === payload && state.locations.length > 0) {
        state.selected = state.locations[0].id;
      }
    })
    .addCase(actions.addLocation, (state, { payload }) => {
      state.locations = [...state.locations, payload];
      state.selected = payload.id;
    });
});
