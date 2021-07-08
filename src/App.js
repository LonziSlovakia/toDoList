import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import List from './ListComponent'

const App = () => {
  const [color, setColor] = useState("purple")

  const handleChangeColor = () => {
    setColor("red")
  }

  return (
    <div className={`bg-${color}-300 min-h-screen text-center font-robotoslab`}>
      <header className="flex">
        <Dropdown drop="right">
          <button className={`my-7 mx-6 p-1 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Farba
            </Dropdown.Toggle>
          </button>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" >
              <svg width="30" height="30" className="p-1 border-4 border-yellow-500 text-yellow-900 rounded-lg bg-yellow-300 hover:bg-yellow-400">
                <rect width="30" height="30" fill="yellow" />
              </svg>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h1 className={`text-${color}-700 font-sansita text-5xl text-center py-4`}>Marekov To-Do-List</h1>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
