import React,{useState} from "react";
import Button from "@mui/material/Button"

const ItemCount = ({stock, initial}) => {
    const [count , setCount] = useState (initial)
    const positiveProduct = () =>{
        if(count < stock){
            setCount (count + 1)
        }
       
    } 

    const negativeProduct = () =>{
        if(count > 0){
            setCount (count - 1)
        }
    }

    const onAdd = () =>{
        alert(`agregaste ${(count)} productos a tu carrito`)
    }

    return(
        <div>
        <div>
         <button onClick={positiveProduct}> + </button>
           <span>{count}</span>
          <button onClick={negativeProduct}> - </button>
          </div>
        <button onClick={onAdd}> agregar al carrito </button>
        </div>
    
)}

export default ItemCount;