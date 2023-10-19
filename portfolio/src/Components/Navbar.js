import React from "react";

function Navbar(props) {
    return (
        <div className="navbar">
            <h1>Ujjwal Singh</h1>
            <div className="menu">
                 <a href="#">Home</a>
                 <a href="#">About</a>
                 <a href="#">Skills</a>
                 <a href="#">Projects</a>
                 <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;