import React from 'react';
import Todo from './Todo.js';
import Todoer from './Todoer.js';

const Todos = props => {
    return(
        <div>
            <Todoer onAddTodo={props.onAddTodo} onTextChanges={props.onTextChanges} text={props.text} />
            <ul>
                {
                    props.todos.map((todo, index) => {
                    return <Todo 
                                key={todo.todo} 
                                todo={todo} 
                                onTodoClick={props.onTodoClick} 
                                index={index} />
                    })
                }          
            </ul>
        </div>
    )
}

export default Todos;