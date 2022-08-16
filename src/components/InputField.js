import React, { useRef, useEffect, useState } from "react";
import { MdPostAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { create, getText } from "../modules/reducer";

export default function InputField() {
  const inputRef = useRef("");
  const [text, setText] = useState("");
  const input = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const getInput = (e) => {
    const value = e.target.value;
    setText(value);
  };

  const addToList = (e) => {
    e.preventDefault();
    if (text) {
      //dispatch(getText({ text: text }));
      dispatch(create({ text: text }));
      setText("");
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className="input">
      <input
        name="todo"
        type="text"
        placeholder="type your to-do"
        value={text}
        onChange={getInput}
        ref={inputRef}
      />
      <button className="addBtn" onClick={addToList}>
        <MdPostAdd />
      </button>
    </form>
  );
}
