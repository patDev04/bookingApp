import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { accommodationApi } from "./api/accommodation";
import { destinationApi } from "./api/destination";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [accommodationApi.reducerPath]: accommodationApi.reducer,
    [destinationApi.reducerPath]: destinationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accommodationApi.middleware,
      destinationApi.middleware
    ),
});

setupListeners(store.dispatch);
