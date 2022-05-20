function ToDos({ toDos, deleteToDo }) {
  return (
    <div>
      {toDos.map((todo, idx) => (
        <span key={idx}>
          <li>
            {todo}
            <button>❌</button>
          </li>
        </span>
      ))}
    </div>
  );
}

export default ToDos;
