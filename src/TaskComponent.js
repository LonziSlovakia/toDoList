import React, { useRef, useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

function Task({ task, color, funcs: { softDelete, hardDelete, complete, editTask } }) {
    const softDeletedClasses = task.softDeleted ? `bg-${color}-100` : `bg-${color}-300`
    const softDeletedIcon = task.softDeleted ? `bg-red-300 hover:bg-red-400` : `bg-${color}-300 hover:bg-${color}-400`
    const completedClass = task.completed ? 'line-through' : ''
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })
    const taskNameRef = useRef(null)

    taskNameRef?.current?.focus()

    const handleRemoveTask = () => {
        softDelete(task.id)
    }
    const handleCompleteTask = () => {
        complete(task.id)
    }

    const handleCompleteTask = () => {
        complete(task.id)
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
            editTask(edit.id, name)
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
            <div className="flex flex-col items-stretch md:items-center md:flex-row mb-3">
                <label className="flex-1 flex items-center m-1">
                    <input ref={taskNameRef} autoFocus type="text" className="flex-auto px-3 py-1 rounded-lg bg-input-dark font-medium text-text-primary placeholder-text-secondary focus:outline-none focus:ring-4 focus:ring-input-dark focus:ring-opacity-50" value={edit.value} onChange={handleTaskChange} onKeyDown={handleKeyDown} />
                </label>
                <button className="rounded-lg px-3 py-1 m-1 bg-input-light font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-input-light focus:ring-opacity-50 active:bg-input-dark" onClick={handleSaveTask}>Save task</button>
            </div>
        )
    }

    return (
        <li className={`py-1 px-2 border-b-2 border-t-2 border-${color}-700 text-${color}-900 ${softDeletedClasses} flex items-center`}>
            <div className={`mr-auto ml-auto break-all ${completedClass}`}>{task.task}</div>
            <div><input type="checkbox" className="form-checkbox ml-6 mr-1 mb-1 p-2" onChange={handleCompleteTask} checked={task.completed} /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`} onClick={handleEditTask}><FiEdit2 /></div>
            <div className={`${softDeletedIcon} rounded-lg p-1`} onClick={handleRemoveTask}><RiDeleteBin6Line /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`} onClick={() => hardDelete(task)}><FiXSquare /></div>
        </li>
    )
}

export default Task
