import React from 'react'

function Task(props) {
    const { task, color } = props
    return (
        <li className={`py-1 px-2 border-b-2 border-t-2 border-${color}-700 text-${color}-900 bg-${color}-300 flex`}>
            <div className="inline-block pl-2 pr-8">{task.id}.</div>
            <div className="mr-auto ml-auto">{task.task}</div>
        </li>
    )
}

export default Task
