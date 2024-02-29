import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    login: (_, action) => {
      return action.payload;
    },
    logout: (_, a) => {
      return null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
