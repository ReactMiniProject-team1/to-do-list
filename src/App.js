import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import uuid from "react-uuid";

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("todo")));

  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const getInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const checkValidity = (text) => {
    return text !== "";
  };

  const addToList = (e) => {
    e.preventDefault();
    const validity = checkValidity(input);
    if (validity) {
      const key = uuid();
      let newToDo = { id: key, text: input, isDone: false };
      setToDos([...toDos, newToDo]);
      setInput("");
      inputRef.current.focus();
    }
  };

  const clearAll = () => {
    setToDos([]);
  };

  const onRemove = useCallback(
    (id) => {
      setToDos(toDos.filter((todo) => todo.id !== id));
    },
    [toDos]
  );

  const onCrossOut = useCallback(
    (id) => {
      setToDos(
        toDos.map((todo) =>
          todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
        )
      );
    },
    [toDos]
  );

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <form className="input">
        <input
          name="todo"
          type="text"
          placeholder="type your to-do"
          value={input}
          onChange={getInput}
          ref={inputRef}
        />
        <button className="addBtn" onClick={addToList}>
          Add
        </button>
      </form>
      <ToDoList
        className="toDoList"
        toDos={toDos}
        onRemove={onRemove}
        onCrossOut={onCrossOut}
      />
      <button
        className="clearAllBtn"
        onClick={clearAll}
        style={{ visibility: toDos.length === 0 ? "hidden" : "visible" }}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
