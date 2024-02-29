import { configureStore } from "@reduxjs/toolkit";

// slices
import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    user: userReducer,
  },
});
