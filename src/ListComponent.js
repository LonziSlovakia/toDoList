import React, { useState } from 'react'
import Form from './FormComponent'
import Task from './TaskComponent'
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'

const List = (props) => {
    const { color } = props;
    const [tasks, setTask] = useState([
        { id: 1, task: 'Dokončiť react appku', completed: false, softDeleted: false },
        { id: 2, task: 'Naučiť sa react', completed: false, softDeleted: false }
    ])

    const handleChangeTask = (task) => {
        let ids = (tasks).map((task2) => task2.id)
        let newId = Math.max(...ids) + 1;
        let newTask = { id: newId, task: (task.charAt(0).toUpperCase() + task.slice(1)), completed: false, softDeleted: false }
        let newValue = [...tasks, newTask]
        setTask(newValue);
    };

    return (
        <>
            <Form color={color} odoslanie={handleChangeTask} />
            <div className="mt-8 flex justify-center">

                <ul className={`text-2xl bg-${color}-500 border-4 border-b-2 border-${color}-700 inline-block`}>
                    <li className={`p-1 border-2 border-b-4 border-${color}-700 bg-${color}-400 tracking-wide`}>Úlohy:</li>
                    {tasks.map((task) =>
                        <Task key={task.id} task={task} color={color} />
                    )}
                </ul>

                <Dropdown>
                    <Dropdown.Toggle drop="down" className={`mx-8 p-1 text-${color}-900 border-4 border-${color}-700 rounded-lg bg-${color}-300  hover:bg-${color}-400`}>
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={`block py-1 mt-0.5 px-2 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300`}>
                        <Dropdown.Item className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Úlohy</Dropdown.Item>
                        <Dropdown.Divider className="mt-0.5 border-b-2 border-black" />
                        <Dropdown.Item className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Všetky</Dropdown.Item>
                        <Dropdown.Item className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Splnené</Dropdown.Item>
                        <Dropdown.Item className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Kôš</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}


export default List