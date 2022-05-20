import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <div className='input'>
        <input type='text' placeholder='type your to-do' />
        <button className='addBtn'>Add</button>
      </div>
      <div>
        <ul>
          <li>to do contents</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
