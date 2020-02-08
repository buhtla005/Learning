import React from 'react'

function EventHandlerApp(){

    let i = 0
    const v = "Vedran"
    function myFunction(i){
        console.log("I WAS CLICKED!")
    }

    function myFunction2(v){
        i++
        console.log("Hello "+v+" "+i+"!")
    }

    return(
        <div className="container mt-5">
            <img src="https://www.fillmurray.com/200/100"/>
            <br/>
            <br/>
            <button onClick={myFunction(i)} onMouseOver={myFunction2(v)}>Click Me</button>
        </div>
    )
}

export default EventHandlerApp