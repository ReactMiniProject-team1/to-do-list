import React, { useRef, useEffect } from "react";
import { MdPostAdd } from "react-icons/md";

export default function InputField({ input, getInput, addToList }) {
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
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
        <MdPostAdd />
      </button>
    </form>
  );
}
