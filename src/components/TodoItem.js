import React from 'react'

function TodoItem(props){
    
    return(
        <div className='todo-item row'>
            <input 
            type="checkbox" 
            checked={props.item.completed} 
            onClick={() => props.changeState(props.item.id)} 
            className="col-4"/> 
            <p className="col-8">{props.item.text}</p>
        </div>
    )
}

export default TodoItem