import { Dropdown } from 'react-bootstrap'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';

class ColorItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.color,
            id: this.props.id,
            onClick: this.props.onClick
        }
    }

    render() {
        const { color, id, onClick } = this.state;
        return (
            <div>
                <Dropdown.Item href={`#/color-${id}`} >
                    <div onClick={() => onClick(color)} className={`-ml-2 mt-0.5 px-2 border-4 border-${color}-500 text-${color}-900 rounded-lg bg-${color}-300 hover:bg-${color}-400`}>
                        {color}
                    </div>
                </Dropdown.Item>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    length: state.todos.length
})

const mapDispatchToProps = dispatch => ({
    onSubmit: text => dispatch(actions.addTodo(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ColorItem);
