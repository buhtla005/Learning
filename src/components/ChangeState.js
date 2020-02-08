import React from 'react'

class ChangeState extends React.Component{

    constructor(){
        super()
        this.state={
            count:0
        }
        this.addFunction = this.addFunction.bind(this)
    }

    //State je ko odjeća. Kad želiš mijenjat ne modificiras odjecu neg staro mijenjas za novo
    addFunction(){
        this.setState( prevState => {
            return{
                count: prevState.count + 1
            }
        })
    }

    render(){
        return(
            <div className="container mt-5">
                <h1>{this.state.count}</h1>
                <button onClick={this.addFunction}>Change!</button>
            </div>
        )
    }
}

export default ChangeState