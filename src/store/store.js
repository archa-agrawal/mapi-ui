import { configureStore } from "@reduxjs/toolkit";

import * as reducers from "~reducers";

export const store = configureStore({
  reducer: {
    currentMap: reducers.currentMap,
  },
});
