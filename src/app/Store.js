import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Import the reducer

export const store = configureStore({
  reducer: {
    todo: todoReducer, 
  },
});
