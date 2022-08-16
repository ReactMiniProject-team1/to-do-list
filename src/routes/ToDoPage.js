import React from "react";

import "../App.css";
import InputField from "../components/InputField";
import ToDoList from "../components/ToDoList";
import RemoveButtons from "../components/RemoveButtons";

function ToDoPage() {
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <div className="content">
        <InputField />
        <ToDoList className="toDoList" />
        <RemoveButtons />
      </div>
    </div>
  );
}

export default ToDoPage;
