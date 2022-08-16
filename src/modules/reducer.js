import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = {
  toDos: [],
};

let importance = -1000;

export const todoSlice = createSlice({
  name: "todoHandler",
  initialState: initialState,
  reducers: {
    create: (state, action) => {
      state.toDos.push({
        id: uuid(),
        text: action.payload.text,
        isDone: false,
        isImportant: 100,
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
    removeDones: (state) => {
      state.toDos = state.toDos.filter((todo) => !todo.isDone);
    },
    prioritize: (state, action) => {
      state.toDos = state.toDos
        .map((todo) => {
          if (todo.id === action.payload.id) {
            if (todo.isImportant === 100) {
              todo.isImportant = importance++;
            } else {
              todo.isImportant = 100;
            }
          }
          return todo;
        })
        .sort((a, b) => a.isImportant - b.isImportant);
    },
  },
});

export const {
  update,
  create,
  remove,
  markDone,
  removeAll,
  removeDones,
  prioritize,
} = todoSlice.actions;

export default todoSlice.reducer;
