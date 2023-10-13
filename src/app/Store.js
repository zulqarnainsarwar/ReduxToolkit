import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { todTodoReducer } from "../features/todo/todoSlice";
export const Store = configureStore({
  reducer: todTodoReducer,
});
