import { useEffect, useRef, useState } from "react";
import "./App.css";
import ToDos from "./components/ToDos";

function App() {
  const [input, setInput] = useState("");
  const [toDos, setToDo] = useState([]);

  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const getInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const addToList = () => {
    let newToDo = input;
    setToDo([...toDos, newToDo]);
    setInput("");
    inputRef.current.focus();
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
      <div>
        <ul>
          <ToDos toDos={toDos} />
        </ul>
      </div>
    </div>
  );
}

export default App;
