import { createAction } from "@reduxjs/toolkit";
export const createMap = createAction("mapList/addMap", (mapData) => ({
  payload: mapData,
}));

export const deleteMap = createAction("mapList/deleteMap", (mapId) => ({
  payload: mapId,
}));
