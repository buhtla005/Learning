import React from 'react'

class StateHomeApp extends React.Component{

    constructor(){
        super()
        this.state={
            isLoggedIn: true
        }
    }

    render(){
        
        let stanjes
        if(this.state.isLoggedIn == true){
            stanjes = "in"
        } else {
            stanjes= "out"
        }

        return(
            <div>
                <h1>You are currently logged {stanjes}</h1>
            </div>
        )
    }
}

export default StateHomeApp