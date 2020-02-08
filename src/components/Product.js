import React from 'react'

function Product(props){
    return(
        <div>
            <div>{props.name}</div>
            <div>$ {props.price}</div>
            <div>{props.description}</div>
            <hr className="bg-dark"/>
        </div>
    )
}

export default Product