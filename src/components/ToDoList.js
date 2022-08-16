import React from "react";
import ToDo from "./ToDo";
import { useSelector } from "react-redux/es/exports";

function ToDoList() {
  const toDos = useSelector((state) => state.todoSlice.toDos);

  return (
    <>
      <div>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} toDo={toDo} />
        ))}
      </div>
    </>
  );
}

export default ToDoList;
