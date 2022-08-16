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
          const res = window.confirm("Are you sure to remove ALL?");
          if (res) dispatch(removeAll());
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
        Remove Completed Tasks
      </button>
    </>
  );
}
