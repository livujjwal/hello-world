import React, { useState } from "react";

const BasicForm = () => {
    
    const [name ,setName] = useState('')
    function showName(event){
        
       return setName(event.target.value)
    }
    return (
        <div>
            <h1>Form</h1>
            <input id="name" type="text" placeholder="Enter Your Name" onKeyDown={showName}/>
            <p>{name}</p>
        </div>
    )
}

export default BasicForm;