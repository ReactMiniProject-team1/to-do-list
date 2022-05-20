import { useState } from "react";

function ToDo({ todo, isdone, key, isDone }) {
  return (
    <li>
      <span
        style={{
          textDecoration: isdone ? "line-through" : "none",
          color: isdone ? "gray" : "balck",
        }}
        onClick={() => isDone(key)}
      >
        {todo}
      </span>
      <button style={{ background: "none", border: "none", cursor: "pointer" }}>
        ❌
      </button>
    </li>
  );
}

export default ToDo;
