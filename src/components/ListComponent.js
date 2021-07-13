import React, { useState } from 'react'
import Form from './FormComponent'
import Task from './TaskComponent'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as actions from '../actions';
class List extends React.Component {
    setShow = (show) => {
        this.props.rewriteShow(show);
    };

    handleChangeTask = (task) => {
        if (!task || task.trim().length === 0) {
            window.alert("Musíte zadať názov úlohy.");
            return
        }
       this.props.addTodo(task);
    }

    editTask = (id, name) => {
        this.props.editTodo(name, id);
    }

    handleCompleteTask = (id) => {
        this.props.completeTodo(id);
    }
    handleSoftDeleteTask = (id) => {
        this.props.softDeleteTodo(id);
    }

    handleDeleteTask = (task) => {
        this.props.removeTodo(task.id);
    }

    showTasks = (show) => {
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
                            {this.showTasks(this.props.show)}
                        </ol>
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle drop="down" className={`mx-8 py-1 px-2 w-3/5 px-auto text-${this.props.color}-900 border-4 border-${this.props.color}-700 rounded-lg bg-${this.props.color}-300  hover:bg-${this.props.color}-400`}>
                            {this.props.show}
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

const mapStateToProps = state => ({
    show: state.todos.show
  });

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(actions.addTodo(text)),
    removeTodo: taskId => dispatch(actions.removeTodo(taskId)),
    editTodo: (text,taskId) => dispatch(actions.editTodo(text,taskId)),
    softDeleteTodo: taskId => dispatch(actions.softDeleteTodo(taskId)),
    completeTodo: taskId => dispatch(actions.completeTodo(taskId)),
    rewriteShow: text => dispatch(actions.rewriteShow(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(List);