import { configureStore } from "@reduxjs/toolkit";
import menuSliceReducer from "./menuSlice";

export const store = configureStore({
  reducer: {
    menuState: menuSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
