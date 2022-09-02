import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = `${process.env.REACT_APP_SERVER_URL}/user`;

export const createUser = createAsyncThunk("user/create", async (user) => {
  const response = await fetch(`${API_URL}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

export const getUser = createAsyncThunk("user/get", async () => {
  const response = await fetch(`${API_URL}/profile`, {
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  return await response.json();
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  console.log("logging out action");
  await fetch(`${API_URL}/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
});

export const loginUser = createAsyncThunk("user/login", async (user) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});
