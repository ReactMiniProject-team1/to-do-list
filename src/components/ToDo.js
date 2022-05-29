import React from "react";
import { MdDelete, MdCheckBox } from "react-icons/md";

function ToDo({ toDo, onRemove, onCrossOut }) {
  const { id, text, isDone } = toDo;

  return (
    <div className="toDoItems">
      <span
        style={{
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "gray" : "black",
        }}
      >
        {text}
      </span>
      <button
        onClick={() => onCrossOut(id)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <MdCheckBox />
      </button>
      <button
        onClick={() => onRemove(id)}
        style={{
          size: "",
          background: "none",
          border: "none",
          color: "black",
          cursor: "pointer",
        }}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default ToDo;
