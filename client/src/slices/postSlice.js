import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    fetchAllPosts: (state, action) => {},
    fetchPostById: (state, action) => {},
  },
});

export const { fetchAllPosts, fetchPostById } = postSlice.actions;

export default postSlice.reducer;
