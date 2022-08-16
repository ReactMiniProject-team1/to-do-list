import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAll, removeDones } from "../modules/reducer";

export default function RemoveButtons() {
  const toDos = useSelector((state) => state.todoSlice.toDos);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="clearAllBtn"
        onClick={() => {
          dispatch(removeAll());
        }}
        style={{ visibility: toDos.length === 0 ? "hidden" : "visible" }}
      >
        Remove All
      </button>
      <button
        className="clearAllBtn"
        onClick={() => {
          dispatch(removeDones());
        }}
        style={{ visibility: toDos.length === 0 ? "hidden" : "visible" }}
      >
        Remove Completed Task
      </button>
    </>
  );
}
