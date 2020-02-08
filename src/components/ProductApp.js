import React from 'react'
import Product from './Product'
import productData from './productData'

function ProductApp(){

    const productComponents = productData.map(product => <Product key={product.id} 
        name={product.name} price={product.price} description={product.description}/>)

    return(
        <div className="container bg-light rounded">
            {productComponents}
        </div>
    )
}

export default ProductApp