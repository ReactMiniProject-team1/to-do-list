import React from "react";
import ToDo from "./ToDo";

function ToDoList({ toDos, onRemove, onCrossOut }) {
  return (
    <div>
      {toDos.map((each) => (
        <ToDo
          key={each.id}
          toDo={each}
          onRemove={onRemove}
          onCrossOut={onCrossOut}
        />
      ))}
    </div>
  );
}

export default ToDoList;
