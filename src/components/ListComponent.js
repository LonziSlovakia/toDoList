import React from 'react'
import Form from './FormComponent'
import Task from './TaskComponent'
import { Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux';
import * as actions from '../actions';
class List extends React.Component {
    setShow = (show) => {
        this.props.rewriteShow(show);
    };

    showTasks = (show) => {
        let array = this.props.tasks
        console.log(array);
        array = array.sort(function (a, b) { return (b.completed - a.completed) });
        console.log(array);

        if (show === "Úlohy") {
            return (this.props.tasks.filter(task => !task.completed && !task.softDeleted)).map((task) => <Task key={task.id} task={task} />
            )
        } else if (show === "Všetky") {
            return this.props.tasks.map((task) => <Task key={task.id} task={task} />
            )
        } else if (show === "Splnené") {
            return (
                this.props.tasks.filter(task => task.completed)).map((task) => <Task key={task.id} task={task} />
                )
        } else if (show === "Kôš") {
            return (this.props.tasks.filter(task => task.softDeleted)).map((task) => <Task key={task.id} task={task} />
            )
        }
    }

    render() {

        return (
            <>
                <Form />
                <div className="mt-8 flex justify-center pb-24">

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
    color: state.color,
    show: state.show,
    tasks: state.todos
});

const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(actions.addTodo(text)),
    removeTodo: taskId => dispatch(actions.removeTodo(taskId)),
    editTodo: (text, taskId) => dispatch(actions.editTodo(text, taskId)),
    softDeleteTodo: taskId => dispatch(actions.softDeleteTodo(taskId)),
    completeTodo: taskId => dispatch(actions.completeTodo(taskId)),
    rewriteShow: text => dispatch(actions.rewriteShow(text))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);