import React from "react";
import { MdDelete, MdCheckBox } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, markDone } from "../modules/reducer";

function ToDo({ toDo }) {
  const dispatch = useDispatch();
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
        onClick={() => dispatch(markDone({ id: id }))}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <MdCheckBox />
      </button>
      <button
        onClick={() => dispatch(remove({ id: id }))}
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
