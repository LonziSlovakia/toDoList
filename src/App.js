import React from 'react';
import { Dropdown } from 'react-bootstrap'
import List from './ListComponent'
import ColorItem from './ColorComponent'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'purple'
    };
  }

  handleChangeColor = (color) => this.setState({ color });

  render() {
    const { color } = this.state;

    return (
      <div className={`bg-${color}-300 min-h-screen text-center font-robotoslab`}>
        <header className="flex justify-between">
          <Dropdown drop="down">
            <button className={`my-7 mx-6 p-1 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Farba
              </Dropdown.Toggle>
            </button>

            <Dropdown.Menu className="mt-2">
              {['blue', 'red', 'pink', 'yellow', 'green', 'purple', 'gray'].map((color, i) => {
                return (<ColorItem onClick={this.handleChangeColor} color={color} id={i} />)
              })}
            </Dropdown.Menu>
          </Dropdown>
          <h1 className={`mx-8 text-${color}-700 font-sansita text-5xl text-center py-4`}>Marekov To-Do-List</h1>
        </header>
        <List />
      </div >
    );
  }
}

export default App;
