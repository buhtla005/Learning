import React from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'

class Todo extends React.Component{

    /*
    const firstName = "Randy"
    const lastName = "Random"//IE6 sintaksa koristi ALTGR 7

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours < 12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "afternoon"
    }else{
        timeOfDay = "night"
    }

    const tStyle = {
        color: "#FF8C00",
        backgroundColor:"#FF2D00",
        fontSize: 40
    }
    */

    //passing down todo

    //zeljet cemo modificirati podatke sto znaci da ce se loadat data u component state
    
    constructor(){
        super()
        this.state = {
            todos: todoData
        }

        this.changeState = this.changeState.bind(this)
    }
    
    changeState(id){
        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(item => {
                if(item.id === id){
                    item.completed = !item.completed
                }
                return item
            })
            return{
                todos: updatedTodos
            }
        })
    }

    render(){
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} 
            item={item} changeState={this.changeState}/>)
            //MORAMO DODAT FUN JER SE TAKO PREKO PROPA PROSLJEDUJE!
        return(

            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default Todo