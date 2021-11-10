import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    increment: (state, action) => state + 1,
    decrement: (state, action) => state - 1,
  },
});

export const { increment, decrement } = userSlice.actions;
export const selectAge = state => state.user;
export default userSlice.reducer;
