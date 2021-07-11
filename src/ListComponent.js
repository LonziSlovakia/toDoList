import React from 'react'
import Form from './FormComponent';
import Task from './TaskComponent'

const List = (props) => {
    const { color } = props;
    const tasks = [{ id: 1, task: 'Dokončiť react appku', completed: false, softDeleted: false }, { id: 2, task: 'Naučiť sa react', completed: false, softDeleted: false }]


    return (
        <>
            <Form color={color} />
            <ul className={`bg-${color}-500 border-4 border-${color}-700 rounded-md inline-block px-2`}>
                {tasks.map((task) =>
                    <Task task={task} color={color}>{task.task}</Task>
                )}
            </ul>
        </>
    )
}


export default List