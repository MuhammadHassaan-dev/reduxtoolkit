import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./Slices";

export const Store = configureStore({
  reducer: {
    allreducers: rootReducers,
  },
});
