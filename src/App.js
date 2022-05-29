import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToDoPage from "./routes/ToDoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
