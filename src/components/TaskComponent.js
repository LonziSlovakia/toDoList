import React, { useRef, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";
import { connect } from 'react-redux';
import * as actions from '../actions';

function Task(task) {
    // const this.props.color = 'purple';
    const softDeletedClasses = task.softDeleted ? `bg-${this.props.color}-100` : `bg-${this.props.color}-300`
    const softDeletedIcon = task.softDeleted ? `bg-red-300 hover:bg-red-400` : `bg-${this.props.color}-300 hover:bg-${this.props.color}-400`
    const completedClass = task.completed ? 'line-through' : ''
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const taskNameRef = useRef(null)

    taskNameRef?.current?.focus()

    const handleSoftDeleteTask = (id) => {
        this.props.softDeleteTodo(id);
    }

    const handleDeleteTask = (task) => {
        this.props.removeTodo(task.id);
    }

    const handleCompleteTask = () => {
        this.props.completeTodo(task.id)
    }

    const handleEditTask = () => {
        setEdit({ id: task.id, value: task.task })
    }

    const handleTaskChange = (value) => {
        setEdit({ ...edit, value: value.target.value })
    }

    const handleSaveTask = () => {
        if (taskNameRef.current !== null) {
            const name = taskNameRef.current.value
            if (name === '') {
                setEdit({
                    id: null,
                    value: ''
                })
                return
            }
            this.props.editTask(edit.id, name)
            taskNameRef.current.value = ''
            setEdit({
                id: null,
                value: ''
            })
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSaveTask()
        }
    }

    if (edit.id) {
        return (
            <div className={`flex flex-col items-stretch md:items-center md:flex-row bg-${this.props.color}-300 border-b-2 border-t-2 border-${this.props.color}-700`}>
                <label className="flex-1 flex items-center m-1">
                    <input ref={taskNameRef} autoFocus type="text" className={`flex-auto m-2 px-3 py-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-${this.props.color}-700 focus:ring-opacity-50`} value={edit.value} onChange={handleTaskChange} onKeyDown={handleKeyDown} />
                </label>
                <button className={`rounded-lg px-3 py-1 m-1 font-medium focus:outline-none focus:ring-4 focus:ring-${this.props.color}-700 focus:ring-opacity-50 active:bg-input-dark`} onClick={() => handleSaveTask}>Uložiť zmeny</button>
            </div>
        )
    }

    return (
        <li className={`py-1 px-2 border-b-2 border-t-2 border-${this.props.color}-700 text-${this.props.color}-900 ${softDeletedClasses} flex items-center`}>
            <div className={`mr-auto ml-auto break-all ${completedClass}`}>{task.task}</div>
            <div><input type="checkbox" className={`form-checkbox ml-6 mr-1 mb-1 p-2 rounded focus:outline-none focus:ring-4 focus:ring-${this.props.color}-700 focus:ring-opacity-50`} onChange={() => handleCompleteTask} checked={task.completed} /></div>
            <div className={`hover:bg-${this.props.color}-400 rounded-lg p-1`} onClick={() => handleEditTask}><FiEdit2 /></div>
            <div className={`${softDeletedIcon} rounded-lg p-1`} onClick={() => handleSoftDeleteTask}><RiDeleteBin6Line /></div>
            <div className={`hover:bg-${this.props.color}-400 rounded-lg p-1`} onClick={() => handleDeleteTask(task)}><FiXSquare /></div>
        </li>
    )
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

