import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/baseApi";
import errorReducer from "../reducer/errSlice";
import userEmailReducer from "../reducer/userEmailSlice";
const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    error: errorReducer,
    userEmail: userEmailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
