import React, {Component} from 'react'
import Messages from './Messages'

class MessageApp extends Component{

    constructor(props){
        super(props)
        this.state = {
            unreadMessages: ['Bravo', 'Nismo prvaci']
        }
    }

    render(){
        return(

           <div>
               {this.state.unreadMessages.length < 0 ?
               <h1>You don't have any new messages.</h1> :
               <Messages unreadMessages={this.state.unreadMessages}/>}
           </div>
        )
    }
}

export default MessageApp