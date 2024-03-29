import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://digital-learning.vercel.app",
  }),
  tagTypes: ["products,carts,users,classes"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});

// https://digital-learning.vercel.app
//http://localhost:3000
