import React from 'react'

function Ship(props){
    return(
        <div>
            <h1>Ship: {props.name}</h1>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Ship