import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

function Task({ task, color, softDelete }) {
    const softDeletedClasses = task.softDeleted ? `bg-${color}-100` : `bg-${color}-300`;
    const softDeletedIcon = task.softDeleted ? `bg-red-300 hover:bg-red-400` : `bg-${color}-300 hover:bg-${color}-400`;
    const completedClass = task.completed ? 'line-through' : '';

    const handleRemoveTask = () => {
        softDelete(task.id)
    }

    return (
        <li className={`py-1 px-2 border-b-2 border-t-2 border-${color}-700 text-${color}-900 ${softDeletedClasses} flex items-center`}>
            <div className="inline-block pl-2 pr-8">{task.id}.</div>
            <div className={`mr-auto ml-auto break-all ${completedClass}`}>{task.task}</div>
            <div><input type="checkbox" className="form-checkbox ml-6 mr-1 mb-1 p-2" checked={task.completed} /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`}><FiEdit2 /></div>
            <div className={`${softDeletedIcon} rounded-lg p-1`} onClick={handleRemoveTask}><RiDeleteBin6Line /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`}><FiXSquare /></div>
        </li>
    )
}

export default Task
