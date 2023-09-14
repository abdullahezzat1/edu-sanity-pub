import {Link} from 'react-router-dom'
import './App.css'
import {ROUTES} from './routes'

function renderBody(CurrentTask = null) {
  if (CurrentTask) {
    return <CurrentTask />
  }

  return (
    <ul>
      <li>
        <Link to="/task1">Task 1</Link>
      </li>
      <li>
        <Link to="/task2">Task 2</Link>
      </li>
      <li>
        <Link to="/task3">Task 3</Link>
      </li>
      <li>
        <Link to="/task4">Task 4</Link>
      </li>
      <li>
        <Link to="/task5">Task 5</Link>
      </li>
      <li>
        <Link to="/task6">Task 6</Link>
      </li>
    </ul>
  )
}

function App(props) {
  const {route} = props

  const CurrentTask = ROUTES[route]

  return (
    <div className="App">
      <header className="App-header">Sanity EDU course</header>
      <body className="App-body">{renderBody(CurrentTask)}</body>
    </div>
  );
}

export default App
