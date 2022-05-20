import { useEffect, useRef, useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDo] = useState(
    Object.entries(localStorage).map(([key, value]) => ({
      id: key,
      todo: value,
      done: false,
    }))
  );

  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const getInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const addToList = () => {
    const key = Math.random().toString(16).substring(0, 5);
    let newToDo = { id: key, todo: input, done: false };
    setToDo([...toDos, newToDo]);
    localStorage.setItem(key, input);
    setInput("");
    inputRef.current.focus();
  };

  const clearAll = () => {
    setToDo([]);
    localStorage.clear();
  };

  const isDone = (id) => {
    let newtoDos = toDos.map((each) => {
      if (each.id === id) {
        return { ...each, isdone: true };
      }
      return each;
    });

    setToDo(newtoDos);
  };
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <div className="input">
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
      </div>
      <ul>
        {toDos.map((each) => (
          <ToDo
            todo={each.todo}
            isdone={each.done}
            key={each.id}
            isDone={isDone}
          />
        ))}
      </ul>
      <button
        onClick={clearAll}
        style={{ visibility: toDos.length === 0 ? "hidden" : "visible" }}
      >
        Clear All
      </button>
    </div>
  );
}

export default App;
