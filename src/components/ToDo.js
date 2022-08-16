import React, { useState } from "react";
import { MdDelete, MdCheckBox, MdCreate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, markDone, update } from "../modules/reducer";

function ToDo({ toDo }) {
  const { id, text, isDone } = toDo;

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const dispatch = useDispatch();

  const updateText = () => {
    if (isEditing) {
      dispatch(update({ id: id, text: editText }));
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="toDoItems">
      <span
        style={{
          display: isEditing ? "none" : "inline",
          textDecoration: isDone ? "line-through" : "none",
          color: isDone ? "gray" : "black",
        }}
      >
        {text}
      </span>
      <input
        type="text"
        value={editText}
        style={{ display: isEditing ? "inline" : "none" }}
        onChange={(e) => {
          setEditText(e.target.value);
        }}
      ></input>
      <button
        className="btn"
        onClick={updateText}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <MdCreate />
      </button>
      <button
        className="btn"
        onClick={() => dispatch(markDone({ id: id }))}
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <MdCheckBox />
      </button>
      <button
        className="btn"
        onClick={() => dispatch(remove({ id: id }))}
        style={{
          size: "",
          background: "none",
          border: "none",

          cursor: "pointer",
        }}
      >
        <MdDelete />
      </button>
    </div>
  );
}

export default ToDo;
