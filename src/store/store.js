import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./slice";

const store = configureStore({
  reducer: {
    lists: listSlice.reducer,
  },
});

export default store;
