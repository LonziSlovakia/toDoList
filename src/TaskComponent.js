import React from 'react'

function Task(props) {
    const { task } = props
    return (
        <li>
            {task.task},{task.id}
        </li>
    )
}

export default Task
