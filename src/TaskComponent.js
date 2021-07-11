import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

function Task(props) {
    const { task, color } = props
    return (
        <li className={`py-1 px-2 border-b-2 border-t-2 border-${color}-700 text-${color}-900 bg-${color}-300 flex items-center`}>
            <div className="inline-block pl-2 pr-8">{task.id}.</div>
            <div className="mr-auto ml-auto">{task.task}</div>
            <div><input type="checkbox" className="form-checkbox mx-2 mr-1 mb-1 p-2" /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`}><FiEdit2 /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`}><FiXSquare /></div>
            <div className={`hover:bg-${color}-400 rounded-lg p-1`}><RiDeleteBin6Line /></div>
        </li>
    )
}

export default Task
