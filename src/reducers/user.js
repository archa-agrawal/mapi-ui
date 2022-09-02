import { createReducer } from "@reduxjs/toolkit";
import * as actions from "~actions";

const initialState = {
  user: {},
};

export const user = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.createUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(actions.getUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(actions.loginUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    })
    .addCase(actions.logoutUser.fulfilled, (state) => {
      state.user = {
        id: undefined,
      };
    });
});
