import React from "react";

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
        ✅
      </button>
      <button
        onClick={() => onRemove(id)}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        ❌
      </button>
    </div>
  );
}

export default ToDo;
