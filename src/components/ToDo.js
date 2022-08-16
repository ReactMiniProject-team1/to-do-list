import React, { useState, useRef } from "react";
import { MdDelete, MdCheckBox, MdCreate, MdStarRate } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove, markDone, update, prioritize } from "../modules/reducer";

function ToDo({ toDo }) {
  const { id, text, isDone, isImportant } = toDo;

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const inputRef = useRef("");

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
      <button
        className="btn"
        onClick={() => {
          dispatch(prioritize({ id: id }));
        }}
        style={{ color: isImportant !== 100 ? "orange" : "black" }}
      >
        <MdStarRate />
      </button>
      {!isEditing ? (
        <span
          style={{
            textDecoration: isDone ? "line-through" : "none",
            color: isDone ? "gray" : "black",
          }}
        >
          {text}
        </span>
      ) : (
        <input
          type="text"
          value={editText}
          ref={inputRef}
          style={{ display: "inline" }}
          onChange={(e) => {
            setEditText(e.target.value);
          }}
          //edit button 눌렀을 때 이렇게 동작하게 하고 싶은데..
          onClick={() => {
            inputRef.current.select();
          }}
        ></input>
      )}
      <button className="btn" onClick={updateText}>
        <MdCreate />
      </button>
      <button
        className="btn"
        onClick={() => dispatch(markDone({ id: id }))}
        disabled={isEditing ? true : false}
      >
        <MdCheckBox />
      </button>
      <button className="btn" onClick={() => dispatch(remove({ id: id }))}>
        <MdDelete />
      </button>
    </div>
  );
}

export default ToDo;
