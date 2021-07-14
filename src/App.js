import React from 'react';
import { Dropdown } from 'react-bootstrap'
import List from './components/ListComponent'
import ColorItem from './components/ColorComponent'
import { connect } from 'react-redux';
import * as actions from './actions';
class App extends React.Component {

  handleChangeColor = (color) => {
    this.props.rewriteColor(color);
  }

  render() {
    const { color, tasks } = this.props;

    return (
      <div className={`bg-${color}-300 min-h-screen text-center font-robotoslab`}>
        <header className="flex justify-between ">
          <Dropdown drop="down">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className={`my-7 mx-6 p-1 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>
              Farba
            </Dropdown.Toggle>


            <Dropdown.Menu className="mt-2">
              {['blue', 'red', 'pink', 'yellow', 'green', 'purple', 'gray'].map((color, i) => {
                return (<ColorItem onClick={() => this.handleChangeColor(color)} color={color} id={i} key={i} />)
              })}
            </Dropdown.Menu>
          </Dropdown>

          <h1 className={`mx-8 text-${color}-700 font-sansita text-5xl text-center py-4`}>Marekov To-Do-List</h1>
        </header>
        <List />
        <div className={`w-full bg-${color}-500 h-16 fixed bottom-0 flex place-items-center justify-around`}>&#169; Kormos 2021</div>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  color: state.color,
  tasks: state.todos
})

const mapDispatchToProps = dispatch => ({
  rewriteColor: text => dispatch(actions.rewriteColor(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
