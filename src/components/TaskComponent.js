import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { connect } from 'react-redux';
import * as actions from '../actions';

class Task extends React.Component {
    constructor(task) {
        super();
        this.taskNameRef = React.createRef(null)
        this.state = { edit: '' }
    }

    handleSoftDeleteTask = (id) => {
        this.props.softDeleteTodo(id);
    }

    handleDeleteTask = (task) => {
        this.props.removeTodo(task.id);
    }

    handleCompleteTask = (task) => {
        this.props.completeTodo(this.props.task.id)
    }

    handleEditTask = (task) => {
        console.log("chichi");
        this.setState({ id: this.props.task.id, value: this.props.task.task })
    }

    handleTaskChange = (value) => {
        this.setState({ ...this.state.edit, value: value.target.value })
    }

    handleSaveTask = () => {
        if (this.taskNameRef.current !== null) {
            const name = this.taskNameRef.current.value
            if (name === '') {
                this.setState({
                    id: null,
                    value: ''
                })
                return
            }
            this.props.editTask(this.state.edit.id, name)
            this.taskNameRef.current.value = ''
            this.setState({
                id: null,
                value: ''
            })
        }
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleSaveTask()
        }
    }

    render() {
        const task = this.props.task
        const softDeletedClasses = task.softDeleted ? `bg-${this.props.color}-100` : `bg-${this.props.color}-300`
        const softDeletedIcon = task.softDeleted ? `bg-red-300 hover:bg-red-400` : `bg-${this.props.color}-300 hover:bg-${this.props.color}-400`
        const completedClass = task.completed ? 'line-through' : ''

        this.taskNameRef?.current?.focus()

        if (this.state.edit.id) {
            return (
                <div className={`flex flex-col items-stretch md:items-center md:flex-row bg-${this.props.color}-300 border-b-2 border-t-2 border-${this.props.color}-700`}>
                    <label className="flex-1 flex items-center m-1">
                        <input ref={this.taskNameRef} autoFocus type="text" className={`flex-auto m-2 px-3 py-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-${this.props.color}-700 focus:ring-opacity-50`} value={this.state.edit.value} onChange={this.handleTaskChange} onKeyDown={this.handleKeyDown} />
                    </label>
                    <button className={`rounded-lg px-3 py-1 m-1 font-medium focus:outline-none focus:ring-4 focus:ring-${this.props.color}-700 focus:ring-opacity-50 active:bg-input-dark`} onClick={() => this.handleSaveTask}>Uložiť zmeny</button>
                </div>
            )
        }

        return (
            <li className={`py-1 px-2 border-b-2 border-t-2 border-${this.props.color}-700 text-${this.props.color}-900 ${softDeletedClasses} flex items-center`}>
                <div className={`mr-auto ml-auto break-all ${completedClass}`}>{task.task}</div>
                <div><input type="checkbox" className={`form-checkbox ml-6 mr-1 mb-1 p-2 rounded focus:outline-none focus:ring-4 focus:ring-${this.props.color}-700 focus:ring-opacity-50`} onChange={() => this.handleCompleteTask(task)} checked={task.completed} /></div>
                <div className={`hover:bg-${this.props.color}-400 rounded-lg p-1`} onClick={() => this.handleEditTask(task)}><FiEdit2 /></div>
                <div className={`${softDeletedIcon} rounded-lg p-1`} onClick={() => this.handleSoftDeleteTask(task.id)}><RiDeleteBin6Line /></div>
                <div className={`hover:bg-${this.props.color}-400 rounded-lg p-1`} onClick={() => this.handleDeleteTask(task)}><FiXSquare /></div>
            </li>
        )
    }
}


const mapStateToProps = state => ({
    color: state.color,
    tasks: state.todos
})

const mapDispatchToProps = dispatch => ({
    removeTodo: taskId => dispatch(actions.removeTodo(taskId)),
    softDeleteTodo: taskId => dispatch(actions.softDeleteTodo(taskId)),
    completeTodo: taskId => dispatch(actions.completeTodo(taskId)),
    editTask: task => dispatch(actions.editTodo(task))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Task);

