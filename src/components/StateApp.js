import React from 'react'

//ako zelimo state koristit - mora bit class based component
//super samo dohvaca neke elemente iz globalne super varijable "Component" i dodaje...
//state je uvijek objekt
class StateApp extends React.Component{

    constructor(){
        super()
        this.state = {
            name: "Drunken",
            age: 18
        }
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old!</h3>
                
            </div>
        )
    }
}

export default StateApp