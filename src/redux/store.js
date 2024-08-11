import { campersReducer } from "./slice.js";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["campers"],
//   blacklist: ["_persist"]
};

export const store = configureStore({
  reducer: {
    camper: persistReducer(campersPersistConfig, campersReducer),
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);