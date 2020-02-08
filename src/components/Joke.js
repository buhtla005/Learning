import React from 'react'

function Joke(props){
    return(
        <div class="joke">
            <div className="bold text-danger">{props.question}</div>
            <div className="text-light">{props.punchline}</div>
        </div>
    )
}

export default Joke