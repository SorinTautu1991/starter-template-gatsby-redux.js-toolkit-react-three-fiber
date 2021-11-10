import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/user-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
