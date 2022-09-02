import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = `${process.env.REACT_APP_SERVER_URL}/location`;

export const selectLocation = createAction("location/select", (location) => ({
  payload: location,
}));

export const deleteLocation = createAsyncThunk(
  "currentMap/deleteLocation",
  async (id) => {
    await fetch(`${API_URL}?id=${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });
    return id;
  }
);

export const addLocation = createAsyncThunk(
  "location/add",
  async (location) => {
    const response = await fetch(API_URL, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(location),
      headers: {
        "content-type": "application/json",
      },
    });
    return await response.json();
  }
);
