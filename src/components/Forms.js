import React, {Component} from 'react'


class Forms extends Component{
    
    //inpute <form>a cemo spremat u state -> imat cemo update-ano svaki keystroke
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            description: "",
            isFrendly: true,
            gender: "",
            favColor: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    //react sintetic event
    //da bi ista fun radila i za checkbox moramo uzeti svojstvo type i checked
    handleChange(event){
        const{name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
            
            //[event.target.name]: event.target.value
            //[] radi jer trazimo string, a ako trazimo string unutar objekta onda ga mozemo omotat u []
            //value input boxa -> zna se koji box preko imena svojstva (property name = name in state)
    }
    //FORMIK API za manje glavobolje oko formova
    render(){

        return(
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.firstName} //state = text unutar boxa
                    name="firstName" 
                    placeholder="Jon" 
                    onChange={this.handleChange}
                    />
                    <br/>
                    <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Doe" 
                    onChange={this.handleChange}
                    />
                    <br/>
                    <textarea
                    value={this.state.description}
                    name="description"
                    onChange={this.handleChange}
                    rows="8"
                    />
                    <br/>

                    <label>
                        <input 
                        type="checkbox"
                        checked={this.state.isFrendly}
                        name="isFrendly"
                        onChange={this.handleChange}
                        /> Is friendly?
                    </label>
                    <br/>
                    <label>
                        <input 
                        type="radio"
                        value="male"
                        checked={this.state.gender === "male"}
                        name="gender"
                        onChange={this.handleChange}
                        /> Male
                    </label>
                    <br/>
                    <label>
                        <input 
                        type="radio"
                        value="female"
                        checked={this.state.gender === "female"}
                        name="gender"
                        onChange={this.handleChange}
                        /> Female
                    </label>
                    <br/>
                    <label>Favorite Color:</label>
                    <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor">
                        <option value="red">RED</option>
                        <option value="green">GREEN</option>
                        <option value="blue">BLUE</option>
                    </select>

                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h1>You are: {this.state.gender}</h1>
                    <h1>Your favorite color is: {this.state.favColor}</h1>
                    {this.state.description}

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Forms