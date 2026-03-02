import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menu";
import langReducer from "./lang";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    lang: langReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch