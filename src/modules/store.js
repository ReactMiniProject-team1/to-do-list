import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "./localStorageMiddleware.js";
import todoSlice from "./reducer";

const reHydrateStore = () => {
  if (localStorage.getItem("toDoList") !== null) {
    return JSON.parse(localStorage.getItem("toDoList"));
  }
};

export const store = configureStore({
  reducer: {
    todoSlice: todoSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaulutMiddeware) =>
    getDefaulutMiddeware().concat(localStorageMiddleware),
});
