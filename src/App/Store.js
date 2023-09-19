//the way to manage the state app wide to make the data available for the app wide and cross component for the industry level application.

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/User/UserSlice";

export default configureStore({
  reducer: { user: userReducer },
});
