import React, { useState } from 'react'
import Form from './FormComponent'
import Task from './TaskComponent'

const List = (props) => {
    const { color } = props;
    const [tasks, setTask] = useState([
        { id: 1, task: 'Dokončiť react appku', completed: false, softDeleted: false },
        { id: 2, task: 'Naučiť sa react', completed: false, softDeleted: false }
    ])

    const handleChangeTask = (task) => {
        let ids = (tasks).map((task2) => task2.id)
        let newId = Math.max(...ids) + 1;
        let newTask = { id: newId, task: task, completed: false, softDeleted: false }
        let newValue = [...tasks, newTask]
        setTask(newValue);
    };

    return (
        <>
            <Form color={color} odoslanie={handleChangeTask} />
            <ul className={`bg-${color}-500 border-4 border-${color}-700 inline-block px-2`}>
                {tasks.map((task) =>
                    <Task key={task.id} task={task} color={color}>{task.task}</Task>
                )}
            </ul>
        </>
    )
}


export default List