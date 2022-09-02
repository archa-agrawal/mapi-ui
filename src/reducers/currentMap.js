import { createReducer } from "@reduxjs/toolkit";
import * as actions from "~actions";

const initialState = {
  map: {
    id: null,
    heading: "",
    description: "",
    theme: "",
    locations: [],
    selected: undefined,
  },
};

export const currentMap = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.getMap.pending, (state) => {
      state.map = {};
    })
    .addCase(actions.getMap.fulfilled, (state, { payload }) => {
      state.map = {
        ...payload,
      };
      state.map.selected =
        state.map.locations.length > 0 ? state.map.locations[0].id : undefined;
    })
    .addCase(actions.selectLocation, (state, { payload: locationId }) => {
      state.map.selected = locationId;
    })
    .addCase(
      actions.updateMapHeading.fulfilled,
      (state, { payload: heading }) => {
        state.map.heading = heading;
      }
    )
    .addCase(
      actions.updateMapDescription.fulfilled,
      (state, { payload: description }) => {
        state.map.description = description;
      }
    )
    .addCase(
      actions.deleteLocation.fulfilled,
      (state, { payload: locationId }) => {
        state.map.locations = state.map.locations.filter(
          (location) => location.id !== locationId
        );
        if (state.map.selected === locationId) {
          state.map.selected =
            state.map.locations.length > 0
              ? state.map.locations[0].id
              : undefined;
        }
      }
    )
    .addCase(actions.addLocation.fulfilled, (state, { payload: location }) => {
      state.map.locations = [...state.map.locations, location];
      state.map.selected = location.id;
    });
});
