import React from "react";
import { Provider } from "react-redux";
import { store } from "./modules/store";

import ToDoPage from "./routes/ToDoPage";

function App() {
  return (
    <Provider store={store}>
      <ToDoPage />;
    </Provider>
  );
}

export default App;
