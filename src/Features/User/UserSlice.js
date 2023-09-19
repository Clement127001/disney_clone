import { createSlice } from "@reduxjs/toolkit";

const intialvalue = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: intialvalue,
  reducers: {
    signInUserHandler: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    signOutHandler: (state) => {
      state.email = null;
      state.name = null;
      state.photo = null;
    },
  },
});

//action of the user slice
export const { signInUserHandler, signOutHandler } = userSlice.actions;

//for making the selection of the value from the store
export const selectedUserName = (state) => state.user.name;
export const selectedUserEmail = (state) => state.user.email;
export const selectedUserPhoto = (state) => state.user.photo;

//getting all the reducer funtion of the user slice
export default userSlice.reducer;
