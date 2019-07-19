import React from 'react'

const ToDoListItem = (props) => {
    return (
        <div>
            <input type="checkbox" checked={props.completed} />
            <span>{props.title}</span>
            <button onClick={() => props.deleteToDoByIndex(props.index)}>Delete</button>
        </div>
    )
}

export default ToDoListItem