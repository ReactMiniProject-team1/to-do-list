import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  input: "",
  toDos: [],
};

export const todoSlice = createSlice({
  name: "todoHandler",
  initialState: initialState,
  reducers: {
    getText: (state, action) => {
      state.input = action.payload.text;
    },
    create: (state, action) => {
      state.toDos.push({
        id: uuid(),
        text: action.payload.text,
        isDone: false,
      });
    },
    remove: (state, action) => {
      state.toDos = state.toDos.filter((todo) => todo.id !== action.payload.id);
    },
    update: (state, action) => {
      state.toDos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
    },
    markDone: (state, action) => {
      state.toDos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    },
    removeAll: (state) => {
      state.toDos = [];
    },
  },
});

export const { update, getText, create, remove, markDone, removeAll } =
  todoSlice.actions;

export default todoSlice.reducer;
