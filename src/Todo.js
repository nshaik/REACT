import React from 'react';

const Todo = props => {
    return (
        <li 
            onClick={() => {props.onTodoClick(props.index)}}
            className = {props.todo.completed ? 'completed' : ""}
        >{props.todo.todo}</li>
    )
}

export default Todo;