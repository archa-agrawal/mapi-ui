import { createReducer } from "@reduxjs/toolkit";
import * as actions from "~actions";

const initialState = {
  maps: [],
};

export const mapList = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.createMap, (state, { payload }) => {
      state.maps = [...state.maps, payload];
    })
    .addCase(actions.deleteMap, (state, { payload }) => {
      state.maps = state.maps.filter((map) => map.id !== payload);
    });
});
