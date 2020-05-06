import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '1px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ? 'line-through': 'none'
       }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> {''}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={{ background: '#ff0000',
                        color: 'white',border: 'none',padding: '5px 5px',borderRadius: "50%",cursor: 'pointer',float: 'right'}}>x
                    </button> 
                </p>
            </div>
        );
    }
}

// PropType
TodoItem.propTypes = {
    todo: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

export default TodoItem;