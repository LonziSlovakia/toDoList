import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const App = () => {
  const [color, setColor] = useState("purple")

  const handleChangeColor = () => {
    setColor("red")
  }

  return (
    <div className={`bg-${color}-300 min-h-screen text-center font-robotoslab`}>
      <header className="flex">
      <Dropdown drop="right">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <h1 className={`text-${color}-700 font-sansita text-5xl text-center py-4`}>Marekova ToDoList appka</h1>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
