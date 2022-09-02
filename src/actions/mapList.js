import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = `${process.env.REACT_APP_SERVER_URL}/map`;

export const createMap = createAsyncThunk("map/add", async (mapData) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(mapData),
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
});

export const deleteMap = createAsyncThunk("map/delete", async (id) => {
  await fetch(`${API_URL}?id=${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return id;
});

export const getMaps = createAsyncThunk("map/list", async () => {
  const response = await fetch(`${API_URL}/list`, {
    credentials: "include",
  });
  return await response.json();
});

export const getMap = createAsyncThunk("map/get", async (id) => {
  const response = await fetch(`${API_URL}?id=${id}`, {
    credentials: "include",
  });
  return await response.json();
});

export const updateMapHeading = createAsyncThunk(
  "map/updateHeading",
  async (mapData) => {
    await fetch(`${API_URL}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mapData),
    });
    return mapData.heading;
  }
);

export const updateMapDescription = createAsyncThunk(
  "map/updateDescription",
  async (mapData) => {
    await fetch(`${API_URL}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mapData),
    });
    return mapData.description;
  }
);
