import React, { useState } from 'react'
import Form from './FormComponent'
import Task from './TaskComponent'
import { Dropdown } from 'react-bootstrap'
export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color,
            tasks: [{ id: 1, task: 'Úloha v koši', completed: false, softDeleted: true },
            { id: 2, task: 'Splnená Úloha v koši', completed: true, softDeleted: true },
            { id: 3, task: 'Splnená úloha', completed: true, softDeleted: false },
            { id: 4, task: 'Nesplnená úloha', completed: false, softDeleted: false }
            ],
            show: 'Všetky'
        }
    }

    setTask = (tasks) => this.setState({ tasks });
    setShow = (show) => this.setState({ show });

    handleChangeTask = (task) => {
        if (!task || task.trim().length === 0) {
            window.alert("Musíte zadať názov úlohy.")
            return
        }
        let ids = (this.state.tasks).map((task2) => task2.id)
        let newId = Math.max(...ids) + 1;
        let newTask = { id: newId, task: (task.charAt(0).toUpperCase() + task.slice(1)), completed: false, softDeleted: false }
        let newValue = [...this.state.tasks, newTask]
        this.setTask(newValue);
    };

    editTask = (id, name) => {
        const newTask = [...this.state.tasks]
        const task = newTask.find(task => task.id === id)
        task.task = name
        this.setTask(newTask)
    }

    handleCompleteTask = (id) => {
        const newTasks = [...this.state.tasks]
        const task = newTasks.find(task => task.id === id)
        task.completed = !task.completed
        this.setTask(newTasks)
    }
    handleSoftDeleteTask = (id) => {
        const newTasks = [...this.state.tasks]
        const task = newTasks.find(task => task.id === id)
        task.softDeleted = !task.softDeleted
        this.setTask(newTasks)
    }

    handleDeleteTask = (task) => {
        const newTasks = [...this.state.tasks]
        this.setTask(newTasks.filter(task2 => task2.id !== task.id))
    }

    showTasks = (show) => {
        this.state.tasks.sort(function (a, b) { return (b.completed - a.completed) });

        if (show === "Úlohy") {
            return (this.state.tasks.filter(task => !task.completed && !task.softDeleted)).map((task) => <Task softDelete={this.handleSoftDeleteTask} hardDelete={this.handleDeleteTask} complete={this.handleCompleteTask} editTask={this.editTask} key={task.id} task={task} color={this.props.color} />
            )
        } else if (show === "Všetky") {
            return this.state.tasks.map((task) => <Task softDelete={this.handleSoftDeleteTask} hardDelete={this.handleDeleteTask} complete={this.handleCompleteTask} editTask={this.editTask} key={task.id} task={task} color={this.props.color} />
            )
        } else if (show === "Splnené") {
            return (this.state.tasks.filter(task => task.completed)).map((task) => <Task softDelete={this.handleSoftDeleteTask} hardDelete={this.handleDeleteTask} complete={this.handleCompleteTask} editTask={this.editTask} key={task.id} task={task} color={this.props.color} />
            )
        } else if (show === "Kôš") {
            return (this.state.tasks.filter(task => task.softDeleted)).map((task) => <Task softDelete={this.handleSoftDeleteTask} hardDelete={this.handleDeleteTask} complete={this.handleCompleteTask} editTask={this.editTask} key={task.id} task={task} color={this.props.color} />
            )
        }
    }

    render() {

        return (
            <>
                <Form color={this.props.color} odoslanie={this.handleChangeTask} />
                <div className="mt-8 flex justify-center">

                    <div className={`w-1/2 text-2xl bg-${this.props.color}-500 border-4 border-b-2 border-${this.props.color}-700 inline-block`}>
                        <p className={`p-1 border-2 border-b-4 border-${this.props.color}-700 bg-${this.props.color}-400 tracking-wide`}>Úlohy:</p>
                        <ol>
                            {this.showTasks(this.state.show)}
                        </ol>
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle drop="down" className={`mx-8 py-1 px-2 w-3/5 px-auto text-${this.props.color}-900 border-4 border-${this.props.color}-700 rounded-lg bg-${this.props.color}-300  hover:bg-${this.props.color}-400`}>
                            {this.state.show}
                        </Dropdown.Toggle>

                        <Dropdown.Menu className={`block py-1 mt-0.5 px-2 border-4 border-${this.props.color}-500 text-${this.props.color}-900 rounded-lg bg-${this.props.color}-300`}>
                            <Dropdown.Item onClick={() => this.setShow("Úlohy")} className={`block mt-0.5 px-2 text-${this.props.color}-900 rounded-lg bg-${this.props.color}-300 hover:bg-${this.props.color}-400`}>Úlohy</Dropdown.Item>
                            <Dropdown.Divider className="mt-0.5 border-b-2 border-black" />
                            <Dropdown.Item onClick={() => this.setShow("Všetky")} className={`block mt-0.5 px-2 text-${this.props.color}-900 rounded-lg bg-${this.props.color}-300 hover:bg-${this.props.color}-400`}>Všetky</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setShow("Splnené")} className={`block mt-0.5 px-2 text-${this.props.color}-900 rounded-lg bg-${this.props.color}-300 hover:bg-${this.props.color}-400`}>Splnené</Dropdown.Item>
                            <Dropdown.Item onClick={() => this.setShow("Kôš")} className={`block mt-0.5 px-2 text-${this.props.color}-900 rounded-lg bg-${this.props.color}-300 hover:bg-${this.props.color}-400`}>Kôš</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </>
        )
    }
}
