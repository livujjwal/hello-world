import React, { useState } from "react";

const UseStatesWithObjects = () => {
    const [drink ,setDrink ] = useState({cola: 0 , pepsi:0 , sprite:0, slice: 0})
    console.log(drink);
function incCola(){
    return setDrink({...drink,cola:drink.cola+1})
}
return (
    <div>
        <h2>Cola : {drink.cola} Pepsi : {drink.pepsi} Sprite : {drink.sprite}  Slice : {drink.slice}</h2>
        <button onClick={incCola}>Cola</button>
        <button onClick={ () => (setDrink({...drink, pepsi : drink.pepsi+1}))}>Pepsi</button>
        <button onClick={ () => (setDrink({...drink, sprite :  drink.sprite+1}))}>Sprite</button>
        <button onClick={ () => (setDrink({...drink, slice : drink.slice+1}))}>Slice</button>
    </div>
)
}
export default UseStatesWithObjects;