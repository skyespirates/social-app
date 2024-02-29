import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login: (_, action) => {
      return action.payload;
    },
    logout: (s, a) => {
      return {};
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
