// userEmailSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
};

const userEmailSlice = createSlice({
  name: "userEmail",
  initialState,
  reducers: {
    setEmailr: (state, action) => {
      state.email = action.payload;
    },
    clearEmail: (state) => {
      state.email = null;
    },
  },
});

export const { setEmailr, clearEmail } = userEmailSlice.actions;
export default userEmailSlice.reducer;
