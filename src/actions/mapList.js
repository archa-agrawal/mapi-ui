import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

export const createMap = createAction("map/add", (mapData) => ({
  payload: mapData,
}));

export const deleteMap = createAction("mapList/deleteMap", (mapId) => ({
  payload: mapId,
}));

export const getMaps = createAsyncThunk("map/list", async () => {
  const response = await fetch("http://localhost:5000/map/list");
  return await response.json();
});

export const getMap = createAsyncThunk("map/get", async (id) => {
  const response = await fetch(`http://localhost:5000/map?id=${id}`);
  return await response.json();
});
