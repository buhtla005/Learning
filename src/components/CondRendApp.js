import React, {Component} from 'react'

class CondRendApp extends Component{

    constructor(){
        super()
        this.state={
            logged: false
        }
        this.changeState = this.changeState.bind(this)
    }

    checkState(state){
        return state ? "logged in." : "logged out."
    }

    changeState(){
        this.setState(cs => {
            return{
                logged: !cs.logged
            }
        })
    }

    render(){
    return(
        // Bolji nacin => mogal sam i u var spremit button text i onda samo umetnut var  umjesto texta u 1 button... da nisam ko seljak
        <div class="container mt-5">
            
            <h1>The user is currently {this.checkState(this.state.logged)}</h1>
            {this.state.logged ? 
            <button type="button" class="btn btn-info" onClick={this.changeState}>Log out</button> :
            <button type="button" class="btn btn-info" onClick={this.changeState}>Log in</button>}
    
        </div>
    )}
}

export default CondRendApp