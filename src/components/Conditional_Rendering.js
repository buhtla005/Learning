//ALL THE LIFECYCLE!
//Conditional rendering je loading screen kinda
import React, {Component} from 'react'
import Conditional from './Conditional'

class CR_App extends Component{

    constructor(){
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)//1.5 sec
    }

    //app bi trebala bit zaduzena za loadanje pa je bolje prebacit u nju tj. sto god stavimo u conditional
    // component da se prikazuje se treba prikazivat kad app odluci i pozove
    render(){
        return(
            /*
            <div>
                <Conditional isLoading={this.state.isLoading}/>
            </div>
            */
           <div>
               {this.state.isLoading ?
               <h1>Loading...</h1> :
               <Conditional />}
           </div>
        )
    }
}

export default CR_App