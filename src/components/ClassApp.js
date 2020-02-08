import React from 'react'

{/*
function ClassApp(){
    return(
        <div className="container rounded">
            <h1>Some class code 1.</h1>
        </div>
    )
}
*/}

class ClassApp extends React.Component{
    //svaka klasna mora imat render komponentu
    //funkcijske komponente s propsa se pozivaju sa this.props
    
    render(){
        const time = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        return(
            <div className="container rounded">
                <h1>{time}</h1>
            </div>
        )
    }
}

export default ClassApp