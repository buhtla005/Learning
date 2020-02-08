import React from 'react'

//salje svojstva objekta na njihova mjesta
//imamo 1 prop koji ima 1 objekt koji ima svojstva
function Unos(props){
    console.log(props)
    return(
        <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone}</p>
            <p>{props.contact.email}</p>
        </div>
    )
}

export default Unos