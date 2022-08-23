import React from 'react';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoHead from './components/ToDoHead';
import ToDoBody from './components/ToDoBody';

function App() {
  return (
    <>
      <ToDoTemplate>
        <ToDoHead></ToDoHead>
        <ToDoBody></ToDoBody>
      </ToDoTemplate>
    </>
  );
}
export default App;