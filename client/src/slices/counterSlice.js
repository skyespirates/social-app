import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 5 },
  reducers: {
    decrement: (state) => {
      state.count -= 1;
    },
    increment: (state) => {
      state.count += 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { decrement, increment, reset } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
