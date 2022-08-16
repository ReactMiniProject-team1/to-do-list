import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { create, removeAll } from "../modules/reducer";
import "../App.css";
import ToDoList from "../components/ToDoList";
import InputField from "../components/InputField";

function ToDoPage() {
  const toDos = useSelector((state) => state.todoSlice.toDos);
  const dispatch = useDispatch();

  // const [toDos, setToDos] = useState(
  //   JSON.parse(localStorage.getItem("todo")) || []
  // );

  const clearAll = () => {
    dispatch(removeAll());
  };

  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(toDos));
  // }, [toDos]);

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <InputField />
      <div className="content">
        <ToDoList className="toDoList" />
        <button
          className="clearAllBtn"
          onClick={clearAll}
          style={{ visibility: toDos.length === 0 ? "hidden" : "visible" }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default ToDoPage;
