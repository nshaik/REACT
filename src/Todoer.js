import React from 'react';

const Todoer = (props) => {
    return(
        <form onSubmit={props.onAddTodo}>
            <input type="text" onChange={props.onTextChanges} value={props.text} />
        </form>
    )
}

export default Todoer;