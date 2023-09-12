import './App.css';
import Task1 from './views/Task1';
import Task2 from './views/Task2';
import Task3 from './views/Task3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Sanity EDU course
      </header>
      <body className='App-body'>
        <h1>Task 1</h1>
        <Task1 />
        <h1>Task 2</h1>
        <Task2 />
        <h1>Task 3</h1>
        <Task3 />
        <h1>Task 4</h1>
      </body>
    </div>
  );
}

export default App;
