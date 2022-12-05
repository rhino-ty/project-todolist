import { configureStore } from "@reduxjs/toolkit";
import { listSlice } from "./slice/listSilce";

const store = configureStore({
  reducer: {
    lists: listSlice.reducer,
  },
});

export default store;
