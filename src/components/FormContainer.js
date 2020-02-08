import React,{Component} from 'react'
import FormComponent from './FormComponent'

class Form extends Component{

    constructor(event){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: 18,
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(event){
         const{type,name,value,checked} = event.target
         type === "checkbox" ? 
            this.setState({
                    [name]:checked
            }): this.setState({
                [name]: value
            })
    }

    render(){
        return(
            <FormComponent changeState={this.changeState} 
            data={this.state}/>
            //inace mozemo svaki individualno slat = pain in the ass
            //mozemo i preko {...this.state} - skraceno ispisano al nije preglednije
        )}

}

export default Form