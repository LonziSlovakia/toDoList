import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Form = (props) => {
    const { color } = props
    const [task, setTask] = useState('');
    const handleAddTodo = task => {
        if (!task || task.trim().length === 0) {
            window.alert("Musíte zadať názov úlohy.");
            return
        }
        props.addTodo(task);
    }

    return (
        <form onSubmit={(e) => { e.preventDefault(); handleAddTodo(task); setTask('') }}>
            <input onChange={e => setTask(e.target.value)} value={task} name="name" type="text" className={`border-b-2 border-${color}-500 bg-transparent text-${color}-700 focus:outline-none focus:border-${color}-700 text-center`} />
            <input type="submit" value="Pridať úlohu" className={`my-7 mx-2 p-1 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400 focus:shadow-inner`} />
        </form>
    );
}

const mapStateToProps = state => ({
    color: state.color
})

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(actions.addTodo(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form);