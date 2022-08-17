const localStorageMiddleware = (store) => (next) => (action) => {
  localStorage.setItem("toDoList", JSON.stringify(store.getState()));
  console.log("middleware");
  return next(action);
};

export default localStorageMiddleware;
