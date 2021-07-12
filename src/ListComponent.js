import React, { useState } from 'react'
import Form from './FormComponent'
import Task from './TaskComponent'
import { Dropdown } from 'react-bootstrap'

const List = (props) => {
    const { color } = props;
    const [tasks, setTask] = useState([
        { id: 1, task: 'Dokončiť react appku', completed: false, softDeleted: true },
        { id: 2, task: 'Naučiť sa react', completed: true, softDeleted: true },
        { id: 3, task: 'Nebyť perfekcionalista', completed: true, softDeleted: false },
        { id: 4, task: 'Deleted task', completed: false, softDeleted: false }
    ])
    const [show, setShow] = useState('Všetky')

    const handleChangeTask = (task) => {
        if (!task) {
            window.alert("Zadajte názov úlohy.")
            return
        }
        let ids = (tasks).map((task2) => task2.id)
        let newId = Math.max(...ids) + 1;
        let newTask = { id: newId, task: (task.charAt(0).toUpperCase() + task.slice(1)), completed: false, softDeleted: false }
        let newValue = [...tasks, newTask]
        setTask(newValue);
    };

    const editTask = (id, name) => {
        const newTask = [...tasks]
        const task = newTask.find(task => task.id === id)
        task.task = name
        setTask(newTask)
    }

    const handleCompleteTask = (id) => {
        const newTasks = [...tasks]
        const task = newTasks.find(task => task.id === id)
        task.completed = !task.completed
        setTask(newTasks)
    }
    const handleSoftDeleteTask = (id) => {
    const newTasks = [...tasks]
    const task = newTasks.find(task => task.id === id)
        task.softDeleted = !task.softDeleted
        setTask(newTasks)
    }

    const handleDeleteTask = (task) => {
        const newTasks = [...tasks]
        setTask(newTasks.filter(task2 => task2.id !== task.id))
    }

    const showTasks = (show) => {
        const funcs = {
            softDelete: handleSoftDeleteTask,
            hardDelete: handleDeleteTask,
            complete: handleCompleteTask,
            editTask
        }

        if (show === "Úlohy") {
            return (tasks.filter(task => !task.completed && !task.softDeleted)).map((task) => <Task funcs={funcs} key={task.id} task={task} color={color} />
            )
        } else if (show === "Všetky") {
            return tasks.map((task) => <Task funcs={funcs} key={task.id} task={task} color={color} />
            )
        } else if (show === "Splnené") {
            return (tasks.filter(task => task.completed)).map((task) => <Task funcs={funcs} key={task.id} task={task} color={color} />
            )
        } else if (show === "Kôš") {
            return (tasks.filter(task => task.softDeleted)).map((task) => <Task funcs={funcs} key={task.id} task={task} color={color} />
            )
        }
    }

    return (
        <>
            <Form color={color} odoslanie={handleChangeTask} />
            <div className="mt-8 flex justify-center">

                <div className={`w-1/2 text-2xl bg-${color}-500 border-4 border-b-2 border-${color}-700 inline-block`}>
                    <p className={`p-1 border-2 border-b-4 border-${color}-700 bg-${color}-400 tracking-wide`}>Úlohy:</p>
                    <ol>
                        {showTasks(show)}
                    </ol>
                </div>

                <Dropdown>
                    <Dropdown.Toggle drop="down" className={`mx-8 py-1 px-2 w-3/5 px-auto text-${color}-900 border-4 border-${color}-700 rounded-lg bg-${color}-300  hover:bg-${color}-400`}>
                        {show}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={`block py-1 mt-0.5 px-2 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300`}>
                        <Dropdown.Item onClick={() => setShow("Úlohy")} className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Úlohy</Dropdown.Item>
                        <Dropdown.Divider className="mt-0.5 border-b-2 border-black" />
                        <Dropdown.Item onClick={() => setShow("Všetky")} className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Všetky</Dropdown.Item>
                        <Dropdown.Item onClick={() => setShow("Splnené")} className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Splnené</Dropdown.Item>
                        <Dropdown.Item onClick={() => setShow("Kôš")} className={`block mt-0.5 px-2 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>Kôš</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}


export default List