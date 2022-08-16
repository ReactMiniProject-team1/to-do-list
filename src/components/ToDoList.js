import React from "react";
import ToDo from "./ToDo";
import { useSelector } from "react-redux/es/exports";

function ToDoList() {
  const toDos = useSelector((state) => state.todoSlice.toDos);

  return (
    <>
      <div>
        {toDos.map((each) => {
          console.log("why..?rerener?");
          return <ToDo key={each.id} toDo={each} />;
        })}
      </div>
    </>
  );
}

export default ToDoList;
