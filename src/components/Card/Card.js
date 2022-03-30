import React from 'react';
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'

function Card({data}) {
    const { title , price, talle, stock} = data
      
    return(
        <div className="card-item">
            <h2>{title}</h2>
            <p>Precio : $ {price}</p>
            <p>Talle : {talle}</p>
           <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Card;