import { createSlice } from "@reduxjs/toolkit";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("1234567890abcdef", 6);

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "jogging",
    },
    {
      id: 2,
      title: "swimming",
    },
    {
      id: 3,
      title: "coding",
    },
    {
      id: 4,
      title: "watching movie",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        title: action.payload,
      };
      return [...state, newTodo];
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
