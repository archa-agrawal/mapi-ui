import { createReducer } from "@reduxjs/toolkit";
import * as actions from "~actions";

const initialState = {
  maps: [],
};

export const mapList = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.createMap.fulfilled, (state, { payload: map }) => {
      state.maps = [map, ...state.maps];
    })
    .addCase(actions.deleteMap.fulfilled, (state, { payload: mapId }) => {
      state.maps = state.maps.filter((map) => map.id !== mapId);
    })
    .addCase(actions.getMaps.fulfilled, (state, { payload: maps }) => {
      state.maps = maps.sort(
        (map1, map2) => -(new Date(map1.createdAt) - new Date(map2.createdAt))
      );
    });
});
