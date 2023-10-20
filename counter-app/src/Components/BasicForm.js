import React, { useState } from "react";

const BasicForm = () => {
    
    const [name ,setName] = useState('')
    function showName(event){
        
       return setName(event.target.value)
    }
    const [rendering,setRendering] = useState(false)
    function handleSumbit(){
        return setRendering(true)
    }
    return (
        <div>
            <h1>Form</h1>
            <input id="name" type="text" placeholder="Enter Your Name" onChange={showName}/>
            <buttton onClick={handleSumbit}>Sumbit</buttton>
            {
                rendering == true ? <p> {  name}</p> : ""
            }
            
        </div>
    )
}

export default BasicForm;