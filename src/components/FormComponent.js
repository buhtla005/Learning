import React from 'react'

function FormComponent(props){
    return(
    <main className="container mt-5">
        <form>
            <input name="firstName" 
            placeholder="Jon" value={props.data.firstName} 
            onChange={props.changeState}/><br/>

            <input className="mt-3" name="lastName" 
            placeholder="Doe" value={props.data.lastName} 
            onChange={props.changeState}/><br/>
            
            <input name="age" className="mt-3"
            placeholder="29" min="1" max="99" 
            value={props.data.age} onChange={props.changeState}/><br/>
            <br/>
            
            Select your gender: <br/>
            <label>
                <input type="radio" 
                name="gender" 
                value="male" 
                checked={props.data.gender==="male"}
                onChange={props.changeState}/> Male
            </label>
            <label className="ml-3">
                <input type="radio" 
                name="gender" 
                value="female" 
                checked={props.data.gender==="female"}
                onChange={props.changeState}/> Female
            </label>
            <br/>
            
            <label>Select your destnation:
                <select name="destination" className="ml-3" 
                value={props.data.destination} onChange={props.changeState}>
                    <option value="">-- please Choose a destination --</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Oslo">Oslo</option>
                    <option value="Tokio">Tokio</option>
                    <option value="Melburne">Melburne</option>
                    <option value="London">London</option>
                </select>
            </label>
            <br/>

            <label className="ml-3">
                <input type="checkbox" name="isVegan"
                    checked={props.data.isVegan}
                    onChange={props.changeState}/>Vegan?
            </label>
            <label className="ml-3">
                <input type="checkbox" name="isKosher"
                    checked={props.data.isKosher}
                    onChange={props.changeState}/>Kosher?
            </label>
            <label className="ml-3">
                <input type="checkbox" name="isLactoseFree"
                    checked={props.data.isLactoseFree}
                    onChange={props.changeState}/>Lactose free?
            </label>
            <br/>
            <button>Submit</button>
        </form>
        <hr/>
        <h2>Enterd information:</h2>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your are: {props.data.gender}</p>
        <p>Your destination is: {props.data.destination}</p>
        <p>Your dietary restrictions: {props.data.isVegan ? " Vegan" : ""}{props.data.isKosher ? " Kosher" : ""}{props.data.isLactoseFree ? " Lactose free" : ""}</p>

    </main>
    )
}

export default FormComponent