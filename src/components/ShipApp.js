import React from 'react'
import Ship from './Ship'
import ShipData from './ShipData'

function ShipApp(){

    const shipComponent = ShipData.map(ship => <Ship key={ship.id} 
        name={ship.name} description={ship.description}/>)

    return(
        <div>
            {shipComponent}
        </div>
        
    )
}

export default ShipApp